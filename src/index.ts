import app from "./app";
import { PORT } from "./config/env";

// const port = PORT || 5000;

app.listen(PORT, (err: any) => {
    try{
        console.log(`Example app listening on port ${PORT}`);
    }catch(err){
        throw err;
    }
  
});
