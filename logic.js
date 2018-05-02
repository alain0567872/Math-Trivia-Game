var panel = $("");
var countStarNumber = 30;

// Question set
var questions = [{
    question : "2800(75x+80)",
  answers: ["234,000x","210,000x+224,000","224,000x+210,000"],
  correctAnswer: "210,000x+224,000",
  image: "assets/17484-200.jpg"
},
{
    question : "40x+20=140. Find the value of x",
    answers: ["3","30","4","40"],
    correctAnswer: "3",
    image: "assets/images.jpg"   
}

],

// variable to hold our setInterval
var timer;
var game = {
question: questions,
 currentQuestion: 0,
 counter: countStartNumber,
correct:0,
incorrect:0,

countdown: function() {
    this.counter--;
    $("counter-number").html(this.counter);
    if(this.counter === 0) {
        console.log("Time is up!");
        this.timeUp();
    }
}
 loadQuestion: function() {
    time = setInterval(this.countdown.bind(this), 1000);
    panel.html("<h2>" + questions[this.currentQuestion],question + "</h2>");
    for(var i=0; i < questions[this.currentQuestion],answers,length; i++) {
        panel.append("<button class")
    }
}
}