const product = [
    {
        id: 0,
        category:'cereals',
        image: 'images/Cornflakes.png',
        name: 'Cornflakes',
        price: 120,
        description:"Indulge in our organic cornflakes, crafted from sustainably sourced corn for a crisp and nutritious breakfast experience that satisfies."
    },
    {
        id: 1,
        category:'cereals',
        image: 'images/Bran-Flakes.png',
        name: 'Bran-Flakes',
        price: 140,
        description:"Savor the goodness of our organic bran flakes, made from wholesome ingredients and rich in fiber, vitamins, and minerals for a nourishing start to your day."
    },
    {
        id: 2,
        category:'cereals',
        image: 'images/oatmeal.png',
        name: 'Oatmeal',
        price: 130,
        description:"Our organic oatmeal cereal offers a wholesome and nourishing breakfast option, packed with fiber, vitamins, and minerals."
    },
    {
        id: 3,
        category:'cereals',
        image: 'images/Puffed-Rice.png',
        name: 'Puffed-Rice',
        price: 150,
        description:"Enjoy the light and crispy delight of our organic puffed rice cereal, made from whole grains and packed with a satisfying crunch and natural goodness."
    },
    {
        id: 4,
        category:'cereals',
        image: 'images/Salt-Muesli.png',
        name: 'Salt-Muesli',
        price: 200,
        description:"Discover the perfect balance of flavors in our organic salt muesli, combining wholesome grains, nuts, seeds, and a touch of salt for a savory and nutritious breakfast option."
    },
    {
        id: 5,
        category:'cereals',
        image: 'images/Whole-Wheat.png',
        name: 'Whole-Wheat',
        price: 200,
        description:"Experience the wholesome goodness of our organic whole wheat cereal, made from nutrient-rich whole grains, providing a hearty and nutritious start to your day."
    },
    {
        id: 6,
        category:'protein',
        image: 'images/Granola.png',
        name: 'Granola',
        price: 280,
        description:"Indulge in our protein-rich organic granola, crafted with wholesome ingredients like nuts, seeds, and grains, for a satisfying and nourishing snack or breakfast option."
    },
    {
        id: 7,
        category:'protein',
        image: 'images/Quinoa.png',
        name: 'Quinoa',
        price: 250,
        description:"Savor the nutritional powerhouse of our organic quinoa, a protein-rich grain that offers a complete amino acid profile, making it a versatile and wholesome addition to your meals."
    },

];

let cerealsProduct = product.filter(function (items) { 
    return items.category === "cereals"; 
}).map(function (items) { 
    {return items}; 
})

let mainDivContent = cerealsProduct.filter(function (single) {
    return single.id === 0
})

