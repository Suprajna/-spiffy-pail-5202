let productsCont=document.getElementById("products");
let cartLs=JSON.parse(localStorage.getItem("cart-page"))||[];
function displayProducts(productData){
productsCont.innerHTML="";
productData.forEach(function(elem){
    let product=document.createElement("div");

    let img=document.createElement("img");
    img.src=elem.img;

    let name=document.createElement("h3");
    name.innerText=elem.name;

    let brand=document.createElement("h4");
    brand.innerText=elem.brand;

    let price=document.createElement("p");
    price.innerText=elem.price;

    let size=document.createElement("h4");
    size.innerText=elem.size;

    let catagory=document.createElement("p");
    catagory.innerText=elem.catagory;

    let buy=document.createElement("button");
    buy.innerText="Order Now"
    buy.addEventListener("click",function(){
        window.location.href="payment-page.html";
    })
   

    let DeleteCart=document.createElement("button");
    DeleteCart.innerText="Remove";
    DeleteCart.addEventListener("click",function(){
      Delete(elem.productID);
    })

    product.append(img,name,brand,price,catagory,buy,DeleteCart);
    productsCont.append(product)
})
}
   displayProducts(cartLs);

   function Delete(id){
   let deleted=cartLs.filter(function(elem){
      return elem.productID != id;
   })
   cartLs=deleted;
   localStorage.setItem("cart-page",JSON.stringify(cartLs));
   displayProducts(cartLs);
   }