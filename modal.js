// Modal Interactions
function setDSGVOCookie() {
   
    var statistik = document.getElementById("statistik").checked;
    var personalisierung = document.getElementById("personalisierung").checked;
    
    setTimeout(function() {

        if(!statistik && !personalisierung) {

            showChild();
        
        } else if(statistik && !personalisierung) {
        
            var cookieName = "DSGVOCookie"; 
            var cookieValue = "_1_2_";
            setPersistentCookie(cookieName, cookieValue, 730);
            CookieEvent(cookieValue);
            closeModal();
        
        } else if(statistik && personalisierung) {
        
            var cookieName = "DSGVOCookie"; 
            var cookieValue = "_1_2_3_";
            setPersistentCookie(cookieName, cookieValue, 730);
            CookieEvent(cookieValue);
            closeModal();
        } 

    }, 200);

}

function setMinimalCookie(){

    var cookieName = "DSGVOCookie"; 
    var cookieValue = "_1_";
    setPersistentCookie(cookieName, cookieValue, 730);
    CookieEvent(cookieValue);
    closeChild();
    closeModal();

}

function setAllCookies() {

    document.getElementById("allCookieButtonParent").classList.add("is-loading");
  
    setTimeout(function() {
        checkBoxes("statistik");
    }, 200);
    setTimeout(function() {
        checkBoxes("personalisierung");
    }, 400);

    setTimeout(function() {
      
    var cookieName = "DSGVOCookie"; 
    var cookieValue = "_1_2_3_";
    setPersistentCookie(cookieName, cookieValue, 730);
    CookieEvent(cookieValue);
    closeChild();
    closeModal();
    closePreview();
    
    }, 800);

}

function setAllCookiesPreview() {

    document.getElementById("allCookieButtonPreview").classList.add("is-loading");
  
    setTimeout(function() {
      
    var cookieName = "DSGVOCookie"; 
    var cookieValue = "_1_2_3_";
    setPersistentCookie(cookieName, cookieValue, 730);
    CookieEvent(cookieValue);
    closeChild();
    closeModal();
    closePreview();
    
    }, 800);

}

// Helper Functions

function CookieEvent(value){
    window.dataLayer.push({
        'event': 'cookie_banner_send',
        'cookieValue': value
        });
}

function checkboxCheck(e) {

    var statistik = document.getElementById("statistik").checked;
    var personalisierung = document.getElementById("personalisierung").checked;

    if (e.id == "personalisierung" && e.checked) {
        document.getElementById("statistik").checked = true;
        document.getElementById("statistik").disabled = true;
        addRow(e.id);
    }
    else {
        document.getElementById("statistik").disabled = false;
    }
}

function addRow(e) {
    const infoText = document.createElement('p');
    const name = e
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

    infoText.className = 'consent-info-text';
    infoText.id = 'checkBoxInfoText'
    infoText.innerHTML = '*Um <b>' + nameCapitalized + "</b> auszuwählen, muss auch Statistik aktiviert werden";
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
    console.log(cookie);
    document.cookie = cookie;
}  

function closePreview() {
    var modal = document.getElementById("cookieModalPreview").getElementsByClassName("modal")[0];
    modal.classList.remove('is-active');
    modal.classList.remove('is-clipped');
}
      
function closeModal() {
    var modal = document.getElementById("cookieModalParent").getElementsByClassName("modal")[0];
    modal.classList.remove('is-active');
    modal.classList.remove('is-clipped');
}

function showModal() {
    var modal = document.getElementById("cookieModalParent").getElementsByClassName("modal")[0];
    modal.classList.add('is-active');
    modal.classList.add('is-clipped');
}

function showChild() {
    var child = document.getElementById("cookieModalChild").getElementsByClassName("modal")[0];
    child.classList.add('is-active');
    child.classList.add('is-clipped');
}

function closeChild() {
    var child = document.getElementById("cookieModalChild").getElementsByClassName("modal")[0];
    child.classList.remove('is-active');
    child.classList.remove('is-clipped');
}

function checkBoxes(id){
    document.getElementById(id).checked = true;
}

function openCookieSettings() {
    closePreview();
    showModal();
}
