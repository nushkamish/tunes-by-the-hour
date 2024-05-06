
let infoDiv = document.querySelector('.info');

let timesDiv = document.querySelector('.times');

let popUp = document.querySelector('.popup');

let infoVisible = false;


function toggleInfo() {
   
    if (popUp.style.display === 'none' || popUp.style.display === '') {
        popUp.style.display = 'block';
        infoVisible = true;
       
        timesDiv.style.display = 'none';
    } else {
        popUp.style.display = 'none';
        infoVisible = false;
        
        timesDiv.style.display = 'block';
    }
}


infoDiv.addEventListener('click', toggleInfo);


document.addEventListener('click', function(event) {

    if (!infoDiv.contains(event.target)) {
        
        if (infoVisible) {
            toggleInfo();
        }
    }
});




function updateTime() {
    let today = new Date();
    console.log(today);

    // GET CURRENT HOUR
    let thisHour = today.getHours();
    console.log(thisHour);

    // GET CURRENT MINUTE
    let thisMinute = today.getMinutes();
    console.log(thisMinute);

    // GET CURRENT SECOND
    let thisSecond = today.getSeconds();
    console.log(thisSecond);
  
    // CONDITIONALS
    if (thisSecond < 10) {
        thisSecond = "0" + thisSecond;
    }
  
    if (thisMinute < 10) {
        thisMinute = "0" + thisMinute;
    }
  
    if (thisHour < 10) {
        thisHour = "0" + thisHour;
        
    }


    let playElement = document.querySelector('.play');
    let timesDiv = document.querySelector('.times');
    let startingPoint =  154.3
    let hour1 = document.querySelector('.hour1');
    let hour2 = document.querySelector('.hour2');
    let hour3 = document.querySelector('.hour3');
    let hour4 = document.querySelector('.hour4');
    let hour5 = document.querySelector('.hour5');
    let hour6 = document.querySelector('.hour6');
    let hour7 = document.querySelector('.hour7');
    let hour8 = document.querySelector('.hour8');
    let hour9 = document.querySelector('.hour9');
    let hour10 = document.querySelector('.hour10');
    let hour11 = document.querySelector('.hour11');
    let hour12 = document.querySelector('.hour12');
    let hour13 = document.querySelector('.hour13');
    let hour14 = document.querySelector('.hour14');
    let hour15 = document.querySelector('.hour15');
    let hour16 = document.querySelector('.hour16');
    let hour17 = document.querySelector('.hour17');
    let hour18 = document.querySelector('.hour18');
    let hour19 = document.querySelector('.hour19');
    let hour20 = document.querySelector('.hour20');
    let hour21 = document.querySelector('.hour21');
    let hour22 = document.querySelector('.hour22');
    let hour23 = document.querySelector('.hour23');
    let hour24 = document.querySelector('.hour24');



   

   
    console.log(playElement);

    
    

    // playElement.style.background = "linear-gradient(to right, #f06543, #F09D51, #FFFD82)";

    let popUp = document.querySelector('.popup');
    
   
    let timeOfDay = "";

    if (thisHour >= 20 || thisHour < 3) {
        timeOfDay = "Night";
    } else if (thisHour >= 4 && thisHour < 11) {
        timeOfDay = "Morning";
    } else if (thisHour >= 11 && thisHour < 15) {
        timeOfDay = "Noon";
    } else if (thisHour >= 16 && thisHour < 20) {
        timeOfDay = "Evening";
    }

    //changing the color every hour and mood

    // GET CURRENT DAY OF WEEK
let thisWeekday = today.getDay();
console.log(thisWeekday);

// HOW DO WE SHOW THE NAME OF THE DAY?
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[thisWeekday]);




    // midnight
    if (thisHour === "00"){

        playElement.style.background = "linear-gradient(to right,#050326, #0C085E, #140D96)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Hypnotic, Ethereal, Mesmerizing" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #050326, #140D96)";
        popUp.style.color = "white";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour1.style.color= "white";
        hour24.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint;

       
      
    } 

       // 1AM
       if (thisHour === "01" ) {
        playElement.style.background = "linear-gradient(to right, #EE1B42, #DA611B, #FCCA46)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Enigmatic, Mysterious, Urban" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #EE1B42, #FCCA46)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%";
        hour2.style.color= "white";
        hour1.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - 9.1 + "%";
       
      
    } 

       // 2AM
       if (thisHour === "02" ) {
        playElement.style.background = "linear-gradient(to right, #7D5BA6, #86A59C, #89CE94)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Energetic, Eclectic, Spontaneous" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right,  #7D5BA6, #89CE94)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour3.style.color= "white";
        hour2.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*2) + "%";
      
    } 

       // 3AM
       if (thisHour === "03" ) {
        playElement.style.background = "linear-gradient(to right, #37323E, #6D6A75, #BFBDC1)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Reflective, Contemplative, Restless" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #37323E, #BFBDC1)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour4.style.color= "white";
        hour3.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*3) + "%";
      
      
    } 
       // 4AM
       if (thisHour === "04" ) {
        playElement.style.background = "linear-gradient(to right, #0d0221, #0F084B, #26408B)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Serene, Contemplative, Ambient" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #0d0221, #26408B)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        popUp.style.color = "white";
        hour5.style.color= "white";
        hour4.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*4) + "%";
      
    } 
       // 5AM
       if (thisHour === "05" ) {
        playElement.style.background = "linear-gradient(to right, #DF8E2A, #E8AE68, #ffd275)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Optimistic, Upbeat, Energizing" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right,  #DF8E2A, #ffd275)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour6.style.color= "white";
        hour5.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*5) + "%";

      
    } 
       // 6AM
       if (thisHour === "06" ) {
        playElement.style.background = "linear-gradient(to right, #BB8A89, AC7B7D, #977390)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Hypnotic, Ethereal, Mesmerizing" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #BB8A89, #977390)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour7.style.color= "white";
        hour6.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*6) + "%";
      
    } 
       // 7AM
       if (thisHour === "07" ) {
        playElement.style.background = "linear-gradient(to right, #F3EAF4, #E5CEDC, #BCA3AC)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Motivational, Upbeat, Fresh" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #F3EAF4, #BCA3AC)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour8.style.color= "white";
        hour7.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*7) + "%";
      
    } 
       // 8AM
       if (thisHour === "08" ) {
        playElement.style.background = "linear-gradient(to right, #FFF9A5, #DFEFCA , #CCDDD3)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Energetic, Empowering, Active" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #FFF9A5, #CCDDD3)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour9.style.color= "white";
        hour8.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*8) + "%";
     
      
    } 
       // 9AM
       if (thisHour === "09" ) {
        playElement.style.background = "linear-gradient(to right, #B0413E, #FFFFC7, #548687)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Productive, Energetic, Progressive" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #B0413E, #548687)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour10.style.color= "white";
        hour9.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*9) + "%";

    } 
       // 10AM
       if (thisHour === 10 ) {
        playElement.style.background = "linear-gradient(to right, #F79D84, #FAC05E, #3FA7D6)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Relaxed, Chill, Mellow" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right,#F79D84, #3FA7D6)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour11.style.color= "white";
        hour10.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*10) + "%";
      
    } 
       // 11AM
       if (thisHour === 11 ) {
        playElement.style.background = "linear-gradient(to right, #607196, #BABFD1, #E8E9ED)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite"; 
        mood.innerHTML =  "The Current Mood Is Lighthearted, Carefree, Relaxed" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #607196, #E8E9ED)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour12.style.color= "white";
        hour11.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*11) + "%";
      
    } 
       //NOON
       if (thisHour === 12 ) {
        playElement.style.background = "linear-gradient(to right, #f06543, #F09D51, #FFFD82)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite"; 
        mood.innerHTML =  "The Current Mood Is Upbeat, Bright, Lively" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #f06543, #FFFD82)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour13.style.color= "white";
        hour12.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*12) + "%";
    
      
    } 

       // 1PM
       if (thisHour === 13 ) {
        playElement.style.background = "linear-gradient(to right, #FCD3DE, #9883E5, #72A1E5)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Productive, Focused, Motivated" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right,  #FCD3DE, #72A1E5)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour14.style.color= "white";
        hour13.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*13) + "%";
        timesDiv.style.top= "transition 3s";
        
        
      
    } 
       // 2PM
       if (thisHour === 14 ) {
        playElement.style.background = "linear-gradient(to right, #187795, #38686A, #A3B4A2)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Tranquil, Relaxing, Calming" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #187795, #A3B4A2";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour15.style.color= "white";
        hour14.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*14) + "%";
        timesDiv.style.top= "transition 3s";
      
    } 
       // 3PM
       if (thisHour === 15 ) {
        playElement.style.background = "linear-gradient(to right, #BBB6DF, #C6C8EE, #EBEBFF)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Laid-back, Easygoing, Casual" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #BBB6DF,#EBEBFF)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour16.style.color= "white";
        hour15.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*15) + "%";
      
    } 
     

       // 4PM
       if (thisHour === 16 ) {
        playElement.style.background = "linear-gradient(to right, #DE9E36, #DEB841, #F4D1AE)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Stimulating, Refreshing, Invigorating" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #DE9E36, #F4D1AE)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour17.style.color= "white";
        hour16.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*16) + "%";
      
    } 

       // 5PM
       if (thisHour === 17 ) {
        playElement.style.background = "linear-gradient(to right, #2C6E49, #4C956C, #FEFEE3)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite"; 
        mood.innerHTML =  "The Current Mood Is Reflective, Leisurely, Tranquil" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right,  #2C6E49, #FEFEE3)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour18.style.color= "white";
        hour17.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*17) + "%";
      
    } 
       // 6PM
       if (thisHour === 18 ) {
        playElement.style.background = "linear-gradient(to right,#833ab4, #fd1d1d, #fcb045)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Urban, Energetic, Bustling" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right,  #833ab4, #fd1d1d)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        popUp.style.color = "white";
        hour19.style.color= "white";
        hour18.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*18) + "%";
      
    } 
       // 7PM
       if (thisHour === 19 ) {
        playElement.style.background = "linear-gradient(to right, #432371, #f27a7d, #faae7b)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Romantic, Serene, Atmospheric" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right,#432371, #faae7b)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour20.style.color= "white";
        hour19.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*19) + "%";
      
    } 
       // 8PM
       if (thisHour === 20 ) {
        playElement.style.background = "linear-gradient(to right, #280000, #570000, #B10F2E)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite"; 
        mood.innerHTML =  "The Current Mood Is Intimate, Romantic, Elegant" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #280000, #B10F2E)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        popUp.style.color = "white";
        hour21.style.color= "white";
        hour20.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*20) + "%";
      
    } 
       // 9PM
       if (thisHour === 21 ) {
        playElement.style.background = "linear-gradient(to right, #f13c77, #ea5753, #ffb88e)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";  
        mood.innerHTML =  "The Current Mood Is Sophisticated, Refined, Elegant" + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #f13c77, #ffb88e";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour22.style.color= "white";
        hour21.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*21) + "%";
      
    } 
       // 10PM

        if (thisHour === 22 ) {
            playElement.style.background = "linear-gradient(to right, #C9C9C9, #A3A3A3, #424242)";
            playElement.style.backgroundSize = "300% 100%"; 
            playElement.style.animation = "moveGradient 5s linear infinite";  
            mood.innerHTML =  "The Current Mood Is Mellow, Relaxed, Laid-back" + " " +days[thisWeekday] + " " + timeOfDay
            popUp.style.background = "linear-gradient(to right,#C9C9C9, #424242)";
            popUp.style.animation  = "moveGradient 5s linear infinite"; 
            popUp.style.backgroundSize = "300% 100%"; 
            hour23.style.color= "white";
            hour22.style.color= " rgb(70, 69, 69)";
            timesDiv.style.top= startingPoint - (9.1*22) + "%";
      
    } 
       // 11PM
       if (thisHour === 23 ) {
        playElement.style.background = "linear-gradient(to right, #4113ae, #0a33f9, #f6f151)";
        playElement.style.backgroundSize = "300% 100%"; 
        playElement.style.animation = "moveGradient 5s linear infinite";
        mood.innerHTML =  "The Current Mood Is Chill, Introspective, Contemplative"  + " " +days[thisWeekday] + " " + timeOfDay
        popUp.style.background = "linear-gradient(to right, #4113ae, #f6f151)";
        popUp.style.animation  = "moveGradient 5s linear infinite"; 
        popUp.style.backgroundSize = "300% 100%"; 
        hour24.style.color= "white";
        hour23.style.color= " rgb(70, 69, 69)";
        timesDiv.style.top= startingPoint - (9.1*23) + "%";
      
    } 

}

