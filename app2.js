document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-2").addEventListener("submit", handleForm);
});

function handleForm(e) {
  e.preventDefault(); //Stop page reloading
  const val = document.getElementById("code-input-2").value;
  const snips = val.split(" ");
  let result = "";
  for (i = 0; i < snips.length; i++) {
    switch (snips[i]) {
      case "..-":
        result += "a";
        break;
      case "-...":
        result += "b";
        break;
      case "-.-.":
        result += "c";
        break;
      case "-..":
        result += "d";
        break;
      case ".":
        result += "e";
        break;
      case "..-.":
        result += "f";
        break;
      case "--.":
        result += "g";
        break;
      case "....":
        result += "h";
        break;
      case "..":
        result += "i";
        break;
      case ".---":
        result += "j";
        break;
      case "-.-":
        result += "k";
        break;
      case ".-..":
        result += "l";
        break;
      case "--":
        result += "m";
        break;
      case "-.":
        result += "n";
        break;
      case "---":
        result += "o";
        break;
      case ".--.":
        result += "p";
        break;
      case "--.-":
        result += "q";
        break;
      case ".-.":
        result += "r";
        break;
      case "...":
        result += "s";
        break;
      case "-":
        result += "t";
        break;
      case "..-":
        result += "u";
        break;
      case "...-":
        result += "v";
        break;
      case ".--":
        result += "w";
        break;
      case "-..-":
        result += "x";
        break;
      case "-.--":
        result += "y";
        break;
      case ":--..":
        result += "z";
        break;
    }
  }

  if (result == "") {
    document.getElementById(
      "result"
    ).innerHTML = `Morse Code entered is inappropriate`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Decoded result is "${result}"`;
  }
}
