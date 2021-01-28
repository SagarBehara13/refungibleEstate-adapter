const { Requester, Validator } = require('@chainlink/external-adapter')

const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

const customParams = {
  tokenId: ['tokenId', '1', '2', '3'],
  endpoint: false
}

const createRequest = (input, callback) => {
  // The Validator helps you validate the Chainlink request data
  const validator = new Validator(callback, input, customParams)
  const jobRunID = validator.validated.id
  const endpoint = validator.validated.data.endpoint || 'land'
  const url = `https://refungible-estate1.herokuapp.com/api/request/search/${endpoint}`
  const tokenId = validator.validated.data.tokenId
  //const tsyms = validator.validated.data.quote.toUpperCase()

  const params = {
    tokenId
  }

  const config = {
    url,
    params,
    method: 'post'
  }
  console.log('config', config);
  // const configUrl = `${url}?tokenId=${tokenId}`
  // console.log(configUrl)

  Requester.request(config, customError)
    .then(response => {
      //console.log(response);
      callback(response.status, Requester.success(jobRunID, response))
    })
    .catch(error => {
      callback(500, Requester.errored(jobRunID, error))
    })
}


exports.gcpservice = (req, res) => {
  createRequest(req.body, (statusCode, data) => {
    res.status(statusCode).send(data)
  })
}


exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data)
  })
}


exports.handlerv2 = (event, context, callback) => {
  createRequest(JSON.parse(event.body), (statusCode, data) => {
    callback(null, {
      statusCode: statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false
    })
  })
}


module.exports.createRequest = createRequest
