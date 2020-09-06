exports.handler = async event => {
  console.log(event.body)
  return {
    statusCode: 200,
    body: `Hello world`,
  }
}
