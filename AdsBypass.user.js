// ==UserScript==
// @name         AdsBypass
// @namespace    https://github.com/trunghaut1/AdsBypass
// @version      0.3
// @description  Skip ads countdown for some websites
// @author       trunghaut1
// @match        https://1link.vip/*
// @icon         https://raw.githubusercontent.com/trunghaut1/AdsBypass/main/logo.png
// @homepage     https://github.com/trunghaut1/AdsBypass
// @updateURL    https://github.com/trunghaut1/AdsBypass/raw/main/AdsBypass.user.js
// @grant        none
// @encoding     utf-8
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function () {
        var link = document.getElementsByClassName("btn btn-success btn-lg get-link")[0];
        if(link.getAttribute("data-url") != null)
        {
            window.location.href = link.getAttribute("data-url");
        }
    }, 2000);
})();