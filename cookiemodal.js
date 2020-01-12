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

        if(statistik && !komfort && !personalisierung) {
        
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
  
    setTimeout(checkBoxes("statistik"), 200);
    setTimeout(checkBoxes("komfort"), 400);
      setTimeout(checkBoxes("personalisierung"), 600);

      setTimeout(function() {
      
    var cookieName = "DSGVOCookie"; 
    var cookieValue = ",1,2,3,4,";
    setPersistentCookie(cookieName, cookieValue, 730);
      closeModal();
    
    }, 800);

}