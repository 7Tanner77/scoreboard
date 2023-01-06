let homeScore = document.getElementById("home-score")
let homeCount = 0
 let awayScore = document.getElementById("away-score")
let awayCount = 0

//! Home team scoreboard functions 
 function homeAdd1() {
     homeCount += 1 // x = x + y
     homeScore.textContent = homeCount    
 }

 function homeAdd2() {
     homeCount += 2
     homeScore.textContent = homeCount
 }

 function homeAdd3() {
     homeCount += 3
     homeScore.textContent = homeCount
 }

 //! Away team scoreboard functions
 function awayAdd1() {
     awayCount += 1 // x = x + y
     awayScore.textContent = awayCount
 }

 function awayAdd2() {
     awayCount += 2
     awayScore.textContent = awayCount
}

 function awayAdd3() {
     awayCount += 3
    awayScore.textContent = awayCount
 }
