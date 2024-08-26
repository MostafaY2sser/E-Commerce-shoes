

let Wrapper = document.querySelector(".sliderWrapper") 
let  menuItem = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./images/air.png",
            },
            {
                code: "darkblue",
                img: "./images/air2.png",
            },
        ],
    descrption : "adipisicing elit. Unde, incidunt. Officiis reprehenderit voluptatem sed labore qui quas placeat, maxime iure numquam repellendus molestiae quisquam ratione aquas placeat, maxime iure numquam repellendus molestiae quisquam ratione alias optio nam velit dolore!",
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
        {
            code: "lightgray",
            img: "./images/jordan.png",
        },
        {
            code: "green",
            img: "./images/jordan2.png",
        },
        ],
    descrption : "Officiis reprehenderit voluptatem sed labore qui quas placeat, maxime iure numquam repellendus molestiae quisquam ratione alias optio nam velit dolore!" ,
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
        {
            code: "lightgray",
            img: "./images/blazer.png",
        },
        {
            code: "green",
            img: "./images/blazer2.png",
        },
        ],
    descrption : "Dolor sit amet consectetur adipisicing elit. Unde, incidunt. Officiis reprehenderit voluptatem sed labore qui quas placeat, maxime iure numquam repellendus molestiae quisquam ratione" ,
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
        {
            code: "black",
            img: "./images/crater.png",
        },
        {
            code: "lightgray",
            img: "./images/crater2.png",
        },
        ],
    descrption : "Incidunt. Officiis reprehenderit voluptatem sed labore qui quas placeat, maxime iure numquam repellendus molestiae quisquam ratione alias optio nam velit dolore!Officiis reprehenderit" ,
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
        {
            code: "gray",
            img: "./images/hippie.png",
        },
        {
            code: "black",
            img: "./images/hippie2.png",
        },
        ],
    descrption : "Reprehenderit voluptatem sed labore qui quas placeat, maxime iure numquam repellendus molestia iure numquam repellendus molestiae quisquam ratione alias optio nam velit dolore!"
    },
];

let choosenProduct  =  products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".producrPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach( ( item , index ) => {

    item.addEventListener( "click" , function() {

        //  Change the Current Slide
        Wrapper.style.transform = `translateX(${-100 * index}vw)`

        // cahnge  the  choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductDesc.textContent  = choosenProduct.descrption;
        currentProductImg.src = choosenProduct.colors[0].img;

        //  changer current Two Color 
        currentProductColors.forEach( ( color , index ) => {
            color.style.background = choosenProduct.colors[index].code ;
        })

    } )
} )


currentProductColors.forEach( ( color , index) => {
    color.addEventListener( "click" , () => {
        currentProductImg.src = choosenProduct.colors[index].img ;
    })
})


currentProductSizes.forEach( ( size , index ) => {
    size.addEventListener( "click" , () => {
        currentProductSizes.forEach( ( size , index ) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
            size.style.backgroundColor = "black";
            size.style.color = "white";
    })
})


let  productButton = document.querySelector(".productButton")
let  close = document.querySelector(".close")
let  paymentSection = document.querySelector(".payment")

productButton.addEventListener( "click" , () => {
    paymentSection.style.display = "flex"
} )
close.addEventListener( "click" , () => {
    paymentSection.style.display = "none"
} )


















































