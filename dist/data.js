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
        category:'cereals',
        image: 'images/Barley.png',
        name: 'Barley',
        price: 220,
        description:"Nutritious ancient grain packed with fiber and essential minerals, known for its versatility in soups, salads, and pilafs."
    },
    {
        id: 7,
        category:'cereals',
        image: 'images/Buckwheat.png',
        name: 'Buck-Wheat',
        price: 250,
        description:"Nutrient-rich pseudo-cereal with a distinct nutty flavor, gluten-free, and a great source of protein and dietary fiber."
    },
    {
        id: 8,
        category:'cereals',
        image: 'images/Farro.png',
        name: 'Farro',
        price: 240,
        description:"Hearty ancient wheat grain with a chewy texture, rich in vitamins and minerals, commonly used in salads, soups, and risottos."
    },
    {
        id: 9,
        category:'cereals',
        image: 'images/Millet-Cereal.png',
        name: 'Millet',
        price: 240,
        description:"Small grain with a mild, nutty flavor, gluten-free, and rich in antioxidants, fiber, and minerals, often used in porridges and baked goods."
    },
    {
        id: 10,
        category:'cereals',
        image: 'images/Spelt.png',
        name: 'Spelt',
        price: 300,
        description:"Nutty-flavored ancient grain, a distant relative of wheat, rich in protein, fiber, and B-vitamins, commonly used in bread and pasta recipes."
    },
    {
        id: 11,
        category:'protein',
        image: 'images/Granola.png',
        name: 'Granola',
        price: 280,
        description:"Indulge in our protein-rich organic granola, crafted with wholesome ingredients like nuts, seeds, and grains, for a satisfying and nourishing snack or breakfast option."
    },
    {
        id: 12,
        category:'protein',
        image: 'images/Quinoa.png',
        name: 'Quinoa',
        price: 250,
        description:"Savor the nutritional powerhouse of our organic quinoa, a protein-rich grain that offers a complete amino acid profile, making it a versatile and wholesome addition to your meals."
    },
    {
        id: 13,
        category:'protein',
        image: 'images/pork.png',
        name: 'Pork',
        price: 110,
        description:"Versatile meat option, known for its rich flavor and tenderness, providing a good source of protein, vitamins, and minerals."
    },
    {
        id: 14,
        category:'protein',
        image: 'images/Almonds.png',
        name: 'Almonds',
        price: 150,
        description:"Nutritional powerhouse packed with healthy fats, fiber, antioxidants, and vitamin E, promoting heart health and providing a satisfying crunch."
    },
    {
        id: 15,
        category:'protein',
        image: 'images/Boiled-egg.png',
        name: 'Egg',
        price: 170,
        description:"Nutrient-dense food, packed with high-quality protein, vitamins, and minerals, versatile in cooking and essential for various culinary preparations."
    },
    {
        id: 16,
        category:'protein',
        image: 'images/Beefe.png',
        name: 'Beef',
        price: 300,
        description:" Protein-rich meat option, offering essential nutrients like iron, zinc, and B-vitamins, contributing to muscle growth and overall health."
    },
    {
        id: 17,
        category:'protein',
        image: 'images/Chicken.png',
        name: 'Chicken',
        price: 340,
        description:"Lean poultry choice, low in fat and high in protein, supplying essential amino acids, vitamins, and minerals for muscle growth and repair."
    },
    {
        id: 18,
        category:'protein',
        image: 'images/Lentils.png',
        name: 'Lentils',
        price: 330,
        description:"Protein-packed legumes, rich in fiber, folate, and iron, providing a versatile and nutritious ingredient for soups, stews, and salads."
    },
    {
        id: 19,
        category:'protein',
        image: 'images/Salmon.png',
        name: 'Salmon',
        price: 300,
        description:"Fatty fish renowned for its omega-3 fatty acids, promoting heart health, and providing a rich source of high-quality protein."
    },
    {
        id: 20,
        category:'protein',
        image: 'images/Tofu.png',
        name: 'Tofu',
        price: 160,
        description:"Soy-based protein alternative, low in fat and cholesterol-free, offering a versatile option for vegetarian and vegan dishes."
    },
    {
        id: 21,
        category:'spices',
        image: 'images/nutmeg.png',
        name: 'Nutmeg',
        price: 180,
        description:"Fragrant spice with a warm, sweet flavor, adding depth to both sweet and savory dishes, known for its potential health benefit"
    },
    {
        id: 22,
        category:'spices',
        image: 'images/Cinnamon.png',
        name: 'Cinnamon',
        price: 140,
        description:"Aromatic spice with a sweet and warm taste, boasting antioxidant properties and potential health benefits, commonly used in baking and cooking."
    },
    {
        id: 23,
        category:'spices',
        image: 'images/Cumin.png',
        name: 'Cumin',
        price: 190,
        description:"Earthy spice with a distinct aroma, adding depth and warmth to various cuisines, known for its digestive and anti-inflammatory properties."
    },
    {
        id: 24,
        category:'spices',
        image: 'images/Oregano.png',
        name: 'Oregano',
        price: 200,
        description:"Fragrant herb with a robust flavor, commonly used in Mediterranean cuisine, providing antioxidants and potential antimicrobial properties."
    },
    {
        id: 25,
        category:'spices',
        image: 'images/Paprika.png',
        name: 'Paprica',
        price: 220,
        description:"Vibrant spice derived from dried red peppers, adding a smoky and slightly sweet flavor to dishes, rich in antioxidants and vitamin C."
    },
    {
        id: 26,
        category:'spices',
        image: 'images/Rosemary.png',
        name: 'RoseMary',
        price: 250,
        description:"Aromatic herb with a pine-like fragrance, adding a unique flavor to savory dishes, known for its potential cognitive and digestive benefits."
    },
    {
        id: 27,
        category:'spices',
        image: 'images/Thyme.png',
        name: 'Thyme',
        price: 100,
        description:"Fragrant herb with a subtle lemony flavor, enhancing the taste of various dishes, and believed to have antibacterial properties."
    },
    {
        id: 28,
        category:'spices',
        image: 'images/Turmeric.png',
        name: 'Tumeric',
        price: 180,
        description:"Golden spice with a warm, earthy flavor, containing curcumin, a compound with potential anti-inflammatory and antioxidant properties."
    },

];

