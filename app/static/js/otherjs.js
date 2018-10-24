// var button = document.getElementById('mybtn');
var main;
var btn;
// var button;
// // document.getElementByID("mybtn").addEventListener("click", buttonSave);
// console.log(main)
// Next I need to specify what I want the page to say if it hasn't been used yet
// if (localStorage['note'] === undefined ) {
//   localStorage['note'] = 'Use this for information too sensitive for paper...'
// }


function mainLoad() {
  main = document.getElementById('mymain');
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

//  e.preventdefault is event.preventdefault. Means keep the page from refreshing and removing the notes
// function keySave (e) {
//   if (e.keyCode === 83 && e.metaKey || e.keyCode === 83 && e.ctrlKey) {
//     e.preventDefault();
//     localStorage['note'] = main.innerText;
//   }
// }

//Syntax for addEventListener is type, listener(function), and an optional parameter
//
//   window.addEventListener('load', siteLoad, false);
//   button.addEventListener('click', buttonSave, false);
//   main.addEventListener('keydown', keySave, false);
//
// } else if (window.attachEvent) {
//
//   window.attachEvent('onload', siteLoad);
//   button.attachEvent('onclick', buttonSave);
//   main.attachEvent('keydown', keySave);
//
// } else {
//
//   window.onload = siteLoad;
//   button.onclick = buttonSave;
//   main.onkeydown = keySave;
//
// }
