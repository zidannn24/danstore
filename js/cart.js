import { getId } from './profile.js';

const API_URL = 'https://fakestoreapi.com/';

// async function getCartItems() {
//     try {
//         const userId = getUserId();
//         if (!userId) {
//             throw new Error('User ID is not available.');
//         }

//         const res = await fetch(`${API_URL}carts/user/${userId}`);
//         const cartData = await res.json();

//         // Tampilkan data keranjang
//         console.log(cartData);
//         // Tambahkan logika untuk menampilkan item di halaman cart.html

//     } catch (error) {
//         console.error('Error fetching cart items:', error);
//     }
// }

// getCartItems();

async function getIdUser(){
    try{
        const userId = await getId()
        const res = await fetch(`${API_URL}carts/user/${userId}`)
        const data = await res.json()
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

getIdUser()

// const API_URL = 'https://fakestoreapi.com/'

// const cardWrapper = document.querySelector('.card-wrapper')
// const productsCategory = document.getElementById('products-category')
// const categoriesDropdown = document.getElementById('categories');

// const bars = document.querySelector('.bars')
// bars.addEventListener('click', function(){
//     const navbarNav = document.querySelector('.navbar-nav')
//     navbarNav.classList.toggle('active')
// })

// const questionAnswer = document.querySelectorAll('.question-answer')
// questionAnswer.forEach(qa=>{
//     qa.addEventListener('click', function(){
//         qa.classList.toggle('active')
//     })
// })

// fetchNewProduct('products?limit=5')
// async function fetchNewProduct(endpoint){
//     try{
//         const res = await fetch(`${API_URL}${endpoint}`)
//         if(!res.ok){
//             throw new Error('Error')
//         }

//         const datas = await res.json()
//         datas.forEach(data=>{
//             showNewProduct(data)
//         })
//     }catch(error){
//         console.error(error);
//     }
// }

// function showNewProduct(data){
//     cardWrapper.innerHTML += `
//     <div class="card">
//                     <div class="img-box">
//                         <img src="${data.image}" alt="${data.title}">
//                     </div>
//                     <div class="details">
//                     <h2>${data.title}</h2>
//                     <div>
//                             <p>$${data.price}</p>
//                             <button>See Details</button>
//                             </div>
//                     </div>
//                 </div>
//     `
// }

// categoriesDropdown.addEventListener('change', function() {
//     const selectedCategory = this.value;
//     if(selectedCategory === ''){
//         getCategories('', "products");
//     } else {
//         getCategories(selectedCategory, "products/category");
//     }
// });

// getCategories('', "products");
// async function getCategories(category, endpoint){
//     try{
//         const res = await fetch (`${API_URL}${endpoint}/${category}`)
//         const datas = await res.json()
//         productsCategory.innerHTML = ''
//         datas.forEach(category=>{
//             showProductCategory(category)
//         })
//     }catch(error){
//         console.error(error);
//     }
// }

// function showProductCategory(data){
//     productsCategory.innerHTML += `
//     <div class="card">
//                     <div class="img-box">
//                         <img src="${data.image}" alt="${data.title}">
//                     </div>
//                     <div class="details">
//                         <h2>${data.title}</h2>
//                         <div>
//                             <p>$${data.price}</p>
//                             <p>Rate: ${data.rating.rate}</p>
//                             <button>Add To Cart</button>
//                         </div>
//                     </div>
//                 </div>
//     `
// }

// getProfile('users/1');

// async function getProfile(endpoint) {
//     try {
//         const res = await fetch(`${API_URL}${endpoint}`);
//         const data = await res.json();
        
//         document.getElementById('name-display').innerText = 'halo';
//         document.getElementById('email').value = data.email;
//         document.getElementById('name').value = data.name.firstname + ' ' + data.name.lastname;
//         document.getElementById('username').value = data.username;
//         document.getElementById('password').value = ''; 
//         document.getElementById('city').value = data.address.city;
//         document.getElementById('street').value = data.address.street;
//         document.getElementById('number').value = data.address.number;
//         document.getElementById('phone').value = data.phone;
//     } catch (error) {
//         console.error('Error fetching profile:', error);
//     }
// }

