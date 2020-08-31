const axios = require('axios');

function binChecker(binNumber, timeout=5000){
  let apiKey = process.env.PROMPTAPI_TOKEN
  
  if (!apiKey) {
    throw new Error('You need to set PROMPTAPI_TOKEN environment variable')
  }

  let url = process.env.PROMPTAPI_TEST_ENDPOINT || `https://api.promptapi.com/bincheck/${binNumber}`

  let config = {
    method: 'get',
    url: url,
    headers: {
      'apikey': apiKey,
    },
    timeout: timeout,
  };

  return axios(config).then(response => {
    return response.data
  })
  .catch(error => {
    if (error.response) {
      return {error: error.response.data.message}
    } else {
      return {error: error.message}
    }
  });
}

module.exports = {
  binChecker,
}
