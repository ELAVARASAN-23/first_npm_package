exports.ExpressTemplate = 
     `
    const express= require('express')
    const app = express();
    app.get('/',()=>{
        res.send({response: "No man can win every battle, but no man should fall without a struggle"})
    })
    app.listen(8080,()=>{
        console.log("Pour Project is Running at 8080 port")
    })
    `
