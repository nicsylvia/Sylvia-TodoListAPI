import mongoose from "mongoose";

const liveURI = "mongodb+srv://sylviaDB:atlaspassword@cluster0.fhx2vt1.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(liveURI);

mongoose.connection.on(
    "open", () =>{
        console.log("DATABASE IS CONNECTED TO SERVER");
    }
).once(
    "error", (error) =>{
        console.log("An error occured in connecting database");
    }
)