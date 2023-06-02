
const productsContainer=document.getElementById('products')

const getProducts=()=>{
    return fetch('https://dummyjson.com/products?limit=8')
    .then(response => response.json())
    .then(response=>response)
    .catch(error=>error)

}
getProducts();

const displayProducts=async()=>{
    const products=await getProducts()
    console.log(products);
    products.products.map(item=>{
        console.log(item);
        let div=document.createElement('div');
        let images=document.createElement('img');
        let title=document.createElement('h2');
        let brand=document.createElement('p');
        let price=document.createElement('p');
        let ratings=document.createElement('h4');

        images.src=item.thumbnail
        title.innerHTML=item.title;
        brand.innerHTML=item.brand
        price.innerHTML=item.price
        ratings.innerHTML=item.rating
        div.appendChild(images)
        div.appendChild(title)
        div.appendChild(brand)
        div.appendChild(price)
        div.appendChild(ratings)
        div.setAttribute('key',item.id);
        div.setAttribute('class','product');
        productsContainer.appendChild(div)
        

 

    })
}
displayProducts()



