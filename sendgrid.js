const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (msg) => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
