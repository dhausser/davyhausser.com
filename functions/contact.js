const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = async (event) => {
  const { email, message } = JSON.parse(event.body)
  const msg = {
    to: 'davy.hausser@gmail.com',
    from: 'davy.hausser@icloud.com',
    subject: 'New contact lead from davyhausser.com',
    html: `<strong>email:</strong> ${email} <strong>message:</strong> ${message}`,
  }

  try {
    await sgMail.send(msg)
    return {
      statusCode: 200,
    }
  } catch (error) {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
      return {
        statusCode: 500,
        body: error.response.body.message,
      }
    }
  }
}
