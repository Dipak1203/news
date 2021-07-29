
setInterval(() =>{
    let time = document.getElementById('time');
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    time.innerText = `${hour} : ${minute} : ${second}`;
    console.log(`${hour} : ${minute} : ${second}`);
    
},1000)