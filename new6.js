function checkboxCheck(e) {

    var statistik = document.getElementById("statistik").checked;
    var komfort = document.getElementById("komfort").checked;
    var personalisierung = document.getElementById("personalisierung").checked;

    if (e.id == "komfort" && e.checked && !statistik) {
        document.getElementById("statistik").checked = true;
        addRow(e.id);
    } else if (e.id == "personalisierung" && e.checked && !komfort && !statistik) {
        document.getElementById("statistik").checked = true;
        document.getElementById("komfort").checked = true;
        addRow(e.id);
    } else if (e.id == "personalisierung" && e.checked && komfort && !statistik) {
        document.getElementById("statistik").checked = true;
        document.getElementById("komfort").checked = true;
        addRow(e.id);
    } else if (e.id == "personalisierung" && e.checked && !komfort && statistik) {
        document.getElementById("statistik").checked = true;
        document.getElementById("komfort").checked = true;
        addRow(e.id);
    }
}

function addRow(e) {
    const infoText = document.createElement('p');
    const name = e
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

    infoText.className = 'consent-info-text';
    infoText.id = 'checkBoxInfoText'
    infoText.innerHTML = '*Um <b>' + nameCapitalized + "</b> auszuwählen, müssen auch die vorherigen Cookie-Gruppen aktiviert werden";
    document.getElementById('checkBoxInfo').appendChild(infoText);

    setTimeout(function() {
        removeRow();
    }, 3750);

  }
  
function removeRow() {
    document.getElementById('checkBoxInfoText').remove();
}

function setPersistentCookie(name, value, expires) {

    var cookie = name + "=" + value + "; path=/; domain=." + location.hostname.replace(/^www\./i, "");
    if (typeof expires !== "undefined") {

    var now = new Date();
    now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
    cookie += "; expires=" + now.toUTCString();

    }
    document.cookie = cookie;
}  
      
function closeModal() {
    var modal = document.getElementById("cookieModal");
    modal.classList.remove('is-active');
    modal.classList.remove('is-clipped');
    //modal.style.display = "none";
}
    
function setDSGVOCookie() {

    document.getElementById("confirmButton").classList.add("is-loading");
    
    var statistik = document.getElementById("statistik").checked;
    var komfort = document.getElementById("komfort").checked;
    var personalisierung = document.getElementById("personalisierung").checked;
    
    setTimeout(function() {

        if(!statistik && !komfort && !personalisierung) {
        
            var cookieName = "DSGVOCookie"; 
            var cookieValue = ",1,";
            setPersistentCookie(cookieName, cookieValue, 730);
                closeModal();
        
        } else if(statistik && !komfort && !personalisierung) {
        
            var cookieName = "DSGVOCookie"; 
            var cookieValue = ",1,2,";
            setPersistentCookie(cookieName, cookieValue, 730);
                closeModal();
        
        } else if(statistik && komfort && !personalisierung) {
        
                var cookieName = "DSGVOCookie"; 
            var cookieValue = ",1,2,3,";
            setPersistentCookie(cookieName, cookieValue, 730);
                closeModal();
        
        } else if(statistik && komfort && personalisierung) {
        
                var cookieName = "DSGVOCookie"; 
            var cookieValue = ",1,2,3,4,";
            setPersistentCookie(cookieName, cookieValue, 730);
                closeModal(); 
        }

    }, 200);

}

function checkBoxes(id){
	document.getElementById(id).checked = true;
}

function setAllCookies() {

    document.getElementById("allCookieButton").classList.add("is-loading");
  
    setTimeout(function() {
        checkBoxes("statistik");
    }, 200);
    setTimeout(function() {
        checkBoxes("komfort");
    }, 400);
    setTimeout(function() {
        checkBoxes("personalisierung");
    }, 600);

    setTimeout(function() {
      
    var cookieName = "DSGVOCookie"; 
    var cookieValue = ",1,2,3,4,";
    setPersistentCookie(cookieName, cookieValue, 730);
      closeModal();
    
    }, 1000);

}

