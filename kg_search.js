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
window.onload = init;

function init() {
      document.getElementById("wordSearchTitle").innerHTML = wordSearchTitle;
      document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordGrid);
      document.getElementById("wordList").innerHTML = showList(wordArray);
      changeColor();
}

function changeColor() {
      var letters = document.querySelectorAll("table#wordSearchTable td");
      for (var i = 0; i < letters.length; i++) {
            letters[i].addEventListener('click', function (e) {
                  if (e.target.className == "normal") {
                        e.target.style.backgroundColor = "rgb(130, 240, 66)";
                  } else if (e.target.className == "wordCell") {
                        e.target.style.backgroundColor = "rgb(240, 66, 95)";
                        document.getElementById("pickedLetters").value =
                  }
            })
      }
      // var normalLetters = document.querySelectorAll("table#wordSearchTable td.normal");
      // document.getElementsByClassName("normal").addEventListener("click", function () {
      //       for (var i = 0; i < normalLetters.length; i++) {
      //             normalLetters[i].style.backgroundColor = "rgb(130, 240, 66)";
      //       }
      // });
      // document.getElementsByClassName("wordCell").addEventListener("click", function () {
      //       for (var i = 0; i < letters.length; i++) {
      //             letters[i].style.backgroundColor = "rgb(240, 66, 95)";
      //       }
      // });
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