function RandomNumberGenerate() {
    var random = Math.floor(Math.random() * 2000);
    console.log(random);

    document.getElementById("result").innerHTML = random;
}