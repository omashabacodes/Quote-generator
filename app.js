
let quotes=[
    ' Your sacred space is where you can find yourself again and again.',
    'Look for opportunities in every change in your life.',
    'When you connect to the silence within you, that is when you can make sense of the disturbance going on around you.',
    'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
    'Though you may travel the world to find the beautiful, you must have it within you or you will find it not.',
    'Realize deeply that the present moment is all you have. Make the now the primary focus of your life.',
    'Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.',
    'The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.',
    ];

 //let btn=document.querySelector('.btn');
//btn.addEventListener('click', displayQuote);

function displayQuote(){
    let index=Math.floor(Math.random()*quotes.length);
    
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <img src="favicon.png">
    <p>${quotes[index]}</p>
    <img src="favicon.png">
    </div>
    `;
    div.innerHTML=quote;
    }

let btn =document.querySelector('.btn');
btn.addEventListener('click', displayQuote);
