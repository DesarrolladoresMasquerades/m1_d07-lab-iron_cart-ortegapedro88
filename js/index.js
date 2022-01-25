// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").textContent
  const quantity = product.querySelector(".quantity input").value
  const subtotal = price*quantity
  product.querySelector(".subtotal span").innerText = subtotal
  return subtotal
 }




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = Array.from(document.querySelectorAll('.product'));
  // singleProduct.forEach(elem=>{})
  singleProduct.forEach(elem=>{updateSubtotal(elem)})
  

const grandTotal = singleProduct.reduce((acc,elem)=>{
   return acc += updateSubtotal(elem)
},0)

document.querySelector("#total-value span").textContent = grandTotal
return grandTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  target.parentNode.parentNode.remove()
  calculateAll()
  
}

const newProductBackup = document.querySelector(".product").cloneNode(true)


// ITERATION 5

function createProduct(elem) {
  console.log(elem)
   
  const newProduct = newProductBackup.cloneNode(true)
  const newName = document.querySelector(".create-product td input[type=text]").value
  const newPrice = document.querySelector(".create-product td input[type=number]").value
newProduct.querySelector(".name span").innerText = newName
newProduct.querySelector(".price span").textContent = newPrice

newProduct.querySelector(".btn-remove").addEventListener('click', removeProduct)

document.querySelector("tbody").appendChild(newProduct)

document.querySelector(".create-product td input[type=text]").value = ""
document.querySelector(".create-product td input[type=number]").value = 0



}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
const removeProductBtn = document.querySelectorAll(".btn-remove");


removeProductBtn.forEach(elem=>{elem.addEventListener('click', removeProduct)})


const createProductBtn = document.getElementById('create');
createProductBtn.addEventListener('click', createProduct);
 

});

