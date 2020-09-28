var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Please enter a date in YYYY-MM-DD:", (answer) =>{
    console.log("Today's date is: " + answer);

    r1.close();
});