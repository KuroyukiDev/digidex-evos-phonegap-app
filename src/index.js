const displayContent = require('./display-content');



document.onload = function () {
	displayContent.appTitle();
	displayContent.appBodyText();
	displayContent.appAuthor();
	
	displayContent.renderBabyList();
	displayContent.renderInTrainingList();



}