function injectCSS(color) {
	var style = document.createElement('style');
	  style.innerHTML = `
	/*! CSS Used from: https://www.turn-on.de/css/main.min.css?663664 */
	#cookieModalParent a{text-decoration:underline;}
	#cookieModalParent button,#cookieModalParent input{overflow:visible;}
	#cookieModalParent *{box-sizing:border-box;}
	#cookieModalParent footer,#cookieModalParent header,#cookieModalParent section{display:block;}
	#cookieModalParent a{background-color:transparent;-webkit-text-decoration-skip:objects;}
	#cookieModalParent a:active,#cookieModalParent a:hover{outline-width:0;}
	#cookieModalParent button,#cookieModalParent input{font:inherit;margin:0;}
	#cookieModalParent button{text-transform:none;}
	#cookieModalParent button{-webkit-appearance:button;}
	#cookieModalParent button::-moz-focus-inner{border-style:none;padding:0;}
	#cookieModalParent button:-moz-focusring{outline:ButtonText dotted 1px;}
	#cookieModalParent [type=checkbox]{box-sizing:border-box;padding:0;}
	#cookieModalParent ::-webkit-input-placeholder{color:inherit;opacity:.54;}
	#cookieModalParent *{-webkit-font-smoothing:antialiased;}
	/*! CSS Used from: https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css */
	#cookieModalParent .button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
	#cookieModalParent .button.is-loading::after{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #333333;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:"";display:block;height:1em;position:relative;width:1em;}
	#cookieModalParent .modal,#cookieModalParent .modal-background{bottom:0;left:0;position:absolute;right:0;top:0;}
	#cookieModalParent .button{-moz-appearance:none;-webkit-appearance:none;align-items:center;border:1px solid transparent;border-radius:4px;box-shadow:none;display:inline-flex;font-size:1em;height:2.5em;justify-content:flex-start;line-height:1.5;padding-bottom:calc(.5em - 1px);padding-left:calc(.75em - 1px);padding-right:calc(.75em - 1px);padding-top:calc(.5em - 1px);position:relative;vertical-align:top;}
	#cookieModalParent .button:active,#cookieModalParent .button:focus{outline:0;}
	#cookieModalParent p{margin:0;padding:0;}
	#cookieModalParent button,#cookieModalParent input{margin:0;}
	#cookieModalParent *,#cookieModalParent ::after,#cookieModalParent ::before{box-sizing:inherit;}
	#cookieModalParent footer,#cookieModalParent header,#cookieModalParent section{display:block;}
	#cookieModalParent button,#cookieModalParent input{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;}
	#cookieModalParent a{color:#3273dc;cursor:pointer;text-decoration:none;}
	#cookieModalParent a:hover{color:#363636;}
	#cookieModalParent input[type=checkbox]{vertical-align:baseline;}
	#cookieModalParent .is-clipped{overflow:hidden!important;}
	#cookieModalParent .button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;justify-content:center;padding-bottom:calc(.5em - 1px);padding-left:1em;padding-right:1em;padding-top:calc(.5em - 1px);text-align:center;white-space:nowrap;}
	#cookieModalParent .button:hover{border-color:#b5b5b5;color:#363636;}
	#cookieModalParent .button:focus{border-color:#3273dc;color:#363636;}
	#cookieModalParent .button:active{border-color:#4a4a4a;color:#363636;}
	#cookieModalParent .button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7);}
	#cookieModalParent .button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7);}
	#cookieModalParent .button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7);}
	#cookieModalParent .button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7);}
	#cookieModalParent .button.is-fullwidth{display:flex;width:100%;}
	#cookieModalParent .button.is-loading{color:transparent!important;pointer-events:none;}
	#cookieModalParent .button.is-loading::after{position:absolute;left:calc(50% - (1em / 2));top:calc(50% - (1em / 2));position:absolute!important;}
	#cookieModalParent .modal{align-items:center;display:none;flex-direction:column;justify-content:center;overflow:hidden;position:fixed;z-index:40;}
	#cookieModalParent .modal.is-active{display:flex;}
	#cookieModalParent .modal-background{background-color:rgba(10,10,10,.86);}
	#cookieModalParent .modal-card{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%;}
	@media screen and (min-width:769px),print{
	  #cookieModalParent .modal-card{margin:0 auto;max-height:calc(100vh - 40px);width:640px;}
	}
	#cookieModalParent .modal-card{display:flex;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible;}
	#cookieModalParent .modal-card-foot,#cookieModalParent .modal-card-head{align-items:center;background-color:#f5f5f5;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative;}
	#cookieModalParent .modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px;}
	#cookieModalParent .modal-card-title{color:#363636;flex-grow:1;flex-shrink:0;font-size:1.5em;line-height:1;}
	#cookieModalParent .modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb;}
	#cookieModalParent .modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;flex-grow:1;flex-shrink:1;overflow:auto;padding:20px;}
	#cookieModalParent .column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;padding:.75em;}
	#cookieModalParent .columns{margin-left:-.75em;margin-right:-.75em;margin-top:-.75em;}
	#cookieModalParent .columns:last-child{margin-bottom:-.75em;}
	#cookieModalParent .columns.is-mobile{display:flex;}
	#cookieModalParent .columns.is-multiline{flex-wrap:wrap;}
	@media screen and (min-width:769px),print{
	  #cookieModalParent .columns:not(.is-desktop){display:flex;}
	}
	/*! CSS Used from: https://cdn.jsdelivr.net/npm/bulma-extensions@6.2.7/dist/css/bulma-extensions.min.css */
	#cookieModalParent .is-checkradio[type=checkbox]{outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;position:absolute;opacity:0;}
	#cookieModalParent .is-checkradio[type=checkbox]+label{position:relative;display:initial;cursor:pointer;vertical-align:middle;margin:.5em;padding:.2em .5em .2em 0;border-radius:4px;}
	#cookieModalParent .is-checkradio[type=checkbox]+label:first-of-type{margin-left:0;}
	#cookieModalParent .is-checkradio[type=checkbox]+label:hover::before,#cookieModalParent .is-checkradio[type=checkbox]+label:hover:before{-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:hover-color;animation-name:hover-color;}
	#cookieModalParent .is-checkradio[type=checkbox]+label::before,#cookieModalParent .is-checkradio[type=checkbox]+label:before{position:absolute;left:0;top:0;content:'';border:.1em solid #dbdbdb;}
	#cookieModalParent .is-checkradio[type=checkbox]+label::after,#cookieModalParent .is-checkradio[type=checkbox]+label:after{position:absolute;display:none;content:'';top:0;}
	#cookieModalParent .is-checkradio[type=checkbox]:focus+label::before,#cookieModalParent .is-checkradio[type=checkbox]:focus+label:before{outline:1px dotted #b5b5b5;}
	#cookieModalParent .is-checkradio[type=checkbox]:hover:not([disabled])+label::before,#cookieModalParent .is-checkradio[type=checkbox]:hover:not([disabled])+label:before{border-color:#00d1b2!important;}
	#cookieModalParent .is-checkradio[type=checkbox]:checked+label::before,#cookieModalParent .is-checkradio[type=checkbox]:checked+label:before{border:.1em solid #dbdbdb;}
	#cookieModalParent .is-checkradio[type=checkbox]:checked[disabled]{cursor:not-allowed;}
	#cookieModalParent .is-checkradio[type=checkbox]:checked[disabled]+label{opacity:.5;}
	#cookieModalParent .is-checkradio[type=checkbox]:checked+label::before,#cookieModalParent .is-checkradio[type=checkbox]:checked+label:before{-webkit-animation-name:none;animation-name:none;}
	#cookieModalParent .is-checkradio[type=checkbox]:checked+label::after,#cookieModalParent .is-checkradio[type=checkbox]:checked+label:after{display:inline-block;}
	#cookieModalParent .is-checkradio[type=checkbox][disabled]{cursor:not-allowed;}
	#cookieModalParent .is-checkradio[type=checkbox][disabled]+label{opacity:.5;cursor:not-allowed;}
	#cookieModalParent .is-checkradio[type=checkbox][disabled]+label::after,#cookieModalParent .is-checkradio[type=checkbox][disabled]+label::before,#cookieModalParent .is-checkradio[type=checkbox][disabled]+label:after,#cookieModalParent .is-checkradio[type=checkbox][disabled]+label:before,#cookieModalParent .is-checkradio[type=checkbox][disabled]+label:hover{cursor:not-allowed;}
	#cookieModalParent .is-checkradio[type=checkbox][disabled]:hover{cursor:not-allowed;}
	#cookieModalParent .is-checkradio[type=checkbox][disabled]:hover::before,#cookieModalParent .is-checkradio[type=checkbox][disabled]:hover:before{-webkit-animation-name:none;animation-name:none;}
	#cookieModalParent .is-checkradio[type=checkbox][disabled]::before,#cookieModalParent .is-checkradio[type=checkbox][disabled]:before{cursor:not-allowed;}
	#cookieModalParent .is-checkradio[type=checkbox][disabled]::after,#cookieModalParent .is-checkradio[type=checkbox][disabled]:after{cursor:not-allowed;}
	#cookieModalParent .is-checkradio[type=checkbox]+label::before,#cookieModalParent .is-checkradio[type=checkbox]+label:before{border-radius:4px;}
	#cookieModalParent .is-checkradio[type=checkbox]+label::after,#cookieModalParent .is-checkradio[type=checkbox]+label:after{box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:.1em;border-style:solid;border-color:#00d1b2;border-top:0;border-left:0;}
	#cookieModalParent .is-checkradio[type=checkbox]+label{font-size:1em;padding-left:2em;}
	#cookieModalParent .is-checkradio[type=checkbox]+label::before,#cookieModalParent .is-checkradio[type=checkbox]+label:before{width:1.5em;height:1.5em;}
	#cookieModalParent .is-checkradio[type=checkbox]+label::after,#cookieModalParent .is-checkradio[type=checkbox]+label:after{width:.375em;height:.6em;top:.405em;left:.6em;}
	#cookieModalParent .is-checkradio[type=checkbox].is-info:hover:not([disabled])+label::before,#cookieModalParent .is-checkradio[type=checkbox].is-info:hover:not([disabled])+label:before{border-color:#209cee!important;}
	#cookieModalParent .is-checkradio[type=checkbox].is-info:checked+label::after,#cookieModalParent .is-checkradio[type=checkbox].is-info:checked+label:after{border-color:#209cee!important;}
	/*! CSS Used from: https://cdn.jsdelivr.net/gh/lukeoiler/cookie-modal@1.0.1/cookiemodal.css */
	#cookieModalParent .modal-card-head{border-radius:0;}
	#cookieModalParent .consent-info-text{font-size:small;}
	#cookieModalParent .modal-card-body{padding-bottom:15px;}
	#cookieModalParent .modal-card-foot{justify-content:flex-start;border-radius:0;}
	@media (min-width: 1281px){
	#cookieModalParent .modal-card{max-width:900px;min-width:700px;}
	#cookieModalParent .column{flex-basis:auto;}
	}
	@media (min-width: 1025px) and (max-width: 1280px){
	#cookieModalParent .modal-card{max-width:900px;min-width:700px;}
	#cookieModalParent .column{flex-basis:auto;}
	}
	@media (min-width: 768px) and (max-width: 1024px){
	#cookieModalParent .modal-card{max-width:90%;}
	#cookieModalParent .cookie-bar{display:flex;}
	#cookieModalParent .column{flex-basis:auto;}
	}
	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape){
	#cookieModalParent .cookie-bar{display:flex;}
	#cookieModalParent .column{flex-basis:auto;}
	}
	@media (min-width: 481px) and (max-width: 767px){
	#cookieModalParent .modal-card{max-width:90%;}
	#cookieModalParent .cookie-bar{display:flex;}
	#cookieModalParent .column{flex-basis:auto;}
	}
	@media (min-width: 320px) and (max-width: 480px){
	#cookieModalParent .modal-card{max-width:90%;min-height:400px;}
	}

	#cookieModalParent {
	  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
	  font-size: 16px;
	  line-height: 1.88;
	  color: ` + color + `;
	}
	/*! CSS Used keyframes */
	@-webkit-keyframes spinAround{from{transform:rotate(0);}to{transform:rotate(359deg);}}
	@keyframes spinAround{from{transform:rotate(0);}to{transform:rotate(359deg);}}
	@-webkit-keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0);}to{-webkit-transform:rotate(359deg);transform:rotate(359deg);}}
	@keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0);}to{-webkit-transform:rotate(359deg);transform:rotate(359deg);}}
	  `;
  	document.head.appendChild(style);
}

