fetchData()

async function fetchData(){
    const res = await fetch('https://fakestoreapi.com/users')
    const data = await res.json()
    console.log(data);
}
