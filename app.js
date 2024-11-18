

const div = document.querySelector(".container");


fetch("https://dummyjson.com/products")
.then((res) => res.json())
  .then((res) => {
    res.products.map((item)=>{
     div.innerHTML +=  `<div class="card">
        <img src=${item.thumbnail} alt="thumbnail">
        <h1>${item.title}</h1>
        <p>${item.description.slice(0 , 20)}...</p>
        <p>price: ${item.price}</p>
        <button onclick="showMore(${item.id})">See more</button>
  </div>`
    });
  })
  .catch((err) => {
    console.log(err);
  });

  const showMore = (id) => {
    console.log(id);
    localStorage.setItem("id", id);
    window.location = "singleProduct.html";
  };