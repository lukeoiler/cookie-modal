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
    var modal = document.getElementById("myModal");
    //modal.classList.remove('is-active');
    modal.style.display = "none";
}
    
function setDSGVOCookie() {
    
    var statistik = document.getElementById("statistik").checked;
    var komfort = document.getElementById("komfort").checked;
    var personalisierung = document.getElementById("personalisierung").checked;
    
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

}

function checkBoxes(id){
	document.getElementById(id).checked = true;
}

function setAllCookies() {
  
    setTimeout(checkBoxes("statistik"), 500);
    setTimeout(checkBoxes("komfort"), 500);
      setTimeout(checkBoxes("personalisierung"), 500);

      setTimeout(function() {
      
    var cookieName = "DSGVOCookie"; 
    var cookieValue = ",1,2,3,4,";
    setPersistentCookie(cookieName, cookieValue, 730);
      closeModal();
    
    }, 1500);

}