// create a array of objects with products -> category sub category name price discount
// create a front end page and user can continuosly add data
// create report -> gives analysis on categoty and sub category
var products = [
    {"category" : "Food","sub-category" : "Breakfast","price" : "30","discount" : "2"},
    {"category": 'Appliances', "sub-category": 'TV', "price": '200000', "discount": '7000'},
    {"category": 'Appliances', "sub-category": 'Fridge', "price": '70000', "discount": '12000'},
    {"category": 'Appliances', "sub-category": 'AC', "price": '20000', "discount": '1223'},
]

var addbtn = document.getElementById("addbtn");
addbtn.addEventListener('click',function(){
    var forms = document.getElementById("prfrm");
    var prd = {
        "category" : forms[0].value,
        "sub-category" : forms[1].value,
        "price" : forms[2].value,
        "discount" : forms[3].value,
    }
    for (let i = 0; i<4;i++)
        forms[i].value="";
    alert("Product added!")
    products.push(prd);
})

var createbtn = document.getElementById("search");
createbtn.addEventListener('change',function(){
    var stx = document.getElementById("search").value;
    var ctr = 0;
    var str = "";
    for(let i = 0; i<products.length ; i++){
        if(products[i]["category"]== stx){
            ctr++;
            str += `<div class= "card">`;
            for(let k in products[i]){
                str += `<h5>${k} : ${products[i][k]}</h> <br>`;
            }
            str += `</div> `;
        }
    }
    if(stx != ""){
        document.getElementById("result").innerHTML = str;
        document.getElementById("result").innerHTML += `<h2> ${stx} -> ${ctr} </h2>`;
    }
    else
        document.getElementById("result").innerHTML = ``;
})