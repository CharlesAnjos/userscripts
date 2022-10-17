// ==UserScript==
// @name         Minds Schedule List Helper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Create anchors for class items on Minds' class schedule listing system
// @author       Charles Albert Martins dos Anjos (charles.ccomp@gmail.com)
// @match        *www.managementminds.com.br/agendamento/lista
// @icon         https://www.google.com/s2/favicons?sz=64&domain=managementminds.com.br
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //get classes list items
    var btnPesquisar = document.getElementById("pesquisar");
    var listElements;

    function myfunc (zEvent) {
        setTimeout(function(){
        listElements = document.getElementById("lista");
        for (var elementsArray=[], i=listElements.children.length; i;) elementsArray[--i] = listElements.children[i];
        if(elementsArray) {
            elementsArray.forEach(function(englishClass){
                // generate link from the onclick attribute on class items
                var url = "https://www.managementminds.com.br/" + englishClass.attributes.onclick.textContent.split("'")[1];
                console.log(url);
                //clone existing classes list item
                var clonedClass = englishClass.cloneNode(true);
                console.log(clonedClass.children);

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
        };
        },1000);
    }

    var myDiv = document.querySelector ("#pesquisar");
    if (myDiv) {
        myDiv.addEventListener ("click", myfunc , false);
    };
    //implantar selectboxes
    //modificar visualização de acordo com selectboxes
    //criar seletor de data para URL
    //persistir data do seletor de URL quando

})();
