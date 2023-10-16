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



const modalHTML = `
<div id="myModal" class="fixed inset-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 hidden">
    <div class="bg-white p-5 max-w-md rounded-lg">
        <img id="mainImg" class="w-full rounded-t-lg" src=${image} alt="Product Image">
        <div class="p-5">
            <h2 id="mainName" class="text-xl font-bold mb-2 text-gray-900">${name}</h2>
            <p id="mainPrice" class="text-lg font-bold text-red-400 mb-2">${price}</p>
            <p id="mainDescription" class="text-gray-700 text-sm">${description}</p>
        </div>
        <button id="modalCloseButton" class="w-full py-2 bg-red-400 text-white font-bold rounded-lg hover:bg-red-500">Close</button>
    </div>
</div>
`;

// Add the modal HTML to your page
document.body.insertAdjacentHTML("beforeend", modalHTML);

// JavaScript functions to open and close the modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.classList.remove("hidden");
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.classList.add("hidden");
}


function logger(image, name, price, description) {
    var mainImg = document.getElementById("mainImg");
    var mainName = document.getElementById("mainName");
    var mainPrice = document.getElementById("mainPrice");
    var mainDescription = document.getElementById("mainDescription");

    mainImg.src = image;
    mainName.textContent = name;
    mainPrice.textContent = '$' + price;
    mainDescription.textContent = description;

    // Show the modal when the "View Details" button is clicked
    openModal();
}

// Function to open the modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
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

    // Update the main div
    logger(image, name, price, description);
});


