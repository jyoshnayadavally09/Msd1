let express = require("express")
let app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen("3000",()=>{
    console.log("server is started");
    
})
app.get('/',(req,res)=>{
    res.send("working");
})
let books=[{
    title : "lion the king",
    author:"me",
    price:7000,
    id:1
},
{
    title : "Engineering",
    author:"king",
    price:9000,
    id:2
}
]
app.get('/books',(req,res)=>{
    res.render("books",{books})
})
app.get('/books/new',(req,res)=>{
    res.render("new.ejs");
})
app.post('/books',(req,res)=>{
    console.log(req.body);
    
    let {title,author,price} = req.body;
    books.push({
        title,
        author,
        price,
        id:books.length+1
    })

    res.redirect('/books')
})