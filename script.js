let userName = document.querySelector('#name');
let userPost = document.querySelector('#post');
let btn = document.querySelector('button');
let feed = document.querySelector('#feed');

btn.addEventListener('click', function () {
    let name1 = userName.value;
    let post = userPost.value;

    let mainPost = document.createElement('div');
    let nameElement = document.createElement('h1');
    let postElement = document.createElement('p');

    nameElement.innerHTML = name1;
    postElement.innerHTML = post;

    mainPost.appendChild(nameElement);
    mainPost.appendChild(postElement);

    feed.appendChild(mainPost);
});
