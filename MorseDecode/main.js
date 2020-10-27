"use strict"

let finalString = "";
let numberOfLetters;
let showOrNo; 
let arrayWithLetters = [];
let allLetters = document.querySelectorAll(".checkBoxLet");
let finInput = document.querySelector(".output");


function searchLetters() {
  let j = 0;
  for (let i = 0; i < 32; i++) {
    if (allLetters[i].checked == true) {
      arrayWithLetters[j] = allLetters[i];
      j++;
    } else {
      continue;
    }
  }
}

function howManyLetters() {
  numberOfLetters = document.querySelector(".numInput").value;
  showOrNo = document.querySelector(".ShowOutput").checked; 
}

function generate() {
  finalString = "";
  searchLetters();
  howManyLetters();
  for (let i = 0; i < numberOfLetters; i++) {
    let temp = Math.floor(Math.random() * Math.floor(arrayWithLetters.length));
    finalString += arrayWithLetters[temp].value;
    finalString += " ";
  }
  if (showOrNo == true) {
    finInput.value = finalString;
    finInput.select();
    finInput.setSelectionRange(0, 99999); 
    document.execCommand("copy");
  } else {
    finInput.value = finalString;
    finInput.select();
    finInput.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    finInput.value = "скопировано в буфер";
  }
}