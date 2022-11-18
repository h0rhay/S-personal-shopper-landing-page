#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStack } from '../lib/cdk-stack';

const app = new cdk.App();
new CdkStack(app, 'digital-shopper-sandbox-ui', {
  stackName: 'digital-shopper-sandbox-ui',
  env: {
    region: 'eu-west-1',
  },
  tags: {
    project: 'innovation',
    team: 'innovation',
    application: 'digital-shopper',
  },
  deploymentStage: 'SANDBOX',
});

new CdkStack(app, 'digital-shopper-dev-ui', {
  stackName: 'digital-shopper-dev-ui',
  env: {
    region: 'eu-west-1',
  },
  tags: {
    project: 'innovation',
    team: 'innovation',
    application: 'digital-shopper',
  },
  deploymentStage: 'DEVELOPMENT',
});

new CdkStack(app, 'digital-shopper-qa-ui', {
  stackName: 'digital-shopper-qa-ui',
  env: {
    region: 'eu-west-1',
  },
  tags: {
    project: 'innovation',
    team: 'innovation',
    application: 'digital-shopper',
  },
  deploymentStage: 'QA',
});

new CdkStack(app, 'digital-shopper-prod-ui', {
  stackName: 'digital-shopper-prod-ui',
  env: {
    region: 'eu-west-1',
  },
  tags: {
    project: 'innovation',
    team: 'innovation',
    application: 'digital-shopper',
  },
  deploymentStage: 'PRODUCTION',
});
