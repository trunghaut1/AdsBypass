// ==UserScript==
// @name         AdsBypass
// @namespace    https://github.com/trunghaut1/AdsBypass
// @version      0.4
// @description  Skip ads countdown for some websites
// @author       trunghaut1
// @icon         https://raw.githubusercontent.com/trunghaut1/AdsBypass/main/logo.png
// @homepage     https://github.com/trunghaut1/AdsBypass
// @updateURL    https://github.com/trunghaut1/AdsBypass/raw/main/AdsBypass.user.js
// @grant        none
// @encoding     utf-8
// @include https://*/*
// ==/UserScript==

(function() {
    'use strict';
    var check1s = document.getElementsByClassName("site-logo")[0].href;
    if (check1s == 'https://link1s.com/')
    {
        if(document.forms[0] === undefined)
        {
            if(document.getElementById("link1s") != null)
                document.getElementById("link1s").click();
            else
              link1sgo();
        }
        else
        {
            document.forms[0].submit();
        }
    }
})();