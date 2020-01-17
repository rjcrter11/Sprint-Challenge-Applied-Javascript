// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // Select Elements

  const header = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElement("span");

  // Give Elements Classes

  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  // Append Elements

  header.append(date, title, temp);

  return header;
}

const headerContainer = document.querySelector(".header-container");

headerContainer.append(Header());
