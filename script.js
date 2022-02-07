fetch('http://localhost:8080/products')
  .then((response) => response.json())
  .then((json) => console.log(json));
///
console.log()


for (let product of products){
  document.getElementById('content').innerHTML += `
    <img src="${ product.img }">
    <p>${ item.text }</p>
  `
}