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

function page(){

    if(document.body.id === 'index-page'){
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
    } else if(document.body.id === 'products-page'){
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
    } else if(document.body.id === 'profile-page'){
        getProfile();
        async function getProfile() {
            try {
                const res = await fetch(`${API_URL}users/1`);
                const data = await res.json();
                
                // Memperbarui nilai input dan elemen lain dengan data yang diterima
                document.getElementById('name-display').innerText = data.name.firstname + " " + data.name.lastname;
                document.getElementById('email').value = data.email;
                document.getElementById('name').value = data.name.firstname + ' ' + data.name.lastname;
                document.getElementById('username').value = data.username;
                document.getElementById('password').value = data.password; // Kosongkan password untuk keamanan
                document.getElementById('city').value = data.address.city;
                document.getElementById('street').value = data.address.street;
                document.getElementById('number').value = data.address.number;
                document.getElementById('phone').value = data.phone;

         
                localStorage.setItem('userId', data.id);
                // console.log(data.id);

            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        }
    } else if(document.body.id === 'cart-page'){
        const userId = localStorage.getItem('userId');
        getCart(userId)
        async function getCart(id){
            try{
                const res = await fetch(`${API_URL}carts/user/${id}`)
                const datas = await res.json()
                const product = datas[0]
                console.log(product);
                
                product.products.forEach(id=>{
                    // console.log(id);
                    getProduct(id.productId, id.quantity)
                })
            }catch(error){
                console.error(error);
            }
        }
        async function getProduct(id, qty){
            try{
                const res = await fetch(`${API_URL}products/${id}`)
                const data = await res.json()
                console.log(data);

                // qty.forEach(quantity=>{
                //     console.log(quantity);
                // })

                console.log(qty);

                const mainCart = document.getElementById('main-cart')
                const row = document.querySelector('.row-cart')

                const cardCart = document.createElement('div')
                cardCart.classList.add('card-cart')

                cardCart.innerHTML += `
                
                    <i class="fa-solid fa-trash"></i>
                    <div class="product-box">
                        <div class="img-product-box">
                            <img src="${data.image}" alt="">
                        </div>
                        <div class="details-product-box">
                            <div class="coba">
                                <p class="product-name-card">${data.title}</p>
                            </div>
                            <div class="price-product-box">
                                <div class="qty">
                                    <i class="fa-solid fa-square-minus"></i>
                                    <p class="product-qty-cart">${qty}</p>
                                    <i class="fa-solid fa-square-plus"></i>
                                </div>
                                <p id="product-price-cart">$${data.price}</p>
                            </div>
                        </div>
                    </div>
                
                `
                row.append(cardCart)
                mainCart.appendChild(row)

            }catch(error){

            }
        }
    }
}

page()