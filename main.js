const images = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
let intervalId;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function play() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 1500);
}

function stop() {
  clearInterval(intervalId);
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  stop();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
  stop();
});

const slider = document.querySelector('.slider');
slider.addEventListener('mouseout', play);
slider.addEventListener('mouseover', stop);

showImage(currentIndex);


//============================================================================= 





//=============================================================================


// const addToCartButton = document.querySelector('.CartBtn');
// const cartButton = document.querySelector('.btn-cart');
// const quantitySpan = document.querySelector('.quantity');
// const smallDiv = document.querySelector('.small-div'); // Replace '.small-div' with the actual selector for your small div element

// let cartQuantity = 0;

// addToCartButton.addEventListener('click', () => {
//   cartQuantity++;
//   quantitySpan.textContent = cartQuantity;
// });
//=============================================================================
function showLaptopCards() {
  var cards = document.getElementsByClassName("item");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    if (card.id === "laptop") {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  }
}

//=============================================================================
function showIphoneCards() {
  var cards = document.getElementsByClassName("item");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    if (card.id === "Iphone") {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  }
}


//=============================================================================
function showHeadsetCards() {
  var cards = document.getElementsByClassName("item");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    if (card.id === "Headset") {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  }
}


//=============================================================================
function showWatchCards() {
  var cards = document.getElementsByClassName("item");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    if (card.id === "Watch") {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  }
}

//=============================================================================
function showAllCards() {
  var cards = document.getElementsByClassName("item");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.style.display = "flex";

  }
}



//=============================================================================

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

//=============================================================================
//=============================================================================
