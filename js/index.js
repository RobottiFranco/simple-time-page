function getCurrentDate() {
    return new Date();
}

function updateClock() {
    const functionDate = getCurrentDate();
    const time = `${functionDate.getHours()}:${functionDate.getMinutes()}:${functionDate.getSeconds()}`;
    const date = `${functionDate.getDate()}/${functionDate.getMonth() + 1}/${functionDate.getFullYear()}`;
  
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
}

setInterval(function() {
    updateClock();
  }, 1000);