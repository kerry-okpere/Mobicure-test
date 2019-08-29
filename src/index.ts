import app from "./app";

const port = 5000;

app.listen(port, function (err) {
    try{
        console.log(`Example app listening on port ${port}`);
    }catch(err){
        throw err;
    }
  
});
