const articleData = [
  {
    title: "Lambda School Students: Were the best!",
    date: "Nov 5th, 2017",
    content:
      "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twilek. Ben amidala secura skywalker lando moff wickettatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievousdarth gonk darth hutt.Darth baba skywalker watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yodawedge utapau darth calamari.Hutt calamari darth jabba.Darth dookuamidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn jar twi'lek jinn leia jango skywalker mon."
  }
];

// < div class="article" >
//     <h2>Title</h2>
//     <p class="date">Date</p>
//     <p> Article</p>
//     <span class="expandButton"></span>
//  </div >

const articles = document.querySelector(".articles");

// accordion.appendChild(createPanel('hi rosie', 'best cat award'))

articleData.forEach(data => {
  console.log("creating panel:", data.title, data.content);
  articles.appendChild(createArticle(data.title, data.content, data.date));
});

function createArticle(title, content, date) {
  // define new elements
  const article = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const articleContent = document.createElement("p");
  const buttonExpand = document.createElement("span");

  // Setup structure of elements
  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(articleContent);
  article.appendChild(buttonExpand);

  // set class names
  article.classList.add("article");
  articleDate.classList.add("date");
  buttonExpand.classList.add("expandButton");

  // set text content
  buttonExpand.textContent = "Expand";
  articleContent.textContent = content;
  articleDate.textContent = date;
  articleTitle.textContent = title;

  // button events

  buttonExpand.addEventListener("click", event => {
    console.log("button clicked", event.target);
    // // 1. toggle hide-btn on BOTH buttons
    // articleContent.classList.toggle("article-open");
    // articleContent.classList.toggle("close");
    // 2. Change visibility of the content w/ 'toggle-on'
    article.classList.add("article-open");
  });

  return article;
}

// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Article {
//   constructor(domElement) {
//     // assign this.domElement to the passed in domElement
//     this.domElement = domElement;

//     // create a reference to the ".expandButton" class.
//     this.expandButton = domElement.querySelector(".expandButton");

//     // Using your expandButton reference, update the text on your expandButton to say "expand"
//     this.expandButton.innerText = "Expand";

//     // Set a click handler on the expandButton reference, calling the expandArticle method.
//     // this.expandButton.addEventListener('click', () => this.expandArticle())
//     this.expandButton.addEventListener("click", this.expandArticle.bind(this));
//   }

//   expandArticle() {
//     // Using our reference to the domElement, toggle a class to expand or hide the article.
//     console.log("expandArticle()", this);
//     this.domElement.classList.toggle("article-open");
//   }
// }

// /* START HERE:

// - Select all classes named ".article" and assign that value to the articles variable.

// - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

// */

// let articles = document.querySelectorAll(".article");

// articles.forEach(article => new Article(article));
// console.log(articles);
