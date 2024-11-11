let circular = document.querySelector(".circular"); value = document.querySelector(".value");

counter = 0;
end = 77;
let operation =  setInterval(() => {
    counter++;
    value.textContent = `${counter}%`;
    circular.style.background = `conic-gradient(#7d2ae8 ${counter*3.6}deg, #eeeeeed4 0deg )`;
    if (counter === end || counter === 100 ) {
        clearInterval(operation)
    } 
}, 10);