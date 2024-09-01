const API_URL = 'https://fakestoreapi.com/'

const cardWrapper = document.querySelector('.card-wrapper')
const productsCategory = document.getElementById('products-category')
const categoriesDropdown = document.getElementById('categories');

const bars = document.querySelector('.bars')
bars.addEventListener('click', function(){
    const navbarNav = document.querySelector('.navbar-nav')
    navbarNav.classList.toggle('active')
})

categoriesDropdown.addEventListener('change', function() {
    const selectedCategory = this.value;
    if(selectedCategory === ''){
        getCategories('', "products");
    } else {
        getCategories(selectedCategory, "products/category");
    }
});

getCategories('', "products");
async function getCategories(category, endpoint){
    try{
        const res = await fetch (`${API_URL}${endpoint}/${category}`)
        const datas = await res.json()
        productsCategory.innerHTML = ''
        datas.forEach(category=>{
            showProductCategory(category)
        })
    }catch(error){
        console.error(error);
    }
}

function showProductCategory(data){
    productsCategory.innerHTML += `
    <div class="card">
                    <div class="img-box">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <div class="details">
                        <h2>${data.title}</h2>
                        <div>
                            <p>$${data.price}</p>
                            <p>Rate: ${data.rating.rate}</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
    `
}