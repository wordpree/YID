// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendEmail from "../../sendgrid";

export default async function handler(req, res) {
  try {
    const { name, email, phone, talk } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send(`Invalid parameters.`);
    }
    const msg = {
      to: "wanghaijun04@gmail.com",
      from: "wanghaijun04@gmail.com",
      subject: `New enquiry from YID`,
      template_id: "d-b71bf00f774f4b168f44c725e97f7ddd",
      dynamic_template_data: {
        name: name,
        email: email,
        phone: phone,
        talk: talk,
      },
    };
    await sendEmail(msg);
    res.status(200).send(`Email sent successfully`);
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Email not sent.");
  }
}
