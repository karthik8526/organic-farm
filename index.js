let box = [
  {
    image: "images/2.png",
    name1: "AGRICULTURE",
    content: "An agricultural product is any commodity, whether raw or processed, that is the result of farming and related activities like cultivating plants and raising livestock. ",
    page: "fruits.html"
  },
  {
    image: "./images/3.png",
    name1: "ORGANIC",
    content: "We sell fresh and natural organic products grown without chemicals or pesticides. Our products include organic fruits, vegetables, grains, pulses, and spices. They are healthy, safe, and eco-friendly."
  },
  {
    image: "images/4.png",
    name1: "DIARY",
    content: "We sell fresh and healthy dairy products made from pure milk. Our products include milk, curd, butter, ghee, cheese, and paneer. All products are hygienically prepared and rich in nutrients. "
  }
];

let overallbox = document.getElementsByClassName("overallbox")[0];




if (overallbox !== undefined) {
  console.log(overallbox);
  box.forEach((a) => {
    overallbox.innerHTML += `
    <div class="boxx">
        <img src="./${a.image}.png"/>
        <h3> ${a.name1}</h3>
        <h5> PRODUCTS </h5> 
        <p> ${a.content}</p>
        <button onclick="window.location.href='${a.page}'"> <i class="fa-solid fa-arrow-right-long"></i> </button>
    </div> `
  }
  );
}





let card = document.getElementsByClassName("card");

function test(word) {
  for (x = 0; x < card.length; x++) {
    if (card[x].id == word) {
      // console.log("success")
      card[x].style = "height:200px"
    }
    else {
      card[x].style = "height:50px"
    }
  }

}



// FARMERS 

let farmers = [
  {
    image: "images/farmer1",
    name: "Gopal",
    ocupation: "Farmer"
  },
  {
    image: "images/farmer2",
    name: "Zara",
    ocupation: "Farmer"
  },
  {
    image: "images/farmer3",
    name: "Kevin Smith",
    ocupation: "Farmer"
  }

];


let farmbox = document.getElementsByClassName("farmers")[0];

if (farmbox !== undefined) {
  farmers.forEach((a) => {
    farmbox.innerHTML += `
                <div class="farmer">
                    <img src="./${a.image}.png"/>
                    <div><h2> ${a.name}</h2>
                    <p> ${a.ocupation}  </p>
                    </div>
                </div>`
  }

  );
}


// slider

let index = 0;

const track = document.querySelector(".track");
const slides = document.querySelectorAll(".overallcard");
const totalSlides = slides.length;

