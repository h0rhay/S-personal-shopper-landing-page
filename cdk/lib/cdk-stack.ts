import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deployment from '@aws-cdk/aws-s3-deployment';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as certificate from '@aws-cdk/aws-certificatemanager';

interface AppProps extends cdk.StackProps {
  deploymentStage: String;
}

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: AppProps) {
    super(scope, id, props);

    // S3 Bucket creation
    const bucket = new s3.Bucket(this, 's3-bucket', {
      bucketName:
        props?.deploymentStage === 'PRODUCTION'
          ? 'stylist.selfridges.com'
          : cdk.Aws.STACK_NAME,
      publicReadAccess: false,
      websiteIndexDocument: 'index.html',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // S3 Deployment
    new s3Deployment.BucketDeployment(this, 's3-deployment', {
      sources: [s3Deployment.Source.asset('../public')],
      destinationBucket: bucket,
    });

    // Lambda @ Edge function creation
    const edgeFunction = new cloudfront.experimental.EdgeFunction(
      this,
      'edgeFunction',
      {
        runtime: lambda.Runtime.NODEJS_12_X,
        handler: 'index.handler',
        code: lambda.Code.fromAsset('lambda@edge'),
      },
    );

    // OAI creation
    const cloudFrontOAI = new cloudfront.OriginAccessIdentity(this, 'OAI', {
      comment: `OAI for Digital shopper website - ${props?.deploymentStage}.`,
    });

    const certificateArn: string =
      'arn:aws:acm:us-east-1:548094949775:certificate/c9507f59-1466-41b2-8f70-ac16d4b25b14';

    const certificateCF: cloudfront.ViewerCertificate =
      cloudfront.ViewerCertificate.fromAcmCertificate(
        certificate.Certificate.fromCertificateArn(
          this,
          'ds_certificate',
          certificateArn,
        ),
        {
          aliases: ['stylist.selfridges.com'],
        },
      );

    interface CFProps extends cloudfront.CloudFrontWebDistributionProps {
      viewerCertificate?: cloudfront.ViewerCertificate;
    }

    // CloudFront Props
    let cloudFrontDistProps: CFProps = {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
            originAccessIdentity: cloudFrontOAI,
          },
          behaviors: [
            {
              isDefaultBehavior: true,
              minTtl: cdk.Duration.seconds(0),
              maxTtl: cdk.Duration.seconds(0),
              defaultTtl: cdk.Duration.seconds(0), // Set TTL to 0 - to reverse proxy the request
              lambdaFunctionAssociations: [
                {
                  eventType: cloudfront.LambdaEdgeEventType.VIEWER_REQUEST, // Attached L@E to CloudFront
                  lambdaFunction: edgeFunction.currentVersion,
                },
              ],
            },
          ],
        },
      ],
      errorConfigurations: [
        {
          errorCode: 403,
          errorCachingMinTtl: 0,
          responseCode: 403,
          responsePagePath: '/index.html',
        },
        {
          errorCode: 404,
          errorCachingMinTtl: 0,
          responseCode: 404,
          responsePagePath: '/index.html',
        },
      ],
    };

    if (props?.deploymentStage === 'PRODUCTION') {
      cloudFrontDistProps.viewerCertificate = certificateCF;
    }

    // CloudFront creation
    const webDistribution = new cloudfront.CloudFrontWebDistribution(
      this,
      'webDistribution',
      cloudFrontDistProps,
    );

    new cdk.CfnOutput(this, 'BucketName', {
      value: bucket.bucketName,
      exportName: 'BucketName',
    });

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: webDistribution.distributionDomainName,
      exportName: 'CloudFrontURL',
    });
  }
}
