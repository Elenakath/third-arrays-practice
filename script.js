var hobbies = [
    "working out",
    "walking",
    "coding",
    "cooking",
    "baking",
    "momming"
];
console.log(hobbies.length);
hobbies.push("drawing");
console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "watching shows", "gardening");
console.log(hobbies);
hobbies.shift();
hobbies.unshift("cleaning");
console.log(hobbies);

var goals = ["finish coding", "get a job", "disney world"];
var allTheThings = hobbies.concat(goals);
console.log(allTheThings);
allTheThings.indexOf("coding");
allTheThings.splice(4, 1);
console.log(allTheThings);

var plans = allTheThings.map(function(item){
    return `I can't wait to start ${item}.`;
});
console.log(plans);