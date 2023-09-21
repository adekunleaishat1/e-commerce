let totalcart = []
let dis = document.getElementById("increas")
let con = document.getElementById("con")
let cartarr = JSON.parse(localStorage.getItem("cart"))
let array = JSON.parse(localStorage.getItem("checkout"))
let count = 1
let qu=1
con.innerHTML = ""
console.log(cartarr);
let checkoutprice=0
// let my_arr = []
// for (let i = 0; i < cartarr.length; i++) {
//   my_arr.push(cartarr[i].totalprice)
//   localStorage.setItem("checkout",JSON.stringify(my_arr))
// }
    for (let index = 0; index < cartarr.length; index++) {
        const element = cartarr[index].product;
        if(array == null){
          array = []
           array.push({
          product: cartarr[index],
          totalprice:cartarr[index].totalprice,
          checkoutprice:checkoutprice.value,
          qu:qu
        })
        localStorage.setItem("checkout",JSON.stringify(array))
        console.log(array);
        }else{
          array.push({
          totalprice:cartarr[index].totalprice,
          checkoutprice:checkoutprice.value
        })
        localStorage.setItem("checkout",JSON.stringify(array))
        }
        console.log(cartarr[index]);
        console.log(cartarr[index].product);
        checkoutprice=checkoutprice+cartarr[index].totalprice
        document.getElementById("total").innerHTML="₦"+checkoutprice
        document.getElementById("out").innerHTML ="checkout ₦"+checkoutprice
        localStorage.setItem("cart",JSON.stringify(cartarr));
        con.innerHTML += `<div class="contain1">
        <div class="right">
          <img class="in" src="${element.images[0]}" alt= ""><br><br>
          <h1>${element.title}</h1>
          <h2>${element.description}</h2>
          <div class="rat">${element.rating}%</div>
          <button id="bin" onclick="remove(${index})"><span>remove item</span><i class="fa fa-trash"></i></button>
        </div>
        <div class="side">
          <p id='${index}'>₦${element.price}</p>
          <div class="di">
             <button id="min" onclick="min(${index})">-</button>
             <div id="${index}a">${count}</div>
             <button id="min" onclick="plus(${index})">+</button>
          </div>
        </div>
     </div>`
    }
    // <button id="min" onclick="min(event,  ${index})">-</button>
    // <div id="increas">${count}</div>
    // <button id="min" onclick="plus(event, ${index})">+</button>
// function plus(index) {
//   if(array == null){
//     array = []
//      array.push({
//     totalprice:cartarr[index].totalprice++,
//     checkoutprice:checkoutprice.value
//   })
//   localStorage.setItem("checkout",JSON.stringify(array))
//   }else{
//     array.push({
//     totalprice:cartarr[index].totalprice++,
//     checkoutprice:checkoutprice.value
//   })
//   localStorage.setItem("checkout",JSON.stringify(array))
//   }
//         cartarr[index].qu++
//         console.log(cartarr[index].qu++);
//         cartarr[index].totalprice=cartarr[index].qu*cartarr[index].product.price
//        console.log(cartarr[index]);
//        document.getElementById(index).innerHTML="₦"+cartarr[index].totalprice
//        document.getElementById(index+"a").innerHTML=cartarr[index].qu
//        checkoutprice=0
//        for (let i = 0; i < cartarr.length; i++) {
//         const element = cartarr[i];
//         checkoutprice=checkoutprice+cartarr[i].totalprice
//         document.getElementById("total").innerHTML="₦"+checkoutprice
//         document.getElementById("out").innerHTML ="checkout ₦"+checkoutprice
//        }
//        localStorage.setItem("cart",JSON.stringify(cartarr))
// }
function plus(index) {
  let cartarr = JSON.parse(localStorage.getItem("cart")) || [];
  let array = JSON.parse(localStorage.getItem("checkout")) || [];

  cartarr[index].qu++;
  cartarr[index].totalprice = cartarr[index].qu * cartarr[index].product.price;

  document.getElementById(index).innerHTML = "₦" + cartarr[index].totalprice;
  document.getElementById(index + "a").innerHTML = cartarr[index].qu;

  let checkoutprice = 0;
  for (let i = 0; i < cartarr.length; i++) {
    const element = cartarr[i];
    checkoutprice += cartarr[i].totalprice;
  }

  document.getElementById("total").innerHTML = "₦" + checkoutprice;
  document.getElementById("out").innerHTML = "checkout ₦" + checkoutprice;

  array.push({
    product:cartarr[index],
    totalprice: cartarr[index].totalprice,
    checkoutprice: checkoutprice,
    qu:qu
  });
  
  localStorage.setItem("cart", JSON.stringify(cartarr));
  localStorage.setItem("checkout", JSON.stringify(array));
}

