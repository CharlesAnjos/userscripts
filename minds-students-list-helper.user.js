// ==UserScript==
// @name         Minds Students List Helper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Create anchors for class items on Minds' class schedule listing system
// @author       Charles Albert Martins dos Anjos (charles.ccomp@gmail.com)
// @match        *www.managementminds.com.br/alunos
// @icon         https://www.google.com/s2/favicons?sz=64&domain=managementminds.com.br
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //get classes list items
    var listElements;

    function myfunc (zEvent) {
        setTimeout(function(){
        listElements = document.getElementById("lista");
        for (var elementsArray=[], i=listElements.children.length; i;) elementsArray[--i] = listElements.children[i];
        if(elementsArray) {
            elementsArray.forEach(function(studentTR){
                // generate link from the onclick attribute on class items
                var url = "https://www.managementminds.com.br/" + studentTR.attributes.onclick.textContent.split("'")[1];
                console.log(url);
                //clone existing classes list item
                var clonedStudentTR = studentTR.cloneNode(true);
                console.log(clonedStudentTR.children);

                //creating a new anchor element
                var a = document.createElement('a');

                //appending the cloned class to the new anchor element
                a.appendChild(clonedStudentTR);

                //attributing link to the anchor
                a.href = url;

                //attributing anchor to the classes list
                studentTR.parentElement.append(a);

                //hiding the original classes list item
                studentTR.hidden = true;
            })
        };
        },1000);
    }
})();