let cerealsProduct = product.filter(function (items) { 
    return items.category === "cereals"; 
}).map(function (items) { 
    {return items}; 
})




let i = 0;


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


let proteinProduct = product.filter(function (items) { 
    return items.category === "protein"; 
}).map(function (items) { 
    {return items}; 
})


document.getElementById('motion2').innerHTML = proteinProduct.map((items) =>
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


let spicesProduct = product.filter(function (items) { 
    return items.category === "spices"; 
}).map(function (items) { 
    {return items}; 
})


document.getElementById('motion3').innerHTML = spicesProduct.map((items) =>
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





let mainDivContent = cerealsProduct.filter(function (single) {
    return single.id === 0
});

function createModal() {
    const modal = document.createElement("div");
    modal.id = "myModal";
    modal.classList.add("inset-0", "z-50", "hidden","flex","fixed", "px-5", "mt-10", "max-sm:px-0", "w-full", "gap-5", "max-lg:flex-col", "rounded-[3rem]", "justify-center", "items-center");
    modal.innerHTML = mainDivContent.map((items) => {
        var { image, name, description, price } = items;
        return `
            <div class="w-[400px] mt-3 h-[500px] max-sm:w-full bg-white justify-center items-center text-center flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent rounded-[3rem]"
                >
                <div class="object-contain mt-50">
                    <img id="mainImg" src=${image} alt="" class="rounded-full object-cover">
                </div>
                <div class="mt-10">
                    <button id="mainPrice" class="mt-5 text-white bg-red-400 p-2 font-bold w-[10rem] rounded-full text-[14px] transition ease-in-out duration-3000 delay-1000">$ ${price}</button>
                </div>
            </div>
            <div class="w-[400px] mt-3 h-[500px] max-sm:w-full bg-white justify-center items-center text-center rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent"
                >
                <div class="group flex flex-col justify-center items-center text-center">
                    <h2 id="mainName" class="font-bold text-black text-[20px] mt-3 group-hover:text-red-400">${name}</h2>
                    <span class="bg-red-500 w-[5rem] h-1 justify-center items-center text-center"></span>
                </div>
                <div class="flex mt-10 justify-center items-center text-center">
                    <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
                    <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
                    <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
                    <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
                    <p class="text-red-400"><i class="fa-solid fa-star"></i></p>
                </div>
                <div class="text-black p-10 max-sm:p-0 w-full h-full justify-center items-center text-center">
                    <p id="mainDescription" class="leading-12 text-[25px] max-xl:text-[20px] max-sm:text-[18px]"><i>
                        <br>${description}
                        <br>
                        "</i></p>
                    <div class="text-right mt-4">
                        <button id='modalCloseButton' class='w-full z-50 py-2 bg-red-400 text-white font-bold rounded-lg hover-bg-red-500'>Close</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.body.appendChild(modal);
}

createModal();

// Your logger, openModal, closeModal, and event listeners should remain as they are in your code.


// Add the modal HTML to your page
document.body.insertAdjacentHTML("beforeend", createModal());

function logger(image, name, price, description) {
    // Get the modal elements
    var mainImg = document.getElementById("mainImg");
    var mainName = document.getElementById("mainName");
    var mainPrice = document.getElementById("mainPrice");
    var mainDescription = document.getElementById("mainDescription");

    // Update the modal content
    mainImg.src = image;
    mainName.textContent = name;
    mainPrice.textContent = '$' + price;
    mainDescription.textContent = description;

    // Show the modal
    openModal();
}

// JavaScript functions to open and close the modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.classList.remove("hidden");
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.classList.add("hidden");
}

// Add an event listener to the "Close" button in the modal to close it
document.getElementById("modalCloseButton").addEventListener("click", closeModal);

// Add an event listener to the "Charge" button
document.getElementById("charge").addEventListener("click", function () {
    // Get the details from the main div
    var image = mainImg.src;
    var name = mainName.textContent;
    var price = mainPrice.textContent;
    var description = mainDescription.textContent;

    // Update the modal content
    logger(image, name, price, description);
});




// function logger(image,name,price,description) {
//     var mainImg = document.getElementById("mainImg");
//     var mainName = document.getElementById("mainName");
//     var mainPrice = document.getElementById("mainPrice");
//     var mainDescription = document.getElementById("mainDescription");

//     mainImg.src = image;
//     mainName.textContent = name;
//     mainPrice.textContent = '$'+ price;
//     mainDescription.textContent = description;  
// }

// const addToCartButton = document.getElementById('addToCartButton');
// addToCartButton.addEventListener('click', () => {
//     const quantity = parseInt(quantityInput.value);
//     alert(`Added ${quantity}  ${mainName.textContent} item(s) to cart!`);
// });
  

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