updateTime();
setInterval(updateTime, 1000);




// adding music to the circle + making it move

let playlists = {
    '00': [
        "audio/songs0/song1.mp3",
        "audio/songs0/song2.mp3",
        "audio/songs0/song3.mp3",
        "audio/songs0/song4.mp3"
    ],

    '01': [
        "audio/songs1/song1.mp3",
        "audio/songs1/song2.mp3",
        "audio/songs1/song3.mp3",
        "audio/songs1/song4.mp3"
    ],

    '02': [
        "audio/songs2/song1.mp3",
        "audio/songs2/song2.mp3",
        "audio/songs2/song3.mp3",
        "audio/songs2/song4.mp3"
    ],

    '03': [
        "audio/songs3/song1.mp3",
        "audio/songs3/song2.mp3",
        "audio/songs3/song3.mp3",
        "audio/songs3/song4.mp3"
    ],

    '04': [
        "audio/songs4/song1.mp3",
        "audio/songs4/song2.mp3",
        "audio/songs4/song3.mp3",
        "audio/songs4/song4.mp3"
    ],

    '05': [
        "audio/songs5/song1.mp3",
        "audio/songs5/song2.mp3",
        "audio/songs5/song3.mp3",
        "audio/songs5/song4.mp3"
    ],

    '06': [
        "audio/songs6/song1.mp3",
        "audio/songs6/song2.mp3",
        "audio/songs6/song3.mp3",
        "audio/songs6/song4.mp3"
    ],

    '07': [
        "audio/songs7/song1.mp3",
        "audio/songs7/song2.mp3",
        "audio/songs7/song3.mp3",
        "audio/songs7/song4.mp3"
    ],

    '08': [
        "audio/songs8/song1.mp3",
        "audio/songs8/song2.mp3",
        "audio/songs8/song3.mp3",
        "audio/songs8/song4.mp3"
    ],
    

    '09': [
        "audio/songs9/song1.mp3",
        "audio/songs9/song2.mp3",
        "audio/songs9/song3.mp3",
        "audio/songs9/song4.mp3"
    ],

    '10': [
        "audio/songs10/song1.mp3",
        "audio/songs10/song2.mp3",
        "audio/songs10/song3.mp3",
        "audio/songs10/song4.mp3"
    ],

    '11': [
        "audio/songs11/song1.mp3",
        "audio/songs11/song2.mp3",
        "audio/songs11/song3.mp3",
        "audio/songs11/song4.mp3"
    ],

    '12': [
        "audio/songs12/song1.mp3",
        "audio/songs12/song2.mp3",
        "audio/songs12/song3.mp3",
        "audio/songs12/song4.mp3"
    ],

    '13': [
        "audio/songs13/song1.mp3",
        "audio/songs13/song2.mp3",
        "audio/songs13/song3.mp3",
        "audio/songs13/song4.mp3"
    ],

    '14': [
        "audio/songs14/song1.mp3",
        "audio/songs14/song2.mp3",
        "audio/songs14/song3.mp3",
        "audio/songs14/song4.mp3"
    ],

    '15': [
        "audio/songs15/song1.mp3",
        "audio/songs15/song2.mp3",
        "audio/songs15/song3.mp3",
        "audio/songs15/song4.mp3"
    ],


    '16': [
        "audio/songs16/song1.mp3",
        "audio/songs16/song2.mp3",
        "audio/songs16/song3.mp3",
        "audio/songs16/song4.mp3"
    ],

    '17': [
        "audio/songs17/song1.mp3",
        "audio/songs17/song2.mp3",
        "audio/songs17/song3.mp3",
        "audio/songs17/song4.mp3"
    ],

    '18': [
        "audio/songs18/song1.mp3",
        "audio/songs18/song2.mp3",
        "audio/songs18/song3.mp3",
        "audio/songs18/song4.mp3"
    ],

    '19': [
        "audio/songs19/song1.mp3",
        "audio/songs19/song2.mp3",
        "audio/songs19/song3.mp3",
        "audio/songs19/song4.mp3"
    ],

    '20': [
        "audio/songs20/song1.mp3",
        "audio/songs20/song2.mp3",
        "audio/songs20/song3.mp3",
        "audio/songs20/song4.mp3"
    ],

    '21': [
        "audio/songs21/song1.mp3",
        "audio/songs21/song2.mp3",
        "audio/songs21/song3.mp3",
        "audio/songs21/song4.mp3"
    ],

    '22': [
        "audio/songs22/song1.mp3",
        "audio/songs22/song2.mp3",
        "audio/songs22/song3.mp3",
        "audio/songs22/song4.mp3"
    ],

    '23': [
        "audio/songs23/song1.mp3",
        "audio/songs23/song2.mp3",
        "audio/songs23/song3.mp3",
        "audio/songs23/song4.mp3"
    ]

};



