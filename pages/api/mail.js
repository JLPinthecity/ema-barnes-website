const mail = require("@sendgrid.mail");

mail.setAPIKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Title: ${body.title}\r\n
  Services: ${body.services}\r\n
  Word Count: ${body.wordcount}\r\n
  Genre: ${body.genre}\r\n
  Description: ${body.description}\r\n
  Goals: ${body.goals}\r\n
  Excerpt: ${body.excerpt}\r\n
  `;

  const data = {
    to: "hitherejoann@gmail.com",
    from: "",
    subject: "New web form message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);
  res.status(200).json({ status: "Ok" });
}

//we want to accept data as our payload so we can use data in our mail request
