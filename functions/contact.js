exports.handler = async (event) => {
  const { email, message } = JSON.parse(event.body)

  console.log({ email, message })

  return {
    statusCode: 200,
    body: JSON.stringify({ email, message }),
  }
}
