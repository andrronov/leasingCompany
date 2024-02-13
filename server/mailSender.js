import nodemailer from "nodemailer"

class MailSender{
   constructor(){
      this.transporter = nodemailer.createTransport({
         host: "smtp.mail.ru",
         port: 465,
         secure: true,
         auth: {
            user: "leasing.paradise@mail.ru",
            pass: "7UEbh1jVKwFPKn3jWuC4",
         },
      });
   }

   async sendEmail(letter) {
      const info = await this.transporter.sendMail({
         from: 'leasing.paradise@mail.ru',
         to: "leasing.paradise@mail.ru",
         subject: `Новая заявка от ${letter?.userName}, ${letter?.userPhone}`,
         html: `
               <div style="display: flex; flex-direction:column; background-color: #2453E0; padding: 10px; color: white">
                  <h1 style="font-style: italic; font-size: 1.5rem; justify-self: center;">Leasing Paradise</h1>
                  <p style="font-size:1.15rem">Имя: ${letter?.userName}</p>
                  <p style="font-size:1.15rem">Телефон: ${letter?.userPhone}</p>
                  <p style="font-size:1.15rem">ИНН: ${letter?.userINN}</p>
                  <p style="font-size:1.15rem">Интересующий транспорт: ${letter?.userTransport}</p>

               </div>
            `,
      });

      return info
   }
}

export default new MailSender()