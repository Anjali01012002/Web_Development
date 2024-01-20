var mins = 1; 
var secs = mins * 60; 
function countdown() { 
    setTimeout('Decrement()', 60); 
} 
function Decrement() { 
        minutes = document.getElementById("min"); 
        seconds = document.getElementById("sec");

        if (seconds < 59) { 
            seconds.value = secs; 
        } 
        else { 
            minutes.value = getMinutes(); 
            seconds.value = getSeconds(); 
        }
        if (secs < 10) { 
            minutes.style.color = "red"; 
            seconds.style.color = "red";
            document.getElementById("msg").innerHTML = "HURRY UP!!"; 
        } 
        if (mins < 0) { 
            alert('Timeout'); 
            minutes.value = '00'; 
            seconds.value = '00';
            document.getElementById("msg").innerHTML = "Time's up.";
        }
        else { 
            secs--; 
            setTimeout('Decrement()', 1000); 
        } 
}
function getMinutes() { 
    mins = Math.floor(secs / 60); 
    return mins; 
} 
function getSeconds() { 
    return secs - Math.round(mins * 60); 
}