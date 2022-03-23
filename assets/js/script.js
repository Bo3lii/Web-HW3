let carts = document.querySelectorAll('.myButton');

let product = [
        
    {
        name: 'Fifa',
        tag: 'Fifa 22',
        price: 12.99,
        inCart: 0
    }, 
    {
        name: 'Ghost of tsushima',
        tag: 'Ghost',
        price: 17.99,
        inCart: 0
    },
    {
        name: 'Call of duty',
        tag: 'COD',
        price: 15.99,
        inCart: 0
    },
    {
        name: 'Crash bandicoot',
        tag: 'Crash',
        price: 12.99,
        inCart: 0
    },
    {
        name: 'God of war',
        tag: 'GOF',
        price: 14.99,
        inCart: 0
    },
    {
        name: 'Minecraft',
        tag: 'Minecraft',
        price: 10.99,
        inCart: 0
    },
];



for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers()
    })
} 


function cartNumbers(){
let productNumbers = localStorage.getItem('cartNumbers');
productNumbers = parseInt(productNumbers);

if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.setItem('.cart span').textContent =  productNumbers + 1;
}else{
    localStorage.setItem('cartNumbers', 1);
    document.setItem('.cart span').textContent = 1;
}

}