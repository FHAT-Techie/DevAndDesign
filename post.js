let form = document.querySelector(`#form`)
let name = document.querySelector(`#name`)
let post = document.querySelector(`#think`)
let section = document.querySelector(`section`)


let postArray = [

]

form.addEventListener(`submit`, function(event) {
  event.preventDefault()
  let userName = name.value
  let userPost = post.value

  let postObj = {
    userNameName : userName,
    userPostPost : userPost
   }
postArray.push(postObj)
console.log(postArray)
   
  form.reset()
  postOnUI()
})

function postOnUI() {
  section.innerHTML = '';
  postArray.forEach(function(item) {

    let nameHeader = document.createElement(`h1`)
    let postBody = document.createElement(`p`)

    nameHeader.textContent = item.userNameName
    postBody.textContent = item.userPostPost

    section.append(nameHeader)
    section.append(postBody)
 })
}