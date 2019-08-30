// variables
let log = console.log;
let allCards = document.querySelectorAll('#cards');
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let card7 = document.getElementById("card7");
let card8 = document.getElementById("card8");
let card9 = document.getElementById("card9");
let circularButton = document.getElementById("circularbutton");
let startBtn = document.getElementById("startGame");
let refreshBtn = document.getElementById("startButton");
let refreshClass = document.querySelector('.refresh');
let replacing = document.getElementById('replacing');


card1.style.display = "none";
card2.style.display = "none";
card3.style.display = "none";
card4.style.display = "none";
card5.style.display = "none";
card6.style.display = "none";
card7.style.display = "none";
card8.style.display = "none";
card9.style.display = "none";
refreshClass.style.display = "none";

function changeContent(cardNumber, content) {
    cardNumber.innerHTML = content
}

function clickCards(cardNumber2, content) {
    
    cardNumber2.addEventListener('click', evt => {
        changeContent(cardNumber2, content);
    })
}

function triviaStart(card,displayToggle){
    card.style.display = displayToggle;
}

startBtn.addEventListener('click', evt => {
    triviaStart(card1,"block");
    triviaStart(card2,"block");
    triviaStart(card3,"block");
    triviaStart(card4,"block");
    triviaStart(card5,"block");
    triviaStart(card6,"block");
    triviaStart(card7,"block");
    triviaStart(card8,"block");
    triviaStart(card9,"block");
    triviaStart(refreshClass,"block");
    triviaStart(startBtn,"none");
    
})

circularButton.addEventListener('click', evt =>{
    changeContent(card1,"Which franchise was the oldest in professional football history?");
    changeContent(card2,"There are a total of 7 officials on the field during an NFL game. Which person is in charge of the officiating team?");
    changeContent(card3,"Which team entered the league in 1921?");
    changeContent(card4,"The initial name of the Detroit Lions was the Spartans. What city did they start in?");
    changeContent(card5,"How many teams are there currently in the NFL?");
    changeContent(card6,"Which Hall of Fame NFL player went by the nickname 'Sweetness'?");
    changeContent(card7,"NFL footballs are made out of which material?");
    changeContent(card8,"What are the color of football goal posts?");
    changeContent(card9,"In a conventional game of football, how many players are fielded at a time?");

})


clickCards(card1, "Answer: Arizona Cardinals - The Cardinals started playing professional football in 1899 in Chicago under the name of the Morgan Athletic Club.")
clickCards(card2, "Answer: referee - The other positions are the umpire, head linesman, field judge, line judge, back judge, and the side judge.")
clickCards(card3, "Answer: Green Bay Packers - The Packers were an independent team and joined the league in 1921. The city of Green Bay set up a non-profit corporation to operate the team.")
clickCards(card4, "Answer: Portsmouth, OH - The Spartans franchise was purchased by Dick Richards in 1934 and moved to Detroit to be renamed the Lions.")
clickCards(card5, "Answer: 32 - In 1920 the NFL started with just 10 teams. Now it has expanded to 32, with all of them being based in the continental United States.")
clickCards(card6, "Answer: Walter Payton - During his reign in the 70's and 80's, Walter 'Sweetness' Payton (1954-1999), a running back, set a number of offensive records. ")
clickCards(card7, "Answer: Cowhide - According to Wilson Football, the official ball makers for the NFL, one cowhide can produce approximately 10 footballs. ")
clickCards(card8, "Answer: Yellow - More information: High schools, colleges and the NFL tend to use some shade of yellow for goal posts.")
clickCards(card9, "Answer: 22 - There are 22 players, 11 on offense and 11 on defense.")





// //Lone function
// function ReplaceContentInHTMLContainer (id, content) {
//     let container = document.getElementById(id);
//     container.innerHTML = content;
// }


// // This is the looping for the content off the first page so all i need to do is create references to the gamebord and plug them in
// ReplaceContentInHTMLContainer("replacing", 'Simon');
// function CountdownTimer () {
//     if (number > 1) {
//         number--;
//         ReplaceContentInHTMLContainer ("firstPageContent", "Inspired and Created By");
//     } else {
//         clearInterval(timerID);
//         // log("more stuff")
//         ReplaceContentInHTMLContainer ("firstPageContent", "Tymothy J Hanks");
//         //The game board function goes here so it will display last
//     };
//     //make an entire div class around the entire project and project it once its the time to
// }
