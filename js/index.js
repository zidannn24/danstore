const API_URL = 'https://fakestoreapi.com/'

const cardWrapper = document.querySelector('.card-wrapper')
const productsCategory = document.getElementById('products-category')
const categoriesDropdown = document.getElementById('categories');

const bars = document.querySelector('.bars')
bars.addEventListener('click', function(){
    const navbarNav = document.querySelector('.navbar-nav')
    navbarNav.classList.toggle('active')
})

const questionAnswer = document.querySelectorAll('.question-answer')
questionAnswer.forEach(qa=>{
    qa.addEventListener('click', function(){
        qa.classList.toggle('active')
    })
})

fetchNewProduct('products?limit=5')
async function fetchNewProduct(endpoint){
    try{
        const res = await fetch(`${API_URL}${endpoint}`)
        if(!res.ok){
            throw new Error('Error')
        }

        const datas = await res.json()
        datas.forEach(data=>{
            showNewProduct(data)
        })
    }catch(error){
        console.error(error);
    }
}

function showNewProduct(data){
    cardWrapper.innerHTML += `
    <div class="card">
                    <div class="img-box">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <div class="details">
                    <h2>${data.title}</h2>
                    <div>
                            <p>$${data.price}</p>
                            <button>See Details</button>
                            </div>
                    </div>
                </div>
    `
}