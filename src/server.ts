import express from 'express'
import session from 'express-session';
import dotenv from "dotenv";
import cors from 'cors'
dotenv.config();

//Define custom session store values
declare module "express-session" {
    interface SessionData {
        id: string;
        cookie: Cookie;
        //add custom session params here.
    }
  }

const app = express()

//Append middleware and other application startup tasks here.
app.use(express.json())
app.use(cors({ 
    origin: 'http://localhost:5173', //port corresponds to vite default
    //Append other CORS options (POST,GET,ETC)
 })); 
 
app.use(session({
    secret: 'your-secret-key', // Secret used to sign the session ID cookie
    resave: false,
    saveUninitialized: true,
    // Example using MemoryStore for session storage (not suitable for production)
    store: new session.MemoryStore(),
}));

export {app};