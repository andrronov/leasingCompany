import mailSender from "./mailSender.js"

class Controller{
   async sendApplication(req, res){
      try{
         const application = req.body
         const emailData = await mailSender.sendEmail(application)

         return res.status(200).json(emailData)
      }
      catch(error){
         return res.status(401).json(error)
      }
   }
}

export default new Controller()