function min(index){
  let cartarr = JSON.parse(localStorage.getItem("cart")) || [];
  let array = JSON.parse(localStorage.getItem("checkout")) || [];
 if (cartarr[index].qu==1) {
  cartarr[index].qu==1
  cartarr[index].totalprice=cartarr[index].qu*cartarr[index].product.price
 console.log(cartarr[index]);   
 document.getElementById(index).innerHTML= "₦"+cartarr[index].totalprice
 document.getElementById(index+"a").innerHTML=cartarr[index].qu
 checkoutprice=0
 for (let i = 0; i < cartarr.length; i++) {
  const element = cartarr[i];
  checkoutprice=checkoutprice+cartarr[i].totalprice
  document.getElementById("total").innerHTML="₦"+checkoutprice
  document.getElementById("out").innerHTML ="checkout ₦"+checkoutprice
 }
 array.push({
  product:cartarr[index],
  totalprice: cartarr[index].totalprice,
  checkoutprice:cartarr[i].totalprice,
  qu:qu
});
localStorage.setItem("checkout", JSON.stringify(array));
 localStorage.setItem("cart",JSON.stringify(cartarr))
 } else {
 
  cartarr[index].qu--
  cartarr[index].totalprice=cartarr[index].qu*cartarr[index].product.price
 console.log(cartarr[index]);   
 document.getElementById(index).innerHTML="₦"+cartarr[index].totalprice
 document.getElementById(index+"a").innerHTML=cartarr[index].qu
 checkoutprice=0
 for (let i = 0; i < cartarr.length; i++) {
  const element = cartarr[i];
  checkoutprice=checkoutprice+cartarr[i].totalprice
  document.getElementById("total").innerHTML="₦"+checkoutprice
  document.getElementById("out").innerHTML ="checkout ₦"+checkoutprice
 }
 }
 array.push({
  product: cartarr[index],
  totalprice: cartarr[index].totalprice,
  checkoutprice: cartarr[i].totalprice,
  qu:qu
});
 localStorage.setItem("cart",JSON.stringify(cartarr));
 localStorage.setItem("checkout", JSON.stringify(array));
}
function remove(index) {
    console.log(index)

    cartarr.splice(index, 1)
    console.log(cartarr)
    con.innerHTML = ""
    for (let index = 0; index < cartarr.length; index++) {
        const element = cartarr[index].product;
        con.innerHTML += `<div class="contain1">
      <div class="right">
        <img class="in" src="${element.images[0]}" alt= ""><br><br>
        <h1>${element.title}</h1>
        <h2>${element.description}</h2>
        <div class="rat">${element.rating}%</div>
        <button id="bin" onclick="remove(${index})"><span>remove item</span><i class="fa fa-trash"></i></button>
      </div>
      <div class="side">
        <p id='${index}'>₦${element.price}</p>
        <div class="di">
           <button id="min" onclick="min(${index})">-</button>
           <div id="${index}a">${count}</div>
           <button id="min" onclick="plus(${index})">+</button>
        </div>
      </div>
     </div>`

    }
    checkoutprice=0
 for (let i = 0; i < cartarr.length; i--) {
  const element = cartarr[i];
  checkoutprice=checkoutprice+cartarr[i].totalprice
  document.getElementById("total").innerHTML="₦"+checkoutprice
  document.getElementById("out").innerHTML ="checkout ₦"+checkoutprice
 }
}
function addto(index){
    totalcart.push(cartarr[index].price)
    
}
function makePayment() {
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-f04cafbca2e362350f953759e91f2782-X",
    tx_ref: "yeesha-48981487343MDI0NzMx",
    amount: checkoutprice,
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "aishatadekunle877@gmail.com",
      phone_number: "08102909304",
      name: "Rose DeWitt Bukater",
    },
    customizations: {
      title: "The Titanic Store",
      description: "Payment for an awesome cruise",
      logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
    },
  });
}