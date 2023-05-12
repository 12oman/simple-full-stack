
  
async function fetchMessage() {
    const response = await fetch('http://localhost:3000/api');
    const data = await response.json();
    document.getElementById('message').innerHTML = data.message;
  }
  