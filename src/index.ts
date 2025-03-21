import { app } from './server'
import dotenv from "dotenv";
dotenv.config();


const PORT = process.env.PORT
//Implement routing / end-points here.

app.get('/', async (req,res) => {
  res.status(200).send(`"Hello World!" - From "Test App <3"`)
})

app.get('/test', async (req, res) => {
  var session: string = req.session.id || ""
  try{
    if(!session){  // Initialize session when one does not exist
      res.status(200).json({ res: "New session created!"})
    }
    else{
      // Add new operation
      res.status(200).json({ res: "An existing session was found!"})
      
    }
    // Update session data here
    //Then resolve or pass data to next step
  }catch(err){
    res.status(400).json({res: `An error occurred: ${err}`})
  }
});


//Start application
app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`),
)