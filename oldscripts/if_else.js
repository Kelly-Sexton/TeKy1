// var studentScore = 71;

// var randomscore= Math.floor((Math.random() * 100) + 1);

// if( studentScore > 50 ){
    // console.log("Congradulations!");

// }else {
    // console.log("study up next time.")
// }

// var studentScore = Math.floor((Math.random() * 100) + 1);

// if(studentScore >=90) {
//     console.log("Congradulations! you've gotten an A");

// } else if(studentScore >= 80){
//     console.log("Sweet keep it up! You have gotten a B!")
// } else if(studentScore >= 70){
//     console.log("You understand the concepts just focus on improving your C.")
// } else if(studentScore >= 60){
//     console.log("Please use the rosources provided to increase your D.")
// } else if(studentScore <60){
    // console.log("We can find a solution to help with this F score.")
// }


/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 
     if our record was better, talk some smack. 
 If not, you should still talk some smack, but in a different way. 
    If the records were the same, talk some smack. 
 You should also deal with the off chance that we don't play at all(i.e., a lockout)*/

var timesWeBeatPatriotsLastSeason = 0;
var timesTheyBeatUs = 0;

var lockout=true;


if (lockout) {
    console.log("We get paid too much.")
}
else if (timesWeBeatPatriotsLastSeason > timesTheyBeatUs) {
	console.log("We are just better at football.")
} else if (timesTheyBeatUs > timesWeBeatPatriotsLastSeason) {
	console.log("Yea, well Andrew Luck was hurt.")
} else if (timesWeBeatPatriotsLastSeason == timesTheyBeatUs) {
	console.log("Patriots just cheat.")
}
  
// } else if ()
	// console.log()
