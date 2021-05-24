console.log("test");
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", handleForm);
});

function handleForm(e) {
  e.preventDefault(); //Stop page reloading
  const val = document.getElementById("code-input").value;
  let result = "";

  for (i = 0; i < val.length; i++) {
    switch (val[i]) {
      case "a":
        result += "..- ";
        break;
      case "b":
        result += "-... ";
        break;
      case "c":
        result += "-.-. ";
        break;
      case "d":
        result += "-.. ";
        break;
      case "e":
        result += ". ";
        break;
      case "f":
        result += "..-. ";
        break;
      case "g":
        result += "--. ";
        break;
      case "h":
        result += ".... ";
        break;
      case "i":
        result += ".. ";
        break;
      case "j":
        result += ".--- ";
        break;
      case "k":
        result += "-.- ";
        break;
      case "l":
        result += ".-.. ";
        break;
      case "m":
        result += "-- ";
        break;
      case "n":
        result += "-. ";
        break;
      case "o":
        result += "--- ";
        break;
      case "p":
        result += ".--. ";
        break;
      case "q":
        result += "--.- ";
        break;
      case "r":
        result += ".-. ";
        break;
      case "s":
        result += "... ";
        break;
      case "t":
        result += "- ";
        break;
      case "u":
        result += "..- ";
        break;
      case "v":
        result += "...- ";
        break;
      case "w":
        result += ".-- ";
        break;
      case "x":
        result += "-..- ";
        break;
      case "y":
        result += "-.-- ";
        break;
      case "z":
        result += "--.. ";
        break;
    }
  }

  document.getElementById("result").innerHTML = `Morse code is ${result}`;
}
