// Modal Interactions

function setDSGVOCookie() {

    document.getElementById("confirmButton").classList.add("is-loading");
    
    var statistik = document.getElementById("statistik").checked;
    var personalisierung = document.getElementById("personalisierung").checked;
    
    setTimeout(function() {

        if(!statistik && !personalisierung) {
        
            var cookieName = "DSGVOCookie"; 
            var cookieValue = ",1,";
            setPersistentCookie(cookieName, cookieValue, 730);
                closeModal();
        
        } else if(statistik && !personalisierung) {
        
            var cookieName = "DSGVOCookie"; 
            var cookieValue = ",1,2,";
            setPersistentCookie(cookieName, cookieValue, 730);
                closeModal();
        
        } else if(statistik && personalisierung) {
        
                var cookieName = "DSGVOCookie"; 
            var cookieValue = ",1,2,3,";
            setPersistentCookie(cookieName, cookieValue, 730);
                closeModal();
        } 

    }, 200);

}

function setAllCookies() {

    document.getElementById("allCookieButton").classList.add("is-loading");
  
    setTimeout(function() {
        checkBoxes("statistik");
    }, 200);
    setTimeout(function() {
        checkBoxes("personalisierung");
    }, 400);

    setTimeout(function() {
      
    var cookieName = "DSGVOCookie"; 
    var cookieValue = ",1,2,3,";
    setPersistentCookie(cookieName, cookieValue, 730);
      closeModal();
    
    }, 800);

}

// Helper Functions

function checkboxCheck(e) {

    var statistik = document.getElementById("statistik").checked;
    var personalisierung = document.getElementById("personalisierung").checked;

    if (e.id == "personalisierung" && e.checked && !statistik) {
        document.getElementById("statistik").checked = true;
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
    

function checkBoxes(id){
	document.getElementById(id).checked = true;
}