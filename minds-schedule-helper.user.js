// ==UserScript==
// @name         Minds Schedule Helper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Create anchors for class items on Minds' class scheduling system
// @author       Charles Albert Martins dos Anjos (charles.ccomp@gmail.com
// @match        https://www.managementminds.com.br/agendamento*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=managementminds.com.br
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //get classes list items
    var classElements = document.getElementsByClassName("text-left border border-white");

    //iterate over said items
    for (var classesArray=[], i=classElements.length; i;) classesArray[--i] = classElements[i];

    //if such items exist
    if(classesArray) {
        classesArray.forEach(function(englishClass){
            // generate link from the onclick attribute on class items
            var url = "https://www.managementminds.com.br/" + englishClass.attributes.onclick.textContent.split("'")[1];

            //clone existing classes list item
            var clonedClass = englishClass.cloneNode(true);

            //creating a new anchor element
            var a = document.createElement('a');

            //appending the cloned class to the new anchor element
            a.appendChild(clonedClass);

            //attributing link to the anchor
            a.href = url;

            //attributing anchor to the classes list
            englishClass.parentElement.append(a);

            //hiding the original classes list item
            englishClass.hidden = true;
        })
    }
    //implantar selectboxes
    //modificar visualização de acordo com selectboxes
    //criar seletor de data para URL
    //persistir data do seletor de URL quando

})();
