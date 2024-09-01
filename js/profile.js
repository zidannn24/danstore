const API_URL = 'https://fakestoreapi.com/'

const cardWrapper = document.querySelector('.card-wrapper')
const productsCategory = document.getElementById('products-category')
const categoriesDropdown = document.getElementById('categories');

const bars = document.querySelector('.bars')
bars.addEventListener('click', function(){
    const navbarNav = document.querySelector('.navbar-nav')
    navbarNav.classList.toggle('active')
})

getProfile();
export async function getProfile() {
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

        const userId = data.id
        return userId

    } catch (error) {
        console.error('Error fetching profile:', error);
    }
}

