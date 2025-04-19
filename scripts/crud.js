// *html elements 


var NameProduct = document.getElementById('NameProduct');
var CategoryProduct = document.getElementById('CategoryProduct');
var PriceProduct = document.getElementById('PriceProduct');
var DescriptionProduct = document.getElementById('DescriptionProduct');
var ImageProduct = document.getElementById('ImageProduct');
var ProductContainer = document.getElementById('ProductContainer');
var searchInput = document.getElementById('searchInput');

// * variabls 


if(localStorage.getItem("ProductList") != null) {
var ProductList = JSON.parse(localStorage.getItem("ProductList"));
  for (var i = 0; i < ProductList.length; i++) {
    displayProducts(i);
  }
}


// * functions

function addProduct() { 

var imageFile = ImageProduct.files[0];

var reader = new FileReader();
reader.onload = function (event) {

var imageDataUrl = event.target.result;


var NewProduct = {
  name: NameProduct.value ,
  category :CategoryProduct.value ,
  price : PriceProduct.value ,
  description : DescriptionProduct.value ,
  image: imageDataUrl
}


ProductList.push(NewProduct);

localStorage.setItem("ProductList", JSON.stringify(ProductList));

displayProducts(ProductList.length -1);
ClearForm();


};

reader.readAsDataURL(imageFile);

}


function displayProducts(index) {

  var Product = ProductList[index];

  var CardHtml = `
  
    <div class="card m-2 p-2" style="width: 18rem;">
              <img src="${Product.image}" class="card-img-top" alt="${Product.name}">
              <div class="card-body">
                <h6 class="card-title"> <strong>Name:</strong> ${Product.name} </h5>
                <p class="card-text"><strong>Category:</strong> ${Product.category}</p>
                <p class="card-text"><strong>Price:</strong> $${Product.price}</p>
                <p class="card-text">${Product.description}</p>      
                <a href="#" class="btn btn-success" onclick='updateProduct(${index})'>update</a>
                <a href="#" class="btn btn-danger" onclick='deleteProduct(${index})'>delete</a>
              </div>
            </div>
  `;

  ProductContainer.innerHTML += CardHtml;

}


function ClearForm() {
  NameProduct.value = "";
  CategoryProduct.value = "";
  PriceProduct.value = "";
  DescriptionProduct.value = "";
  ImageProduct.value = "";
}

function updateProduct(index) {
  var updatedName = prompt("Enter updated product name:", ProductList[index].name);
  var updatedCategory = prompt("Enter updated product category:", ProductList[index].category);
  var updatedPrice = prompt("Enter updated product price:", ProductList[index].price);
  var updatedDescription = prompt("Enter updated product description:", ProductList[index].description);

  if (updatedName !== null) ProductList[index].name = updatedName;
  if (updatedCategory !== null) ProductList[index].category = updatedCategory;
  if (updatedPrice !== null) ProductList[index].price = updatedPrice;
  if (updatedDescription !== null) ProductList[index].description = updatedDescription;

  localStorage.setItem("ProductList", JSON.stringify(ProductList));

  ProductContainer.innerHTML = "";
  for (var i = 0; i < ProductList.length; i++) {
    displayProducts(i);
  }
}

function deleteProduct(index) {
console.log("deleteProduct", index);
ProductList.splice(index, 1);
localStorage.setItem("ProductList", JSON.stringify(ProductList));
ProductContainer.innerHTML = "";
for (var i = 0; i < ProductList.length; i++) {
  displayProducts(i); // Redisplay all products
}}



function searchProduct() {
  ProductContainer.innerHTML = "";

  for (var i = 0; i < ProductList.length; i++) {
    if (ProductList[i].name.toLowerCase().includes(searchInput.value.toLowerCase())
    
    ) {
      displayProducts(i); 

  }
  }
  }

