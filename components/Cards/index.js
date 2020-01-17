// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    Object.keys(response.data.articles.javascript).forEach((key) => {
      cardsContainer.append(
        lambdaCards(response.data.articles.javascript[key])
      );
    });
    return axios.get("https://lambda-times-backend.herokuapp.com/articles");
  })
  .then((response) => {
    console.log(response);
    Object.keys(response.data.articles.bootstrap).forEach((key) => {
      cardsContainer.append(lambdaCards(response.data.articles.bootstrap[key]));
    });
  })
  .catch((error) => {
    console.log("data not retrieved", error);
  });

function lambdaCards(data) {
  // Select Elements

  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("span");

  // Append Elements

  card.append(headline, author);
  author.append(imgContainer, name);
  imgContainer.append(img);

  // Add Classes

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // Add Properties

  headline.textContent = data.headline;
  img.src = data.authorPhoto;
  name.textContent = `By ${data.authorName}`;

  return card;
}
