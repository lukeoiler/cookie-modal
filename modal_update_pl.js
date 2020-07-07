// Modal Interactions
function setCurrentValues() {
  var currentVal = getCookie('DSGVOCookie');
  if (currentVal === '_1_2_') {
    checkBoxes("statistik");
  } else if (currentVal === '_1_2_3_') {
    checkBoxes("statistik");
    checkBoxes("personalisierung");
  }
}

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
            closeModal();
        
        } else if(statistik && personalisierung) {
        
            var cookieName = "DSGVOCookie"; 
            var cookieValue = "_1_2_3_";
            setPersistentCookie(cookieName, cookieValue, 730);
            closeModal();
        } 

    }, 200);

}

function setMinimalCookie(){

    var cookieName = "DSGVOCookie"; 
    var cookieValue = "_1_";
    setPersistentCookie(cookieName, cookieValue, 730);
    closeChild();
    closeModal();

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
    var cookieValue = "_1_2_3_";
    setPersistentCookie(cookieName, cookieValue, 730);
    closeChild();
    closeModal();
    
    }, 800);

}

// Helper Functions

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
      
function closeModal() {
    var modal = document.getElementById("cookieModalParent").getElementsByClassName("modal")[0];
    modal.classList.remove('is-active');
    modal.classList.remove('is-clipped');
    var modalParent = document.getElementById("cookieModalParent");
    modalParent.remove();
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
    var modalChild = document.getElementById("cookieModalChild");
    modalChild.remove();
}

function checkBoxes(id){
	document.getElementById(id).checked = true;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
