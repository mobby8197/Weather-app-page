document.getElementById('loginButton').addEventListener('click', login);

function login() {
 const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;

 if (username === 'demo' && password === 'password') {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('searchPage').style.display = 'block';
 } else {
    alert('Invalid username or password. Please try again.');
 }
}

let weatherAPIKey = '42a5aee38fc54f6dbd9162725230512';
let weatherBaseEndpoint = 'http://api.weatherapi.com/v1/current.json?key=42a5aee38fc54f6dbd9162725230512&q=bangalore&aqi=no' + weatherAPIKey;