let playButton = document.querySelector('.play');
let audioPlayer = document.getElementById('audioPlayer');

let animationInterval;
let isAnimating = false;

playButton.addEventListener('dblclick', function(event) {
    if (!audioPlayer.paused) {
        audioPlayer.pause();
        clearInterval(animationInterval);
        isAnimating = false;
        playButton.style.width = '20px'; 
        playButton.style.height = '20px'; 
    }
});

playButton.addEventListener('click', function(event) {
    if (audioPlayer.paused) {
        let today = new Date();
        let thisHour = today.getHours().toString().padStart(2, '0');
        let playlist = playlists[thisHour] || []; 

        if (playlist.length > 0) {
            let randomIndex = Math.floor(Math.random() * playlist.length);
            let randomSong = playlist[randomIndex];
            
            audioPlayer.src = randomSong;
            audioPlayer.play();
            
            if (!isAnimating) {
                isAnimating = true;
                animationInterval = setInterval(toggleSize, 500);
            }
        } else {
            console.log("No playlist defined for the current hour.");
        }
    }
});


function toggleSize() {
    if (playButton.style.width === '20px') {
        playButton.style.width = '30px';
        playButton.style.height = '30px';
    } else {
        playButton.style.width = '20px';
        playButton.style.height = '20px';
    }
}


//placeholder

// Define a variable to store the currently playing song name
let currentSongName = "";

// Function to update the currently playing song
function updateCurrentSongName(songName) {
    currentSongName = songName;
    let playingSpan = document.querySelector('.playing');
    if (playingSpan) {
        playingSpan.textContent = currentSongName;
    }
}

// Function to play a random song from a given playlist
function playRandomSong(playlist) {
    let randomIndex = Math.floor(Math.random() * playlist.length);
    let randomSong = playlist[randomIndex];
    // Play the song, assuming you have a function to play audio
    playAudio(randomSong);
    // Update the currently playing song name
    updateCurrentSongName(getSongNameFromPath(randomSong));
}

// Function to extract the song name from the file path
function getSongNameFromPath(filePath) {
    // Example: "audio/songs0/song1.mp3" -> "song1"
    return filePath.split('/').pop().split('.')[0];
}

// Example usage
let currentHourPlaylist = playlists['00']; // Assuming it's 00 hour
playRandomSong(currentHourPlaylist);






