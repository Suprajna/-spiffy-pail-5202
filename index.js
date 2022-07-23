let productData=[
    {
    
    name: "Grapefruit",
    catagory: "Exotic Fruits",
    price: "₹55",
    quantity:"1 pc",
    productID: "fruit1",
   
    img: "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/432/original/data?width=256&height=256",
  },
  {
   
   
    name: "Indian Avocado",
    catagory: "Exotic Fruits",
    price: "₹85",
    quantity:"1 pc",
    productID: "fruit2",
 
    img: "https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256",
  },
  {
   
    name: "Blueberry",
    price: "₹250",
    quantity:"1 pkt",
    productID: "fruit3",
    catagory: "Exotic Fruits",
    img: "https://imagemaster.fraazo.com/fraazo-master/products/FBLU1.png?width=256&height=256",
  },
  {
   
    name: "Dragon Fruit",
    price: "₹55",
    quantity:"1 pc",
    productID: "fruit4",
    catagory: "Exotic Fruits",
    img: "https://imagemaster.fraazo.com/fraazo-master/products/FDRA1.png?width=256&height=256",
  },
  {
   
    name: " Green Kiwi",
    price: "₹66",
    quantity:"1 pkt",
    productID: "fruit5",
    catagory: "Exotic Fruits",
    img: "https://imagemaster.fraazo.com/fraazo-master/products/FKIW2.png?width=256&height=256",
  }
]
let productsCont=document.getElementById("products");
let filter=document.getElementById("filter");

let cartLS=JSON.parse(localStorage.getItem("cart"))||[];
function displayProducts(productData){
   productsCont.innerHTML="";
    productData.forEach(function(elem){
        let product=document.createElement("div");

        let img=document.createElement("img");
        img.src=elem.img;

        let name=document.createElement("h3");
        name.innerText=elem.name;

       let price=document.createElement("p");
        price.innerText=elem.price;

        let size=document.createElement("h4");
        size.innerText=elem.size;

        let catagory=document.createElement("p");
        catagory.innerText=elem.catagory;

        let addToCart=document.createElement("button");
        addToCart.innerText="Add To Cart";
        addToCart.addEventListener("click",function(){
           if(addToCartFunc(elem.productID)===true){
               alert("Product Added Successfully");
               cartLS.push(elem);
               localStorage.setItem("cart",JSON.stringify(cartLS));
           }else{
               alert("Product Already Exist");
           }
        })

        product.append(img,name,price,catagory,addToCart);
        productsCont.append(product)
    })
}
displayProducts(productData);
filter.addEventListener("change",function(){
    if(filter.value==="All"){
        displayProducts(productData);  
    }else{
        let filtered=productData.filter(function(elem){
            return elem.catagory===filter.value;
        })
        displayProducts(filtered);
    }
})
displayProducts(productData);
filter.addEventListener("change",function(){
    if(filter.value==="All"){
        displayProducts(productData);  
    }else{
        let filtered1=productData.filter1(function(elem){
            return elem.catagory===filter.value;
        })
        displayProducts(filtered1);
    }
})


function addToCartFunc(id){
for(let i=0;i<cartLS.length;i++){
        if(cartLS[i].productId==id){
            return false;
        }
}
return true;
}


