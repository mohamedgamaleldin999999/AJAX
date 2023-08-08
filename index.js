let url = 'https://jsonplaceholder.typicode.com/users';
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange = function(ev) {
  console.log(xhr.readyState)
};

xhr.onerror = function(err) {
  console.warn(err)
};

xhr.send(null);