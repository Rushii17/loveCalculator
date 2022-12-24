var random = Math.random() * 100;

var loveCal = Math.floor(random) + 1;

function showLovePercentage() {
    if (loveCal < 50) {
        document.querySelector("h2").innerHTML = "Your love score is " + loveCal + "%" + " you love each other like Salman loves Katrina.";
        document.querySelector("h2").style.color = "red";

    }
    else if (loveCal >= 50 && loveCal <= 75) {
        document.querySelector("h2").innerHTML = "Your love score is " + loveCal + "%" + " you love each other like Kenye loves Kenye";

        document.querySelector("h2").style.color = "blue";

    }
    else if (loveCal > 75 && loveCal <= 99) {
        document.querySelector("h2").innerHTML = "Your love score is " + loveCal + "%" + " you love each other like Tony loves Maria.";
        document.querySelector("h2").style.color = "green";

    }
    else {
        document.querySelector("h2").innerHTML = "Your love score is " + loveCal + "%" + " you are perfect😍.";
        document.querySelector("h2").style.color = "green";

    }
}

// setTimeout(() => {
//     document.location.reload();
// }, 2000);


if (event.keyCode === enter) {
    $("btn").click();
}