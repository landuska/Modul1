let scoreStudent = [12, 45, 78, 32, 56, 89, 24, 68, 91, 42, 73, 19, 60, 37, 51, 84, 29, 63, 17, 50, 76, 39, 67, 22];
console.log(scoreStudent)
for (let i = 0; i < scoreStudent.length-1; i++) {
    for (let j = 0; j < scoreStudent.length-i-1; j++){
        if (scoreStudent[j] > scoreStudent [j+1]) {
            let temp = scoreStudent [j];
            scoreStudent[j] = scoreStudent [j+1];
            scoreStudent [j+1] = temp;
        };
    };
};

console.log(scoreStudent)