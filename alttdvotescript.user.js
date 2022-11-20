// ==UserScript==
// @name         Altitude VoterScript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Open all vote sites
// @author       LeiAdair
// @match        https://alttd.com/vote
// @icon         https://www.google.com/s2/favicons?sz=64&domain=alttd.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.open("https://minecraftservers.org/vote/284208", '_blank').focus();
window.open("http://minecraft-server-list.com/server/298238/vote/", '_blank').focus();
window.open("https://minecraft-mp.com/server/98955/vote/", '_blank').focus();
window.open("https://www.planetminecraft.com/server/alttd/vote/", '_blank').focus();
window.open("https://minecraft-server.net/vote/Altitude/", '_blank').focus();
window.open("https://topminecraftservers.org/vote/4906", '_blank').focus();
window.close()
})();