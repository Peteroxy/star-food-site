



var cart = [];


function addtocart(item) {
  let data = localStorage.getItem("dataToSend");
  
  let count = parseInt(data, 10) || 0;
  count++;

  

  if (count === null) {
    count = cart.length;
    localStorage.setItem("dataToSend", count);
  }

  
  console.log(count);

  let total = count + cart.length;
  localStorage.setItem("dataToSend", total);
  console.log(total);
  

  
  var itemDetails = {};

 
  const product = [
    {
        id: 0,
        category:'cereals',
        image: 'images/Cornflakes.png',
        name: 'Cornflakes',
        price: 120,
      description: "Indulge in our organic cornflakes, crafted from sustainably sourced corn for a crisp and nutritious breakfast experience that satisfies.",
        
    },
    {
        id: 1,
        category:'cereals',
        image: 'images/Bran-Flakes.png',
        name: 'Bran-Flakes',
        price: 140,
      description: "Savor the goodness of our organic bran flakes, made from wholesome ingredients and rich in fiber, vitamins, and minerals for a nourishing start to your day.",
      
    },
    {
        id: 2,
        category:'cereals',
        image: 'images/oatmeal.png',
        name: 'Oatmeal',
        price: 130,
      description: "Our organic oatmeal cereal offers a wholesome and nourishing breakfast option, packed with fiber, vitamins, and minerals.",
    
    },
    {
        id: 3,
        category:'cereals',
        image: 'images/Puffed-Rice.png',
        name: 'Puffed-Rice',
        price: 150,
      description: "Enjoy the light and crispy delight of our organic puffed rice cereal, made from whole grains and packed with a satisfying crunch and natural goodness.",
      
    },
    {
        id: 4,
        category:'cereals',
        image: 'images/Salt-Muesli.png',
        name: 'Salt-Muesli',
        price: 200,
      description: "Discover the perfect balance of flavors in our organic salt muesli, combining wholesome grains, nuts, seeds, and a touch of salt for a savory and nutritious breakfast option.",
      
    },
    {
        id: 5,
        category:'cereals',
        image: 'images/Whole-Wheat.png',
        name: 'Whole-Wheat',
        price: 200,
      description: "Experience the wholesome goodness of our organic whole wheat cereal, made from nutrient-rich whole grains, providing a hearty and nutritious start to your day.",
      
    },
    {
        id: 6,
        category:'protein',
        image: 'images/Granola.png',
        name: 'Granola',
        price: 280,
      description: "Indulge in our protein-rich organic granola, crafted with wholesome ingredients like nuts, seeds, and grains, for a satisfying and nourishing snack or breakfast option.",
      
    },
    {
        id: 7,
        category:'protein',
        image: 'images/Quinoa.png',
        name: 'Quinoa',
        price: 250,
      description: "Savor the nutritional powerhouse of our organic quinoa, a protein-rich grain that offers a complete amino acid profile, making it a versatile and wholesome addition to your meals.",
      
    },

];


  var matchedItem = product.find(function(mappedItem) {
    
    return mappedItem.id === item.id;
  });


  if (matchedItem) {
    itemDetails.image = matchedItem.image;
    itemDetails.name = matchedItem.name;
    itemDetails.price = matchedItem.price;
   
  }
  
 
  cart.push(itemDetails);
  localStorage.setItem("itemDetails", JSON.stringify(cart));

  

  
}



