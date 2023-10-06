class UserController{
    static home=(req,res)=>{

        res.render('index')
    }
    static login=(req,res)=>{

        res.render('login')
    }

    static registration=(req,res)=>{

        res.render('registration');
    }








}


export default UserController