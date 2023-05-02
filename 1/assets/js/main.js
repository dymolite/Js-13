const secund = document.getElementById("sec")
const minute = document.getElementById("min")
const hour = document.getElementById("hour")
const noon = document.getElementById("noon")

let sec = 0;
let min = 0;
let hr = 0;
/* function btnClickCount() {
    sec++;
    if (sec%60==0) {
        min++;
        sec=0;
        if (min%60==0) {
            hr++;
            min=0;
        }
    }
    minute.innerHTML = min
    secund.innerHTML = sec
    hour.innerHTML = hr
} */

const timer = setInterval(() => {
    sec++;
    if (sec % 60 == 0) {
        min++;
        sec = 0;
        if (min % 60 == 0) {
            hr++;
            min = 0;
            if (hr % 12 == 0) {
                hr = 0;
                noon.innerHTML = "PM";
            }
        }
    }
    hour.innerHTML = hr + " : "
    minute.innerHTML = min + " : "
    secund.innerHTML = sec
}, 1000);

/* function clearInt() {
    clearInterval(timer);
} */