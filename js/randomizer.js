var test = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
];


choose = function() {
    for(let i = 0; i < 7; i++) {
        var change = document.getElementById("settings0" + i);
        change.innerHTML = test[Math.floor(Math.random()*test.length)];
    }
}