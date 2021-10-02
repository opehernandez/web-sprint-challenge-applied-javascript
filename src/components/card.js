import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  let div = document.createElement('div')
  div.classList.add('card')
  let headlineDiv = document.createElement('div')
  headlineDiv.classList.add('headline')
  headlineDiv.textContent = article.headline
  let auth = document.createElement('div')
  auth.classList.add('author')
  let imgCont = document.createElement('div')
  imgCont.classList.add('img-container')
  let img = document.createElement('img')
  img.src = article.authorPhoto
  let span = document.createElement('span')
  span.textContent = `By ${article.authorName}`
  imgCont.appendChild(img)
  auth.append(imgCont, span)
  div.append(headlineDiv, auth)
  return div

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  let outter = document.querySelector(selector)
  axios.get('http://localhost:5000/api/articles')
  .then(resp => {
    console.log(resp.data.articles.javascript)
    let info = resp.data.articles.javascript
    info.forEach(elem => {
      outter.appendChild(Card(elem))
    })
  })
}

export { Card, cardAppender }
