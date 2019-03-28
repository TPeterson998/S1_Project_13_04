"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 4

   Wordsearch Game Script
   
   Filename: kg_search.js
   Author: Trent Peterson
   Date:   3.25.19
   
   
   Function List
   
   function drawWordSearch(letters, words)
      Returns the HTML code for a word search table based on the entries
      in the letters array and the location of the words
      in the words array
      
   showList(list)
      Returns the HTML for code for an unordered list of words based
      on the items in the list array

*/
// this loads the init function on load
window.onload = init;
// this is nessesary for the code to typed in the text box
var letterValue = "";

function init() {
      //these three document.'s set the title, wordsearch, and letter box up
      document.getElementById("wordSearchTitle").innerHTML = wordSearchTitle;
      document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordGrid);
      document.getElementById("wordList").innerHTML = showList(wordArray);
      //this is the functions I am calling in
      changeColor();
      crossOutWords();
}

function changeColor() {
      //This sets up a like array with all of the table data cells
      var letters = document.querySelectorAll("table#wordSearchTable td");
      //This runs through the like array created above 
      for (var i = 0; i < letters.length; i++) {
            //this makes it so when you click on one of the td's it checks if the class is normal or wordcell and then changes its background color accordingly
            letters[i].addEventListener('click', function (e) {

                  if (e.target.className == "normal") {
                        e.target.style.backgroundColor = "rgb(130, 240, 66)";
                  } else if (e.target.className == "wordCell") {
                        e.target.style.backgroundColor = "rgb(240, 66, 95)";
                        //This is what akes the letters be typed
                        //This grabs the text content of the clicked letter and adds it to the text box only if it is part of the word
                        letterValue += e.target.textContent;
                        document.getElementById("pickedLetters").value = letterValue;
                  }
            });
      }
}
//This function makes it so that when you click on one of the word list words it will change to a lighter color to mark that it has been found
function crossOutWords() {
      var words = document.querySelectorAll("ul#wordSearchList li");
      for (var i = 0; i < words.length; i++) {
            words[i].addEventListener('click', function (e) {
                  e.target.style.color = "rgb(0, 0, 0, .5)"
                  //This makes it so when you cross out a word what you wrote disappears
                  letterValue = "";
                  document.getElementById("pickedLetters").value = letterValue;
            })
      }
}


/*============================================================*/

function drawWordSearch(letters, words) {
      var rowSize = letters.length;
      var colSize = letters[0].length;

      var htmlCode = "<table id='wordSearchTable'>";
      htmlCode += "<caption>Word Search</caption>";

      for (var i = 0; i < rowSize; i++) {
            htmlCode += "<tr>";

            for (var j = 0; j < colSize; j++) {
                  if (words[i][j] == " ") {
                        htmlCode += "<td class='normal'>";
                  } else {
                        htmlCode += "<td class='wordCell'>";
                  }
                  htmlCode += letters[i][j];
                  htmlCode += "</td>";
            }

            htmlCode += "</tr>";
      }
      htmlCode += "</table>";

      return htmlCode;
}

function showList(list) {
      var htmlCode = "<ul id='wordSearchList'>";

      for (var i = 0; i < list.length; i++) {
            htmlCode += "<li>" + list[i] + "</li>";
      }

      htmlCode += "</ul>";

      return htmlCode;
}