let exp = require('express')
let app = exp()
app.listen(3030 , ()=>{
    console.log("running")
})
app.get('/', (req,res)=>{
    res.send("djkndkdnkl")
})