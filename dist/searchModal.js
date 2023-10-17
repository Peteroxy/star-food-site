const products = [
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

  
  // Template string for the search modal
const searchModalTemplate = `
<div id="searchModal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
<div class="absolute justify-center items-center inset-0 bg-black opacity-50"></div>
<div class="bg-white p-4 rounded-lg  shadow-lg z-10 w-full max-w-md">
  <div class="flex items-center justify-between mb-4">
    <input id="searchInput" required type="text" placeholder="Search products..." 
    class="w-full p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:border-red-400">
  `
  +
  " <button id='searchButton' class='bg-red-400 text-white px-4 py-2 rounded-r-lg hover:bg-red-400' onclick = 'searchItems()' >Search</button>"
  +
  `</div>
  <!-- Results will be displayed here -->
  <ul id="searchResults" class="text-sm">
  </ul>
  <div class="text-right mt-4">
    <button id="closeSearchModal" class="text-gray-500 hover:text-gray-700">Close</button>
  </div>
</div>
</div>`
  ;
  
  // Function to display search results
  function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
  
    if (results.length === 0) {
      searchResults.innerHTML = '<p>No results found.</p>';
    } else {
      results.forEach(product => {
        const listItem = document.createElement('li');
        listItem.innerHTML =
        `
        <div  id="mappedItems" class=" mappedDiv group w-full h-[500px] max-sm:flex-col justify-center   flex flex-col rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent items-center group group-hover:text-white border-solid  border-white"
          style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
            <h4 class="font-bold text-center text-white mt-10">${product.name}</h4>
            <span class="bg-red-500 w-[5rem] h-2 justify-center items-center text-center"></span>
            <img id="small" src=${product.image} alt="oatmeal" class="small-img w-[15rem] ">
                   
            <p id='charge'  class=' mt-5 text-white p-2 font-bold w-full  text-[14px]'>${product.description}</p>
       
           
        </div>`
        // `
        //   <p><strong>${product.name}</strong></p>
        //   <p>${product.description}</p>
        // `;
        searchResults.appendChild(listItem);
      });
    }
  }
  
  
  // Function to open the search modal
  document.getElementById('openSearchModal').addEventListener('click', () => {
    document.body.insertAdjacentHTML('beforeend', searchModalTemplate);
    document.getElementById('searchModal').classList.remove('hidden');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
  });



  // Function to perform the search
function searchItems(){
      
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();
  if (searchQuery.trim() === '') {
    // Input is empty, do not perform a search
    return;
}
    const searchResults = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    displaySearchResults(searchResults);
  };
  // Function to close the search modal
  document.addEventListener('click', (e) => {
    if (e.target.id === 'closeSearchModal') {
      const searchModal = document.getElementById('searchModal');
      if (searchModal) {
        searchModal.remove();
      }
    }
  });
  