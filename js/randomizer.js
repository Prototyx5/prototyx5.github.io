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
        var randomtest = Math.floor(Math.random()*test.length);
        var change = document.getElementById("id0" + i);
        change.innerHTML = test[randomtest];
    }
}