let i = 0;
document.getElementById('mainDiv').innerHTML = mainDivContent.map((items) => {
    var { image,name,description,price } = items;
    return (
        `<div  class="px-5  mt-10 max-sm:px-0 w-full flex gap-5 max-lg:flex-col rounded-[3rem] justify-center items-center ">
        <div  class="w-[400px] mt-3  h-[500px] max-sm:w-full justify-center items-center text-center flex flex-col  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent rounded-[3rem]"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
        <div class="object-contain mt-50">
            <img id="mainImg" src=${image} alt="" class="rounded-full object-cover">
        </div>
        <div class="mt-10 ">
        <button id="mainPrice" class=" mt-5 text-white bg-red-400 p-2 font-bold w-[10rem] rounded-full text-[14px] transition ease-in-out duration-3000 delay-1000">$ ${price}</button>
        </div>
    </div>

    <div  class="w-[400px] mt-3 h-[500px] max-sm:w-full  justify-center items-center text-center rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent "
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
            <div class="group flex flex-col justify-center items-center text-center">
                <h2 id="mainName" class="font-bold text-white text-[20px] mt-3 group-hover:text-red-400">${name}</h2>
                <span class="bg-red-500 w-[5rem] h-1 justify-center items-center text-center"></span>
            </div>
            <div class="flex mt-10 justify-center items-center text-center">
                <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
                <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
                <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
                <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
                <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
            </div>
            <div class=" text-white p-10 max-sm:p-0 w-full h-full  justify-center items-center text-center  ">
                <p id="mainDescription" class="leading-12 text-[25px] max-xl:text-[20px] max-sm:text-[18px]"><i>"
                    <br>${description}
                    <br>
                    "</i></p>
            </div>
            
        </div>
        <div class=" mt-5 p-5 max-sm:pb-10  flex flex-col justify-center text-center items-center  text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent rounded-full "
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
            <div class="group flex flex-col justify-center items-center text-center">
                <h2 class="font-bold text-[20px] mt-3 group-hover:text-red-400">QUANTITY CHECK</h2>
                <span class="bg-red-500 w-[5rem] h-1 justify-center items-center text-center"></span>
            </div>
            

            <div class="flex items-center max-sm:w-[40px] mt-6 justify-center">
                <div class="w-64">
                    
                    <div class="flex justify-center items-center mb-4 ">
                    <button id="decreaseQuantity" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-l">
                        -
                    </button>
                    <input id="quantityInput" type="number" min="1" max="10" value="1" class="w-full px-2 py-1 justify-center items-center  text-center text-black">
                    <button id="increaseQuantity" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-r">
                        +
                    </button>
                    </div>
                    
                </div>
                </div>
                <div>`+
            "<button id='addToCartButton' onclick='addtocart(" + JSON.stringify(items) + ")' class=' mt-5 text-white bg-red-400 p-2 font-bold w-[10rem] rounded-full text-[14px] transition ease-in-out duration-3000 delay-1000'>Add To Cart</button>" +
        `
        </div>
            
        </div>
    </div>`


    //     `<div  class="px-5  mt-10 max-sm:px-0 w-full flex gap-5 max-lg:flex-col rounded-[3rem] justify-center items-center ">
    //     <div  class="w-[400px] mt-3  h-[500px] max-sm:w-full justify-center items-center text-center flex flex-col  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent rounded-[3rem]"
    //     style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
    //     <div class="object-contain mt-50">
    //         <img id="mainImg" src=${image} alt="" class="rounded-full object-cover">
    //     </div>
    //     <div class="mt-10 ">
    //     <button id="mainPrice" class=" mt-5 text-white bg-red-400 p-2 font-bold w-[10rem] rounded-full text-[14px] transition ease-in-out duration-3000 delay-1000">$ ${price}</button>
    //     </div>
    // </div>

    // <div  class="w-[400px] mt-3 h-[500px] max-sm:w-full  justify-center items-center text-center rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent "
    //         style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
    //         <div class="group flex flex-col justify-center items-center text-center">
    //             <h2 id="mainName" class="font-bold text-white text-[20px] mt-3 group-hover:text-red-400">${name}</h2>
    //             <span class="bg-red-500 w-[5rem] h-1 justify-center items-center text-center"></span>
    //         </div>
    //         <div class="flex mt-10 justify-center items-center text-center">
    //             <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
    //             <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
    //             <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
    //             <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
    //             <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
    //         </div>
    //         <div class=" text-white p-10 max-sm:p-0 w-full h-full  justify-center items-center text-center  ">
    //             <p id="mainDescription" class="leading-12 text-[25px] max-xl:text-[20px] max-sm:text-[18px]"><i>"
    //                 <br>${description}
    //                 <br>
    //                 "</i></p>
    //         </div>
            
    //     </div>
    //     <div class=" mt-5 p-5 max-sm:pb-10  flex flex-col justify-center text-center items-center  text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent rounded-full "
    //         style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
    //         <div class="group flex flex-col justify-center items-center text-center">
    //             <h2 class="font-bold text-[20px] mt-3 group-hover:text-red-400">QUANTITY CHECK</h2>
    //             <span class="bg-red-500 w-[5rem] h-1 justify-center items-center text-center"></span>
    //         </div>
            

    //         <div class="flex items-center max-sm:w-[40px] mt-6 justify-center">
    //             <div class="w-64">
                    
    //                 <div class="flex justify-center items-center mb-4 ">
    //                 <button id="decreaseQuantity" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-l">
    //                     -
    //                 </button>
    //                 <input id="quantityInput" type="number" min="1" max="10" value="1" class="w-full px-2 py-1 justify-center items-center  text-center text-black">
    //                 <button id="increaseQuantity" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-r">
    //                     +
    //                 </button>
    //                 </div>
                    
    //             </div>
    //             </div>
    //             <div>
    //             <button id='addToCartButton' onclick='addtocart("+JSON.stringify(items)+")' class=' mt-5 text-white bg-red-400 p-2 font-bold w-[10rem] rounded-full text-[14px] transition ease-in-out duration-3000 delay-1000'>Add To Cart</button>
                
    //         </div>
            
    //     </div>
    // </div>`
        
        
    )
}).join('')



// document.getElementById('motion').innerHTML = product.map((items) =>
// {
//     var {image, id,name,price,description} = items;
//     return (
//         `
//         <div  id="mappedItems" class=" mappedDiv group swiper-slide w-[200px] h-[500px] max-sm:w-[50px] max-sm:flex-col justify-center flex flex-col rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent items-center group group-hover:text-white border-solid  border-white"
//           style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
//             <h4 class="font-bold text-center text-white mt-10">${name}</h4>
//             <span class="bg-red-500 w-[5rem] h-1 justify-center items-center text-center"></span>
//             <img id="small" src=${image} alt="oatmeal" class="small-img w-[15rem]  mt-24  ">
                   
//             <p id='charge' onClick='logger("${image}","${name}","${price}","${description}")' class=' mt-5 text-black bg-white p-2 font-bold w-[10rem] rounded-full text-[14px] invisible group-hover:visible transition ease-in-out duration-3000 delay-1000'>View Details</p>`+
       
