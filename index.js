let url = 'https://jsonplaceholder.typicode.com/users';
let xhr = XMLHttpRequest();

xhr.onreadystatechange = function(res) {
  console.log(xhr.readystate)
};