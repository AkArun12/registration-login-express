import express from "express";
import connectDB from "./db /connectdb.js";
import web from './routes/web.js'
import {join} from  'path'

const app = express();
const port = process.env.PORT || "3000";

const DATABASE_URL=process.env.DATABASE_URL ||"mongodb://localhost:27017"

// Database connection 
connectDB(DATABASE_URL)


// Set Engine template
// app.set('views', './views')
app.set('view engine', 'ejs')



// Static files- publicfolder (we can use css and js now)
app.use(express.static(join(process.cwd(),"public")))




//load Routes
app.use('/',web)






app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
