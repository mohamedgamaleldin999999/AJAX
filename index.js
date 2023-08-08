let url = 'https://jsonplaceholder.typicode.com/users';
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange = function(ev) {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    switch (xhr.status) {
      case 200:
      case 304:
        console.log("OK or Not Modified (cached)", xhr.status);
        outputUsers(xhr.responseText); //responseXML
        break;
      case 201:
        console.log("Created", xhr.status);
        let main = document.querySelector("main");
        main.textContent = xhr.responseText;
        break;
      case 403:
      case 401:
        console.log("Not Authorized or Forbidden", xhr.status);
        break;
      case 404:
        console.log("Not Found", xhr.status);
        break;
      case 500:
        console.log("Server Side Error", xhr.status);
        break;
      default:
        console.log("Some other code: ", xhr.status, xhr.status);
    }
  }
};

xhr.onerror = function(err) {
  console.warn(err)
};

xhr.send(null);

function outputUsers(str) {
  let main = document.querySelector('main');
  let data = JSON.parse(str);
  data.forEach(item => {
    let p = document.createElement('p');
    p.textContent = item.id + ' ' + item.name;
    main.appendChild(p);
  });
};