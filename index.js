// Username Prompt
     let username = prompt("Enter your username");

    //  Welcome Message
     let welcome = alert(`Welcome ${username}!`);
    
    // Array to store the points
    const points = [];

    //  For Statement
    for (let maxValue = 2; maxValue < Infinity ; maxValue++){
        // Random Number Generator
        let randomNum = Math.floor(Math.random() * maxValue) + 1;

        // User Guess Input
        let guess = parseInt(prompt(`Enter a number between 1 and ${maxValue}`));
    
        // If Statements
        if(guess == randomNum){
            alert("Correct!");
            points.push("correct!");
        } else if(guess > randomNum){
            alert("Your guess is too high!");
        } else if(guess < randomNum){
            alert("Your guess is too low!");
        } else {
            alert("Error!");
        }
        let score = points.length;

        let pointsAlert = alert(`You have ${score} points`);
    }