import  express,{Express,Request,Response}  from "express";
// import dotenv from 'dotenv';
// import * as database from "../tour-management/config/database";
// import cors  from 'cors';
// import path from "path";
// import methodOverride from "method-override";
// import bodyParser from "body-parser";
// import clientRoute from "./routers/client";
// import adminRoute from "./routers/admin";
// import { systemconfix } from "../tour-management/config/confix";

// dotenv.config();
// database.connect();

const app: Express = express();

const port : number = 3006;

// const port : number | string = process.env.PORT || 3006;


// app.set("views", `${__dirname}/views`);
// app.set("view engine","pug");

// app.use(express.static(`${__dirname}/public`));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// //method 
// app.use(methodOverride("_method"));


// app.use(cors());

// Use tinymce
// app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
// End tinymce


//app local variables
// app.locals.prefixAdmin =systemconfix.prefixAdmin

//Admin Routes
// adminRoute(app)

//Client Routes
// clientRoute(app)

app.get('/', (req : Request, res : Response) => {
  res.send("ok")
})

app.listen(port,() =>{
  console.log(`Server is running on port ${port}`);
})