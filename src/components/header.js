const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let outerDiv = document.createElement('div')
  outerDiv.classList.add('header')
  let spanDate = document.createElement('span')
  spanDate.classList.add('date')
  spanDate.textContent = date
  let h1 = document.createElement('h1')
  h1.textContent = title
  let spanTemp = document.createElement('span')
  spanTemp.classList.add('temp')
  spanTemp.textContent = temp

  outerDiv.append(spanDate, h1, spanTemp)
  return outerDiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let apender = document.querySelector(selector)
  apender.appendChild(Header("Hello World", "20/20/20", "Some other String"))
}

export { Header, headerAppender }
