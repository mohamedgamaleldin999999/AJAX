let url = 'https://jsonplaceholder.typicode.com/users';
let xhr = XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange = function(ev) {
  console.log(xhr.readystate)
};

xhr.onerror = function(err) {
  console.warn(err)
};

xhr.send(null);