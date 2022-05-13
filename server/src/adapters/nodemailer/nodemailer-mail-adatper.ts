import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4a7003ccad0427",
    pass: "a27407b400fd74"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <cebola@feedget.com>',
      to: 'Waldyr Romero <roxa@gmail.com>', 
      subject,
      html: body,
    });

  };
}