let productsCont=document.getElementById("products");
let cartLS=JSON.parse(localStorage.getItem("cart"))||[];
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
        window.location.href="payment.html";
    })
   

    let DeleteCart=document.createElement("button");
    DeleteCart.innerText="Remove";
    DeleteCart.addEventListener("click",function(){
      Delete(elem.productID);
    })

    product.append(img,name,price,catagory,buy,DeleteCart);
    productsCont.append(product)
})
}
   displayProducts(cartLS);

   function Delete(id){
   let deleted=cartLS.filter(function(elem){
      return elem.productID != id;
   })
   cartLS=deleted;
   localStorage.setItem("cart",JSON.stringify(cartLS));
   displayProducts(cartLS);
   }