function next() {
  if (index < totalSlides - 1) {
    index++;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
}

function prev() {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
}




// form validation

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
// let loginsuccess=document.getElementById("login-success");

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  message = id("message"),

  errormsg = classes("error"),
  successicon = classes("success"),
  failureicon = classes("failure");

//form um setinterval mari than vela seium

console.log(form)
if (form !== null) {
  form.addEventListener("submit", function (abc) {
    // alert("hello")
    abc.preventDefault();
    console.log(abc);

    summa(username, 0, "Username cannot be blank");
    summa(email, 1, "Email cannot be blank");
    summa(password, 2, "Phone no cannot be blank");
    summa(message, 3, "Message anything write")
    // if(username.value==="ram"&& email.value==="ram@123" && password.value==="ram123"){
    //     // alert("login success")
    //     loginsuccess.style="top:0";

    // }


  });
}

let summa = (a, b, c) => {
  if (a.value.trim() == "") {
    errormsg[b].innerHTML = c;

    a.style.border = "2px solid red";
    //icon

    failureicon[b].style.opacity = "1";
    successicon[b].style.opacity = "0";
  }
  else {
    errormsg[b].innerHTML = "";

    a.style.border = "2px solid green";

    //icon

    failureicon[b].style.opacity = "0";
    successicon[b].style.opacity = "1";


  }
}
// function login(){
//     loginsuccess.style="top:-100%"
// }








// fruits search box









let fruits = [
  {
    id: 1,
    img: "./images/apple",
    name: "Apple",
    price: 120,
    qty: 0

  },
  {
    id: 2,
    img: "./images/avacado",
    name: "Avacado",
    price: 100,
    qty: 0

  },
  {
    id: 3,
    img: "./images/banana",
    name: "Banana",
    price: 80,
    qty: 0

  },
  {
    id: 4,
    img: "./images/coconut",
    name: "Coconut",
    price: 150,
    qty: 0

  },
  {
    id: 5,
    img: "./images/custardapple",
    name: "Custardapple",
    price: 180,
    qty: 0

  },
  {
    id: 6,
    img: "./images/darkgrapes",
    name: "Darkgrapes",
    price: 200,
    qty: 0

  },
  {
    id: 7,
    img: "./images/dragonfruit",
    name: "Dragonfruit",
    price: 250,
    qty: 0

  },
  {
    id: 8,
    img: "./images/greengrapes",
    name: "Greengrapes",
    price: 150,
    qty: 0

  },
  {
    id: 9,
    img: "./images/guava",
    name: "Guava",
    price: 120,
    qty: 0

  },
  {
    id: 10,
    img: "./images/jackfruit",
    name: "Jackfruit",
    price: 100,
    qty: 0

  },
  {
    id: 11,
    img: "./images/mango",
    name: "Mango",
    price: 150,
    qty: 0

  },
  {
    id: 12,
    img: "./images/muskmelon",
    name: "Muskmelon",
    price: 120,
    qty: 0

  },
  {
    id: 13,
    img: "./images/orange",
    name: "Orange",
    price: 100,
    qty: 0

  },
  {
    id: 14,
    img: "./images/papaya",
    name: "Papaya",
    price: 120,
    qty: 0

  },
  {
    id: 15,
    img: "./images/pineapple",
    name: "Pineapple",
    price: 150,
    qty: 0

  },
  {
    id: 16,
    img: "./images/pomogrenate",
    name: "Pomogrenate",
    price: 180,
    qty: 0

  },
  {
    id: 17,
    img: "./images/sapota",
    name: "Sapota",
    price: 120,
    qty: 0

  },
  {
    id: 18,
    img: "./images/strawberry",
    name: "Strawberry",
    price: 150,
    qty: 0

  },
  {
    id: 19,
    img: "./images/sugarcane",
    name: "Sugarcane",
    price: 100,
    qty: 0

  },
  {
    id: 20,
    img: "./images/watermelon",
    name: "Watermelon",
    price: 120,
    qty: 0

  }





];



let filteredFruits = [...fruits];
let input = document.getElementById("search");
let container = document.getElementsByClassName("dappa")[0];


function searchh() {
  if (container === undefined) {
    return;
  }
  container.innerHTML = "";
  let count = 0;
  let searchValue = input.value.toLowerCase();
  let result = filteredFruits.filter((item) => {

    return item.name.toLowerCase().startsWith(searchValue);
  });
  if (result.length === 0) {
    container.innerHTML = `
            <div class="not-found">
            <h1 style="font-size:25px">SEARCH NOT FOUND </h1>
                <video autoplay muted loop class="bg-video">
                     <source src="./images/gif1.mp4" type="video/mp4">
                 </video>

            </div>
        `;
    return;
  } result.forEach((fruits, key) => {

    container.innerHTML += `
    <div class="basic">
            
            <div class="col-one">
                <img src="${fruits.img}.png">
            </div>
            <div class="col-two">
                <p> crop organic</p>
                <h3>
                    ${fruits.name}
                </h3>
                <h3>
                    <span>$</span>${fruits.price}
                </h3>
                <div class="qty">
                <span  onclick="changeqtyss(${key},${fruits.qty - 1})"> - </span>
                <span>${fruits.qty}</span>
                <span onclick="changeqtyss(${key},${fruits.qty + 1})"> + </span>
                </div>
                
                <button onclick="sample('${key}')">Add to cart</button>
            </div>
        </div>`
  }


  )
}
searchh()

function changeqtyss(a, b) {
  if (b == 0) {
    fruits[a].qty = 0
  }
  else {
    fruits[a].qty = b;
  }
  console.log(fruits, "##")
  searchh()
}






// add to cart functionality
let cart = document.getElementById("cartbox");


function carts() {

  cart.style = "right:0%"
}

function wrong() {
  cart.style = "right:-100%"
}




// cart items varathuku

let product = [];

function sample(id) {
  // console.log(id);
  // console.log(fruits);
  // console.log(product);


  if (!product[id]) {
    product[id] = {
      ...fruits[id],
      qty: fruits[id].qty > 0 ? fruits[id].qty : 1
    }
      ;
  } else {
    product[id].qty = product[id].qty == fruits[id].qty ? product[id].qty++ : fruits[id].qty
  }



  cartproductreload();
  changeqtyss()
}

// function sample(b) {
//   if (b == 0) {
//     fruits[a].qty = 0
//   }
// }



// cart items display varathuku
let cartbox = document.getElementById("center");
let icon = document.getElementById("carticon");
let num = document.getElementById("itemnum");


function cartproductreload() {
  let count = 0;

  let totalcount = 0;

  cartbox.innerHTML = "";
  product.forEach((data, key) => {

    totalcount += fruits[key].price * fruits[key].qty

    count += data.qty //cart icon
    console.log(data, "2222222")

    cartbox.innerHTML +=
      ` <div class="item1">
            <img src="${data.img}.png" class="bike"/>
                    <p> ${data.name}</p>
                    <h4> ${data.price}</h4>
                    <div class="plus">
                        
                        <button onclick="changeqty(${key},${data.qty - 1})"> - </button>
                        <h6> ${data.qty}</h6>
                        <button onclick="changeqty(${key},${data.qty + 1})"> + </button>
                    </div>
                    <h3 class="money">${data.price * data.qty}</h3>
                </div> `

  })
  total.innerHTML = totalcount;



  if (count == 0) {
    icon.style = "opacity:0";
    num.innerText = count
  }
  else if (count > 0) {
    icon.style = "opacity:1";
    num.innerText = count
  }

}



function changeqty(a, b) {
  console.log("#");

  if (b == 0) {
    delete product[a]
  }
  else {
    product[a].qty = b;
  }
  console.log(product, "##")
  changeqtyss(a, b);
  console.log(fruits);

  cartproductreload()
}














// filter by price
function filterProducts() {

  let selected = document.getElementById("priceFilter").value;

  if (selected === "all") {
    filteredFruits = [...fruits];
  }
  else {

    let range = selected.split("-");
    let min = Number(range[0]);
    let max = Number(range[1]);

    filteredFruits = fruits.filter(item =>
      Number(item.price) >= min && Number(item.price) <= max
    );
  }

  searchh(); // refresh screen
}


















// let vegetables = [
//   {
//     id: 1,
//     img: "./images/carrot",
//     name: "Apple",
//     price: 120,
//     qty: 0

//   },
//   {
//     id: 2,
//     img: "./images/avacado",
//     name: "Avacado",
//     price: 100,
//     qty: 0

//   },
//   {
//     id: 3,
//     img: "./images/banana",
//     name: "Banana",
//     price: 80,
//     qty: 0

//   },
//   {
//     id: 4,
//     img: "./images/coconut",
//     name: "Coconut",
//     price: 150,
//     qty: 0

//   },
//   {
//     id: 5,
//     img: "./images/custardapple",
//     name: "Custardapple",
//     price: 180,
//     qty: 0

//   },
//   {
//     id: 6,
//     img: "./images/darkgrapes",
//     name: "Darkgrapes",
//     price: 200,
//     qty: 0

//   },
//   {
//     id: 7,
//     img: "./images/dragonfruit",
//     name: "Dragonfruit",
//     price: 250,
//     qty: 0

//   },
//   {
//     id: 8,
//     img: "./images/greengrapes",
//     name: "Greengrapes",
//     price: 150,
//     qty: 0

//   },
//   {
//     id: 9,
//     img: "./images/guava",
//     name: "Guava",
//     price: 120,
//     qty: 0

//   },
//   {
//     id: 10,
//     img: "./images/jackfruit",
//     name: "Jackfruit",
//     price: 100,
//     qty: 0

//   },
//   {
//     id: 11,
//     img: "./images/mango",
//     name: "Mango",
//     price: 150,
//     qty: 0

//   },
//   {
//     id: 12,
//     img: "./images/muskmelon",
//     name: "Muskmelon",
//     price: 120,
//     qty: 0

//   },
//   {
//     id: 13,
//     img: "./images/orange",
//     name: "Orange",
//     price: 100,
//     qty: 0

//   },
//   {
//     id: 14,
//     img: "./images/papaya",
//     name: "Papaya",
//     price: 120,
//     qty: 0

//   },
//   {
//     id: 15,
//     img: "./images/pineapple",
//     name: "Pineapple",
//     price: 150,
//     qty: 0

//   },
//   {
//     id: 16,
//     img: "./images/pomogrenate",
//     name: "Pomogrenate",
//     price: 180,
//     qty: 0

//   },
//   {
//     id: 17,
//     img: "./images/sapota",
//     name: "Sapota",
//     price: 120,
//     qty: 0

//   },
//   {
//     id: 18,
//     img: "./images/strawberry",
//     name: "Strawberry",
//     price: 150,
//     qty: 0

//   },
//   {
//     id: 19,
//     img: "./images/sugarcane",
//     name: "Sugarcane",
//     price: 100,
//     qty: 0

//   },
//   {
//     id: 20,
//     img: "./images/watermelon",
//     name: "Watermelon",
//     price: 120,
//     qty: 0

//   }





// ];




// let filteredvegetables = [...vegetables];
// let input2 = document.getElementById("search2");
// let container2 = document.getElementsByClassName("dappa2")[0];

// console.log(container2);

// // container2.innerHTML = "";
// // console.log(container2);

// function searchh2() {
//   if (!container2) return;
//   container2.innerHTML = "";
//   // console.log(container2.innerHTML);

//   let count = 0;
//   let searchValue = input2.value.toLowerCase();
//   let result = filteredvegetables.filter((item) => {

//     return item.name.toLowerCase().startsWith(searchValue);
//   });
//   if (result.length === 0) {
//     container2.innerHTML = `
//             <div class="not-found">
//             <h1 style="font-size:25px">SEARCH NOT FOUND </h1>
//                 <video autoplay muted loop class="bg-video">
//                      <source src="./images/gif1.mp4" type="video/mp4">
//                  </video>

//             </div>
//         `;
//     return;
//   } result.forEach((item) => {

//     container2.innerHTML += `
//     <div class="basic">
            
//             <div class="col-one"> 
//                 <img src="${item.img}.png">
//             </div>
//             <div class="col-two">
//                 <p> crop organic</p>
//                 <h3>
//                     ${item.name}
//                 </h3>
//                 <h3>
//                     <span>$</span>${item.price}
//                 </h3>
//                 <div class="qty">
//                 <span  onclick="changeqtyss(${item.id},${item.qty - 1})"> - </span>
//                 <span>${item.qty}</span>
//                 <span onclick="changeqtyss(${item.id},${item.qty + 1})"> + </span>
//                 </div>
                
//                 <button onclick="sample('${item.id}')">Add to cart</button>
//             </div>
//         </div>`
//   }


//   )
// }