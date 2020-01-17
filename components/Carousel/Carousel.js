/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel(element, options) {
  // Create Elements

  const container = document.createElement("div");
  const buttonLeft = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const buttonRight = document.createElement("div");

  // Append Elements

  container.append(buttonLeft);
  container.append(img1);
  container.append(img2);
  container.append(img3);
  container.append(img4);
  container.append(img5);

  // Add Classes

  container.classList.add("carousel");
  buttonLeft.classList.add("left-button");
  buttonRight.classList.add("right-button");

  // Add Attributes

  img1.src = "assets/carousel/computer.jpeg";
  img2.src = "assets/carousel/computer.jpeg";
  img3.src = "assets/carousel/trees.jpeg";
  img4.src = "assets/carousel/turntable.jpeg";

  document.addEventListener("DOMContentLoaded", function() {
    let element = document.query;
  });

  return container;
}

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.appendChild(Carousel());
