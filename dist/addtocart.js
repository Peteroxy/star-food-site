



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


  var matchedItem = product.find(function(mappedItem) {
    
    return mappedItem.id === item.id;
  });


  if (matchedItem) {
    itemDetails.image = matchedItem.image;
    itemDetails.name = matchedItem.name;
    itemDetails.price = matchedItem.price;
    alert("added to Cart! check the cart page")
   
  }
  
 
  cart.push(itemDetails);
  localStorage.setItem("itemDetails", JSON.stringify(cart));

  

  
}



