//Mixed message program

//Message components
let messageComponent1 = ["Basically you have very bad luck today, ", "Basically you have bad luck today, ", "Basically you have good luck today, ", "Basically you have very good luck today, "];
let messageComponent2 = ["and you are very bad with your love. ", "and you are bad with your love. ", "and you are good with your love. ", "and you are very good with your love. "];
let messageComponent3 = ["Notice that u have very bad career today, ", "Notice that u have bad career today, ", "Notice that u have good career today, ", "Notice that u have very good career today, "];
let messageComponent4 = ["and some very bad money luck. ", "and some bad money luck. ", "and some good money luck. ", "and some very good money luck. "];

//Date object to get full date
let date = new Date();
let fullDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours();

//Function: generate score for faily fortune
function generateScore () {
    let score = Math.floor(Math.random() * 101);
    return score;
}

//Function: generate overall rating
function generateOverall (scoreArr) {
    let overallScore = scoreArr.reduce((accumulator, currentValue) => accumulator + currentValue) / 6;
    switch (true) {
        case (overallScore < 20):
            return "E";
        case (overallScore < 40):
            return "D";
        case (overallScore < 60):
            return "C";
        case (overallScore < 80):
            return "B";
        case (overallScore <= 100):
            return "A";    
    }
}

//Function: generate corresponding message accronding to score
function generateMessage (score, messageArr) {
    switch (true) {
        case (score < 25):
            return messageArr[0];
        case (score < 50):
            return messageArr[1];
        case (score < 75):
            return messageArr[2];
        case (score <= 100):
            return messageArr[3];

    }
}

//Store gnerated score
let score = [];
for (let i = 0; i < 6; i++) {
    score[i] = generateScore();
}

//Output: display daily fortune by scores
console.log("\n*** Daily Fortune Score Generator *** ");
console.log("     " + fullDate);
console.log("\nLuck         score: " + score[0]);
console.log("Love         score: " + score[1]);
console.log("Career       score: " + score[2]);
console.log("Money        score: " + score[3]);
console.log("Health       score: " + score[4]);
console.log("Relationship score: " + score[5]);
console.log("*** Oveall    rank: " + generateOverall(score));
console.log("\nToday's comment: ");
console.log(generateMessage(score[0], messageComponent1) + generateMessage(score[1], messageComponent2) + generateMessage(score[2], messageComponent3) + generateMessage(score[3], messageComponent4));
