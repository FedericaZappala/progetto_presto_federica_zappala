// NavBar
let myNavbar = document.querySelector('#myNavbar')

window.addEventListener('scroll' , () => {
    if (window.scrollY > 0) {
        myNavbar.style.backgroundColor = 'var(--bianco)'
        myNavbar.classList.add('shadow')
    } else {
        myNavbar.style.backgroundColor =  'var(--bianco)'
        myNavbar.classList.remove('shadow')
    }
})
//Fine NavBar

//Section Number
let Number1 = document.querySelector('.Number1')
let Number2 = document.querySelector('.Number2')
let Number3 = document.querySelector('.Number3')

function counterNumber(finalN,frequency,element) {
    let counter = 0;
let interval = setInterval(() => {
  if (counter < finalN) {
     counter++
     element.innerHTML = counter;
  } else {
    clearInterval(interval)
  }
},frequency)
}

let confirm = false;

let observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting && confirm == false ) {
        counterNumber(1000,20,Number1)
        counterNumber(5000,2,Number2)
        counterNumber(500,30,Number3)
        confirm = true
      }
   })
})

observer.observe(Number1)
//Fine Section Number


// Inzizio Section Ultimi 3 Annunci

// Card con metodo per visulizzare  solo le utime 3
let cardsWrapper = document.querySelector('#cardsWrapper');

let announcements = [
    {name: '', category: '', price: '', url: ''},
    {name: '', category: '', price: '', url: ''},
    {name:'Drone DJI Air 2s', category:'Fotografia', price:'800', url:src="./immagini/Drone DJi.png", alt: 'Immagine Drone DJi'},
    {name: 'IPhone 14 Pro', category: 'Telefonia', price: '1100', url: src="./immagini/Apple Iphone 14 Pro.png", alt: 'Immagine IPhone 14 Pro'},
    {name:'Giacca Barbour', category:'Abbigliamento', price: '300', url:src="./immagini/Giacca Barbour.png", alt: 'Immagine Giacca Barbour'},
]

announcements.forEach((announcement,i) => {
   if (i >= announcements.length - 3) {
    let div = document.createElement('div');
    div.classList.add('col-12','col-md-3');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${announcement.url}" class="card-img-top1" alt="...">
    <div class="card-body">
    <h5 class="card-title">${announcement.name}<i class="fa-regular fa-heart mx-4 fs-4"></i></h5>
    <p class="card-text">${announcement.category}</p>
    <p class="card-text fw-bold">€ ${announcement.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `
    cardsWrapper.appendChild(div)
   }
})

// Icon Heart
let iconHearts = document.querySelectorAll('.fa-heart');
let cardImgs = document.querySelectorAll('.card-img-top1');

//Eventi
//Al click sul cuore aggiunge o rimuove il like
iconHearts.forEach((iconHeart) => {
  iconHeart.addEventListener('click',() => {
    iconHeart.classList.toggle('fa-solid')
    iconHeart.classList.toggle('fa-regular,')
})
})


//Al clik sull'immagine aggiunge o rimuove il like
cardImgs.forEach((cardImg,i)  => {
  cardImg.addEventListener('dblclick',() => {
    iconHearts[i].classList.toggle('fa-solid')
    iconHearts[i].classList.toggle('fa-regular,')
})
})

//Al clik da mobile sull'immagine aggiungere o rimuovere il like
cardImgs.forEach((cardImg,i)  => {
  cardImg.addEventListener('touchstart',() => {
    iconHearts[i].classList.toggle('fa-solid')
    iconHearts[i].classList.toggle('fa-regular,')
})
})
// Fine Section Ultimi 3 Annunci

// section recensioni
let swiperWrapper = document.querySelector('.swiper-wrapper');
let reviews = [
  {name: 'Federica', rank: '5', review: 'molto soddisfatta di aver trovato un sito così affidabile'},
  {name: 'Valerio', rank: '4.5', review: 'sito top!!! questo sito presenta un ottima qualità-prezzo'},
  {name: 'Alfio', rank: '4', review: 'soddisfatto di aver fatto acquisti qui, assistenza pazzesca h24'},
  {name: 'Clelia', rank: '3.5', review: 'sito molto bello, ma mi aspettavo più accessori in vendita'},
  {name: 'Caterina', rank: '3', review: 'sito bellissimo, ma mi aspetto altri accessori che al momento non sono disponibili'},
]
reviews.forEach((review) => {
let div = document.createElement('div');
div.classList.add('swiper-slide');
div.innerHTML = `
<div class="card text-center mb-3" style="width: 18rem;">
              <div class="card-body">
              <p class="card-text lead">${review.review}</p>
                <p class="card-title fw-bold">${review.name}</p>
                <div class="stars-wrapper">
                ${generateStars(review.rank)}
                
                </div>
              </div>
            </div>
`
swiperWrapper.appendChild(div)

})


let starsWrapper = document.querySelectorAll('.stars-wrapper');


// 1 opzione

// starsWrapper.forEach((wrapper, i) => {
//   let voto = reviews[i].rank;
//   for (let i = 1; i <= voto; i++) {
//     let icon = document.createElement('i');
//   icon.classList.add('fa-solid', 'fa-star');
//   wrapper.appendChild(icon)
    
//   }

// let resto = 5 - voto;
// for (let i = 1; i <= resto; i++) {
//   let icon = document.createElement('i');
//   icon.classList.add('fa-regular', 'fa-star');
//   wrapper.appendChild(icon)
    
// }
// })

// fine 1 opzione

function generateStars(num){
  let result = "";
  for (let i = 1; i <= 5; i++) {
    if(num == 0.5){
      result += '<i class="fa-regular fa-star-half-stroke"></i>'
      num = 0
    } else if(num > 0){
      result += '<i class="fa-solid fa-star"></i>'
      num--
    } else{
      result += '<i class="fa-regular fa-star"></i>'
    }
    
  } return result
}

console.log(generateStars(4.5))






// Swiper Recensioni
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Fine Swiper Recensioni
