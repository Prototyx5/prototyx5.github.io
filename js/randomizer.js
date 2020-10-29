var test = [
    "1",
    "2"
];


choose = function() {
    var randomtest = Math.floor(Math.random()*test.length);
    var change = document.getElementById("id01");
    change.innerHTML = randomtest;
}