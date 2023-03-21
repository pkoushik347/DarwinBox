async function asyncreturn(){
    setTimeout(()=>{
        return {
            name : "ksk",
        };
    },3000);
}

var usr =asyncreturn().then(
    console.log(usr)
);
