
var main;
var btn;


function mainLoad() {
  main = document.getElementById('mymain');
   if (localStorage.getItem("note") != null) {
     main.innerText = localStorage.getItem("note");
   } else {
     main.innerText = "Type here..";
   }

  btn = document.getElementById('mybtn');
  btn.addEventListener("click", buttonSave, false);
}


window.onload = mainLoad;


// If it has, it should render what they have done
function siteLoad () {
  main.innerText = localStorage['note'];
}

// This will allow the user to save what they have input
function buttonSave () {
  localStorage['note'] = main.innerText;
  console.log(main)

}

if (performance.navigation.type == 1) {
  console.log("Reloaded");
} else {
  console.log("Not Reloaded");
}
