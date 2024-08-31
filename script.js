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

const cardWrapper = document.querySelector('.card-wrapper')

const API_URL = 'https://fakestoreapi.com/'

fetchData('products?limit=5')

async function fetchData(endpoint){
    try{
        const res = await fetch(`${API_URL}${endpoint}`)
        if(!res.ok){
            throw new Error('Error')
        }

        const datas = await res.json()
        datas.forEach(data=>{
            showData(data)
        })
    }catch(error){
        console.error(error);
    }
}

function showData(data){
    cardWrapper.innerHTML += `
    <div class="card">
                    <div class="img-box">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <div class="details">
                        <div>
                            <h2>${data.title}</h2>
                            <p>$${data.price}</p>
                        </div>
                        <button>See Details</button>
                    </div>
                </div>
    `
}