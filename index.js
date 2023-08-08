let url = 'https://jsonplaceholder.typicode.com/users';
let xhr = XMLHttpRequest();

xhr.onreadystatechange = function(res) {
  console.log(xhr.readystate)
};

xhr.onerror = function(err) {
  console.warn(err)
};