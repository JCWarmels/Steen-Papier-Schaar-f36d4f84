function initiate()
{
    var button = document.getElementsByClassName("btn");
    for(var i = 0; i < button.length; i++)
    {
        button[i].style.visibility = "hidden";
    }
    document.getElementById("prompt").innerHTML = "Speler 1, Maak uw keuze!";
    document.getElementById("boi").style.display = "block";
}

function intermediate(selector)
{
    selector_player_one = selector;
    document.querySelector("#steen").setAttribute('onclick', 'finalize("Steen","' + selector_player_one + '")');
    document.querySelector("#papier").setAttribute('onclick', 'finalize("Papier","' + selector_player_one + '")');
    document.querySelector("#schaar").setAttribute('onclick', 'finalize("Schaar","' + selector_player_one + '")');
    document.getElementById("prompt").innerHTML = "Speler 2, Maak uw keuze!";
}

function finalize(selector, comparer)
{
    selector_player_one = comparer;
    console.log(selector, selector_player_one);
    if (selector == "Steen" && selector_player_one == "Schaar") {
        alert("Speler 2 wint!");
    } if (selector == "Schaar" && selector_player_one == "Papier") {
        alert("Speler 2 wint!");
    } if (selector == "Papier" && selector_player_one == "Steen") {
        alert("Speler 2 wint!");
    } if (selector == selector_player_one) {
        alert("Gelijkspel!");
    } if (selector_player_one == "Steen" && selector == "Schaar") {
        alert("Speler 1 wint!");
    } if (selector_player_one == "Schaar" && selector == "Papier") {
        alert("Speler 1 wint!");
    } if (selector_player_one == "Papier" && selector == "Steen") {
        alert("Speler 1 wint!");
    }
}