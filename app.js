console.log(("first node program"));
const express = require("express")
// const adsb = require("addsub");
// console.log(adsb.addition(3,4));
// console.log(adsb.substract(3,4));
const app = express();
app.use(express.json())
products ={
"p1" : {category: "Breakfast", price: "30"  },
"p3" : {category: 'Fridge', price: '70000'},
"p4" : {category: 'AC', price: '20000'},
"p2" : {category: 'TV', price: '200000'},
}

    app.listen(3470, function (req, res) {
        console.log("http://localhost:3470");
    })


app.get("/products", (req, res) => {
    res.send(products)
})

app.get("/products/:category", (req, res) => {
    res.send(products[req.params.category])
})

app.post("/products",(req,res)=>{
    console.log(req.body);
    products["p5"]={
        category : req.body.category,
        price : req.body.price
    }
    res.send(products)
})

app.put("/products/:category",(req,res)=>{
    products[req.params.category]={
        category : req.body.category,
        price : req.body.price
    }
    res.send(products)
})

app.put("/products/:price",(req,res)=>{
    products[req.params.category]={
        category : req.body.category,
        price : req.body.price
    }
    res.send(products)
})