//         "<p onclick='addtocart("+JSON.stringify(items)+")' class=' mt-5 text-white bg-red-400 p-2 font-bold w-[10rem] rounded-full text-[14px] '>Add to cart</p>"+
//        ` </div>`
//     )
    
// }).join('')





document.getElementById('motion').innerHTML = cerealsProduct.map((items) =>
{
    var {image, id,name,price,description} = items;
    return (
        `
        <div  id="mappedItems" class=" mappedDiv group swiper-slide w-[200px] h-[500px] max-sm:w-[50px] max-sm:flex-col justify-center flex flex-col rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent items-center group group-hover:text-white border-solid  border-white"
          style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
            <h4 class="font-bold text-center text-white mt-10">${name}</h4>
            <span class="bg-red-500 w-[5rem] h-1 justify-center items-center text-center"></span>
            <img id="small" src=${image} alt="oatmeal" class="small-img w-[15rem]  mt-24  ">
                   
            <p id='charge' onClick='logger("${image}","${name}","${price}","${description}")' class=' mt-5 text-black bg-white p-2 font-bold w-[10rem] rounded-full text-[14px] invisible group-hover:visible transition ease-in-out duration-3000 delay-1000'>View Details</p>`+
       
            "<p onclick='addtocart("+JSON.stringify(items)+")'  class=' mt-5 text-white bg-red-400 p-2 font-bold w-[10rem] rounded-full text-[14px] '>Add to cart</p>"+
       ` </div>`
    )
    
}).join('')



function logger(image,name,price,description) {
    var mainImg = document.getElementById("mainImg");
    var mainName = document.getElementById("mainName");
    var mainPrice = document.getElementById("mainPrice");
    var mainDescription = document.getElementById("mainDescription");

    mainImg.src = image;
    mainName.textContent = name;
    mainPrice.textContent = '$'+ price;
    mainDescription.textContent = description;  
}

const addToCartButton = document.getElementById('addToCartButton');
addToCartButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    alert(`Added ${quantity}  ${mainName.textContent} item(s) to cart!`);
});
  

// const categories = [...new Set(product.map((item)=>
//     {return item}))]

// let maps = product.map(function (items) {
//     return items;
// })

// var cart =[];

// function addtocart(a){
//     cart.push({...categories[a]});
//     displaycart();
// }
// function delElement(a){
//     cart.splice(a, 1);
//     displaycart();
// }
// function displaycart() {
    
//       let j = 0, total = 0,cost=0;
//     document.getElementById("count").innerHTML=cart.length;
//     if(cart.length==0){
//         document.getElementById('cartSale').innerHTML = "Your cart is empty";
//         document.getElementById("total").innerHTML = "$ "+0+".00";
//     }
//     else{
//         document.getElementById("cartItem").innerHTML = cart.map((items)=>
//         {
//             var {name,image,price} = items;
//             total=total+cost, cost = cost = document.getElementById("quantityInput").value*`${price}`;
//             document.getElementById("total").innerHTML = "$ "+total+".00";
//             return (
//                 `
//                 <div id="cartItem" class="m-10 table-auto flex flex-col w-full p-5 justify-center items-center overflow-x-auto ">
//                         <div class=" mt-10 justify-center flex items-center text-center "
//                             style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
//                             <table class="w-full border-2 border-solid border-white rounded-3xl">
//                                 <thead class="border-b">
//                                     <tr class="text-white font-bold ">
//                                         <td scope="col" class="border-r p-10">Remove</td>
//                                         <td scope="col" class="border-r p-10">Name</td>
//                                         <td scope="col" class="border-r p-10">Image</td>
//                                         <td scope="col" class="border-r p-10">Quantity</td>
//                                         <td scope="col" class="border-r p-10">Cost</td>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr class="border-b">
//                                         <td class="border-r "> `+
//                                             "<i onclick='delElement(" + (j++) + ")' class='fa-solid fa-trash text-white'></i>" +
//                                              `
//                                         </td>
//                                         <td class="border-r text-white">
//                                             <h6>${name}</h6>
//                                         </td>
//                                         <td class="border-r justify-center items-center text-center">
//                                             <img src=${image} alt="" class="border-solid border-2 border-white rounded-full w-[100px] h-[100px] justify-center">
//                                         </td>
//                                         <td class="border-r">
//                                             <div class="flex justify-center items-center mb-4 ">
//                                                 <button id="decreaseQuantity" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-l">
//                                                     -
//                                                 </button>
//                                                 <input id="quantityInput" type="number" min="1" max="10" value="1" class="w-full px-2 py-1 justify-center items-center  text-center text-black">
//                                                 <button id="increaseQuantity" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-r">
//                                                     +
//                                                 </button>
//                                                 </div>
//                                         </td>
//                                         <td class="text-white">
//                                             <h6>${cost}</h6>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>

//                         </div>
//                 `
                
//             );
//         }).join('');
//     }

    
// }  

