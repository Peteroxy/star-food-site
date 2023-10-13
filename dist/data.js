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

let mainDivContent = cerealsProduct.filter(function (items) {
    return items.id === 0
})

let i = 0;
document.getElementById('mainDiv').innerHTML = mainDivContent.map((item) => {
    var { image,name,description } = item;
    return (
        `<div  class="px-5 mt-10 max-sm:px-0 w-full flex gap-5 max-lg:flex-col rounded-[3rem] justify-between ">
        <div  class="w-[400px] mt-3  h-[500px] max-sm:w-full justify-center items-center text-center flex flex-col  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent rounded-[3rem]"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
        <div class="object-contain">
            <img src=${image} alt="" class="mt-[-10rem] object-cover">
        </div>
      
    </div>

    <div  class="w-[400px] mt-3 h-[500px] max-sm:w-full  justify-center items-center text-center rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent "
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
            <div class="group flex flex-col justify-center items-center text-center">
                <h2 class="font-bold text-white text-[20px] mt-3 group-hover:text-red-400">${name}</h2>
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
                <p class="leading-12 text-[25px] max-sm:text-[18px]"><i>"
                    <br>${description}
                    <br>
                    "</i></p>
            </div>
            
        </div>
        <div class=" mt-5 p-5 max-sm:pb-10  flex flex-col justify-center items-center  text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent rounded-full "
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
            <div class="group flex flex-col justify-center items-center text-center">
                <h2 class="font-bold text-[20px] mt-3 group-hover:text-red-400">QUANTITY CHECK</h2>
                <span class="bg-red-500 w-[5rem] h-1 justify-center items-center text-center"></span>
            </div>
            

            <div class="flex items-center mt-6 justify-center">
                <div class="w-64">
                    
                    <div class="flex items-center mb-4">
                    <button id="decreaseQuantity" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-l">
                        -
                    </button>
                    <input id="quantityInput" type="number" min="1" max="10" value="1" class="w-full px-2 py-1 text-center text-black">
                    <button id="increaseQuantity" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-r">
                        +
                    </button>
                    </div>
                    
                </div>
                </div>
                <div>
                <button class="mt-5 text-white bg-red-400 p-2 font-bold w-[10rem] rounded-full text-[14px] transition ease-in-out duration-3000 delay-1000">Add To Cart</button>
                
            </div>
            
        </div>
    </div>`
        
        
    )
}).join('')


// document.getElementById('root').innerHTML = cerealsProduct.map((items) =>
// {
//     var {image, name, price} = items;
//     return(
//         `<div class='box'>
//             <div class='img-box'>
//                 <img class='images' src=${image}></img>
//             </div>
//         <div class='bottom'>
//         <p>${name}</p>
//         <h2>$ ${price}.00</h2>`+
//         "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
//         `</div>
//         </div>`
//     )
// }).join('')


