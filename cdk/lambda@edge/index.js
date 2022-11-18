exports.handler = (event, context, callback) => {
  // Extract the request from the CloudFront event that is sent to Lambda@Edge
  const { request } = event.Records[0].cf;

  // Log the URI as received by CloudFront to be used to fetch from origin
  // eslint-disable-next-line no-console
  console.log(`Old URI: ${request.uri}`);

  // Check whether the URI is missing a file name.
  if (request.uri.endsWith('/')) {
    request.uri += 'index.html';
  }
  // Check whether the URI is missing a file extension.
  else if (!request.uri.includes('.')) {
    request.uri += '/index.html';
  }

  // if URI matches to 'index.html' then redirect to a favorite shopper's page
  if (request.uri === '/index.html') {
    // Generate HTTP redirect response to a different landing page.
    const redirectResponse = {
      status: '301',
      statusDescription: 'Page does not exist',
      headers: {
        location: [
          {
            key: 'Location',
            value: '/arron-dickinson/index.html',
          },
        ],
      },
    };
    callback(null, redirectResponse);
  }

  // Log the new URI as received by CloudFront to be used to fetch from origin
  // eslint-disable-next-line no-console
  console.log(`New URI: ${request.uri}`);

  // Return to CloudFront
  return callback(null, request);
};
