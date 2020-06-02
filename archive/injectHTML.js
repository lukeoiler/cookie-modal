function injectHTML() {
	// Define Main DIV
	var cookieModalParent = document.createElement('div');
	cookieModalParent.setAttribute('id', 'cookieModalParent');
	// Define Modal DIV
	var cookieModal = document.createElement('div');
	cookieModal.setAttribute('id', 'cookieModal');
	cookieModal.setAttribute('class', 'modal is-active is-clipped');
	// Append Modal DIV to Main DIV	
	cookieModalParent.appendChild(cookieModal);
	// Define Background DIV
	var modalBackground = document.createElement('div');
	modalBackground.setAttribute('class', 'modal-background');
	// Append Background DIV to Modal DIV	
	cookieModal.appendChild(modalBackground);
	// Card Div
	// Define Card DIV
	var modalCard = document.createElement('div');
	modalCard.setAttribute('class', 'modal-card');
	// Append Card DIV to Modal DIV	
	cookieModal.appendChild(modalCard);
	// Define Card Header DIV
	var modalCardHeader = document.createElement('header');
	modalCardHeader.setAttribute('class', 'modal-card-head');
	// Append Card Header DIV to Card DIV	
	modalCard.appendChild(modalCardHeader);
	// Define Card Header Title DIV
	var modalCardHeaderTitle = document.createElement('p');
	modalCardHeaderTitle.setAttribute('class', 'modal-card-title');
	modalCardHeaderTitle.innerText = 'Cookie Einstellungen';
	modalCardHeader.appendChild(modalCardHeaderTitle);
	// Define Card Body DIV
	var modelCardBody = document.createElement('section');
	modelCardBody.setAttribute('class', 'modal-card-body');
	// Append Card Header DIV to Card DIV	
	modalCard.appendChild(modelCardBody);
	// Define Card Body Consent Text DIV
	var modelCardBodyConsentText = document.createElement('p');
	modelCardBodyConsentText.setAttribute('class', 'consent-info-text');
	modelCardBodyConsentText.innerHTML = 'Wir verwenden Cookies, um Ihnen ein optimales Webseiten-Erlebnis zu bieten. Dazu zählen Cookies, die für den Betrieb der Seite und für die Steuerung unserer kommerziellen Unternehmensziele notwendig sind, sowie solche, die lediglich zu anonymen Statistikzwecken, für Komforteinstellungen oder zur Anzeige personalisierter Inhalte genutzt werden. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. Bitte beachten Sie, dass auf Basis Ihrer Einstellungen womöglich nicht mehr alle Funktionalitäten der Seite zur Verfügung stehen. Weitere Informationen finden Sie in unseren <a href="#">Datenschutzhinweisen.</a></p><br>';
	modelCardBody.appendChild(modelCardBodyConsentText);
	// Define Card Body Consent Checkbox DIV
	var modelCardBodyConsentCheckboxDiv = document.createElement('div');
	modelCardBodyConsentCheckboxDiv.setAttribute('class', 'cookie-bar columns is-multiline');
	modelCardBody.appendChild(modelCardBodyConsentCheckboxDiv);
	// Define Card Body Consent Checkbox Columns
	var i;
	var names = ['notwendig', 'statistik', 'komfort', 'personalisierung'];
	for (i = 0, names; i < 4; i++) {
		var name = names[i];
		var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
		// COLUMN BASIC
		var modelCardBodyConsentCheckbox = document.createElement('div');
		modelCardBodyConsentCheckbox.setAttribute('class', 'column');
		modelCardBodyConsentCheckboxDiv.appendChild(modelCardBodyConsentCheckbox);
		// COLUMN CONTENT
		var modelCardBodyConsentCheckboxContent = document.createElement('div');
		modelCardBodyConsentCheckboxContent.setAttribute('class', 'cookie-option field');
		modelCardBodyConsentCheckbox.appendChild(modelCardBodyConsentCheckboxContent);
        console.log('TEST');
        if (i == 0) {
			// COLUMN INPUT
			var modelCardBodyConsentCheckboxInput = document.createElement('input');
			modelCardBodyConsentCheckboxInput.setAttribute('class', 'is-checkradio is-info');
			modelCardBodyConsentCheckboxInput.setAttribute('id', name);
			modelCardBodyConsentCheckboxInput.setAttribute('type', 'checkbox');
			modelCardBodyConsentCheckboxInput.setAttribute('checked', "");
			modelCardBodyConsentCheckboxInput.setAttribute('disabled', "");
			modelCardBodyConsentCheckboxContent.appendChild(modelCardBodyConsentCheckboxInput);
		}
		else {
			// COLUMN INPUT
			var modelCardBodyConsentCheckboxInput = document.createElement('input');
			modelCardBodyConsentCheckboxInput.setAttribute('class', 'is-checkradio is-info');
			modelCardBodyConsentCheckboxInput.setAttribute('id', name);
			modelCardBodyConsentCheckboxInput.setAttribute('type', 'checkbox');
			modelCardBodyConsentCheckboxContent.appendChild(modelCardBodyConsentCheckboxInput);
		}
		// COLUMN LABEL
		var modelCardBodyConsentCheckboxLabel = document.createElement('label');
		modelCardBodyConsentCheckboxLabel.setAttribute('for', names[i]);
		modelCardBodyConsentCheckboxLabel.innerText = nameCapitalized;
		modelCardBodyConsentCheckboxContent.appendChild(modelCardBodyConsentCheckboxLabel);
	}
	//cookieModalParent.innerHTML = '<div id="cookieModal" class="modal is-active is-clipped"> <div class="modal-background"></div> <div class="modal-card"> <header class="modal-card-head"><p class="modal-card-title">Cookie Einstellungen</p></header><section class="modal-card-body"><p class="consent-info-text">Wir verwenden Cookies, um Ihnen ein optimales Webseiten-Erlebnis zu bieten. Dazu zählen Cookies, die für den Betrieb der Seite und für die Steuerung unserer kommerziellen Unternehmensziele notwendig sind, sowie solche, die lediglich zu anonymen Statistikzwecken, für Komforteinstellungen oder zur Anzeige personalisierter Inhalte genutzt werden. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. Bitte beachten Sie, dass auf Basis Ihrer Einstellungen womöglich nicht mehr alle Funktionalitäten der Seite zur Verfügung stehen. Weitere Informationen finden Sie in unseren <a href="#">Datenschutzhinweisen.</a></p><br><div class="cookie-bar columns is-multiline"><div class="column"><div class="cookie-option field"><input class="is-checkradio is-info" id="notwendig" type="checkbox" checked disabled><label for="notwendig">Notwendig</label></div></div><div class="column"><div class="cookie-option field"><input class="is-checkradio is-info" id="statistik" type="checkbox"><label for="statistik">Statistik</label></div></div><div class="column"><div class="cookie-option field"><input class="is-checkradio is-info" id="komfort" type="checkbox" onclick="checkboxCheck(this)"><label for="komfort">Komfort</label></div></div><div class="column"><div class="cookie-option field"><input class="is-checkradio is-info" id="personalisierung" type="checkbox" onclick="checkboxCheck(this)"><label for="personalisierung">Personalisierung</label></div></div></div><div id="checkBoxInfo"></div></section><footer class="modal-card-foot"><div class="columns is-multiline is-mobile"><div class="column"><button id="confirmButton" onclick="setDSGVOCookie()" class="button is-responsive is-fullwidth">Auswahl bestätigen</button></div><div class="column"><button id="allCookieButton" onclick="setAllCookies()" class="button is-warning is-responsive is-fullwidth">Alle Auswählen</button></div></div></footer></div></div>';
	// APPENDING IT TO THE BODY
	document.body.appendChild(cookieModalParent);
}
