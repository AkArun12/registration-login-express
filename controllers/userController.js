import userModel from "../models/User.js";
// import bcrypt from 'bcrypt'

class UserController {
  static home = (req, res) => {
    res.render("index");
  };

  static registration = (req, res) => {
    res.render("registration");
  };

  //   password used Without hash
  static createUserDoc = async (req, res) => {
    try {
      // creating new document using model

      const doc = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })

      // saving document

      await doc.save()
      res.redirect("login")
    } catch (err) {
      console.log(err);
    }
  };

  // >>With hash password
  //   static createUserDoc = async (req, res) => {
  //     const hashPassword= await bcrypt.hash(req.body.password,10)
  //     try {
  // creating new document using model

  //       const doc = new userModel({
  //         name: req.body.name,
  //         email: req.body.email,
  //         password: hashPassword
  //       });

  // saving document

  //       await doc.save();
  //       res.redirect("login");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  
    static login = (req, res) => {
      res.render("login");
    };

  //   >>Verify Without hash
  static verifyLogin = async (req, res) => {
    try {
      // getting data input by user but not from databse
      const { email, password } = req.body;
      const result = await userModel.findOne({ email: email });
      //   console.log(result);
      if (result != null) {
        if (result.email == email && result.password == password) {
          res.send(`<h1>Dashboard ---${result}</h1>`);
        } else {
          res.send("<h1>password is not valid </h1> ");
        }
      } else {
        res.send("<h1>You are not a registered user. </h1> ");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Verifyy USING HASH >>>>>>
  //   static verifyLogin = async (req, res) => {
  //     try {
  // getting data input by user but not from databse
  //       const { email, password } = req.body;
  //       const result = await userModel.findOne({ email: email });
  //   console.log(result);
  //       if(result !=null){
  //         const isMatch=await bcrypt.compare(password,result.password)
  //         if (result.email == email && isMatch) {
  //           res.send(`<h1>Dashboard ---${result}</h1>`);
  //         } else {
  //           res.send("<h1>password is not valid </h1> ");
  //         }

  //       }
  //       else{
  //          res.send("<h1>You are not a registered user. </h1> ");
  //       }

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
}

export default UserController;