var div = document.createElement('div');
div.setAttribute('id', 'cookieModalParent');
div.innerHTML = '<div id="cookieModal" class="modal is-active is-clipped"> <div class="modal-background"></div> <div class="modal-card"> <header class="modal-card-head"><p class="modal-card-title">Cookie Einstellungen</p></header><section class="modal-card-body"><p class="consent-info-text">Wir verwenden Cookies, um Ihnen ein optimales Webseiten-Erlebnis zu bieten. Dazu zählen Cookies, die für den Betrieb der Seite und für die Steuerung unserer kommerziellen Unternehmensziele notwendig sind, sowie solche, die lediglich zu anonymen Statistikzwecken, für Komforteinstellungen oder zur Anzeige personalisierter Inhalte genutzt werden. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. Bitte beachten Sie, dass auf Basis Ihrer Einstellungen womöglich nicht mehr alle Funktionalitäten der Seite zur Verfügung stehen. Weitere Informationen finden Sie in unseren <a href="#">Datenschutzhinweisen.</a></p><br><div class="cookie-bar columns is-multiline"><div class="column"><div class="cookie-option field"><input class="is-checkradio is-info" id="notwendig" type="checkbox" checked disabled><label for="notwendig">Notwendig</label></div></div><div class="column"><div class="cookie-option field"><input class="is-checkradio is-info" id="statistik" type="checkbox"><label for="statistik">Statistik</label></div></div><div class="column"><div class="cookie-option field"><input class="is-checkradio is-info" id="komfort" type="checkbox" onclick="checkboxCheck(this)"><label for="komfort">Komfort</label></div></div><div class="column"><div class="cookie-option field"><input class="is-checkradio is-info" id="personalisierung" type="checkbox" onclick="checkboxCheck(this)"><label for="personalisierung">Personalisierung</label></div></div></div><div id="checkBoxInfo"></div></section><footer class="modal-card-foot"><div class="columns is-multiline is-mobile"><div class="column"><button id="confirmButton" onclick="setDSGVOCookie()" class="button is-responsive is-fullwidth">Auswahl bestätigen</button></div><div class="column"><button id="allCookieButton" onclick="setAllCookies()" class="button is-warning is-responsive is-fullwidth">Alle Auswählen</button></div></div></footer></div></div>';
document.body.appendChild(div);
