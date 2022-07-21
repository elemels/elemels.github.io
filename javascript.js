var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptButton");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var action = document.getElementById("action").value;
  var reason = document.getElementById ("reason"). value;

  displayScript.innerHTML = "Dear Senator, my name is " + name + ", and I live in " + location + ". I, and those in my community, are concerned about the rising issue of climate change, and we'd like government officials to " + action + ". Personally, I will be strongly affected by global warming, and it's important to me because " +reason + " Please support policies to lessen our carbon footprint and help ensure our planet is protected. Thank you!";
}

