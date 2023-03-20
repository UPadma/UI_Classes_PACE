var productdata={
    name:"Laptop",
    price:20000,
    manfuc:"DELL",
    seller:"Padma Company",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/718ETwvLVOL._SL1500_.jpg"
};
var renderdetals=()=>{
    var mainli=document.createElement("li");
    var ultag=document.createElement("ul");
    ultag.setAttribute("class","productdetails");

    var li1=document.createElement("li");
    li1.innerHTML="Product Name :"+productdata.name;
    ultag.append(li1);

    var li2=document.createElement("li");
    li2.innerHTML="Product Price :"+productdata.price;
    ultag.append(li2);

    var li3=document.createElement("li");
    li3.innerHTML="Product Manufacture :"+productdata.manfuc;
    ultag.append(li3);

    var li4=document.createElement("li");
    li4.innerHTML="Product Seller :"+productdata.seller;
    ultag.append(li4);

    var li5=document.createElement("li");
    var imgt=document.createElement("img")
    imgt.setAttribute("src",productdata.image);
    li5.append(imgt)
    ultag.append(li5)

    mainli.append(ultag);

    document.querySelector(".container").append(mainli);
}
renderdetals();