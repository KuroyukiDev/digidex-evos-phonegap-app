console.log('display-content.js ran successfully.');

let vars = require('./vars');

const displayAppTitle = () => document.getElementById('app-title').innerHTML = vars.appTitle; 

const displayAppBodyText = () => document.getElementById('app-body-text').innerHTML = vars.appBodyText;

const displayAppAuthor = () => document.getElementById('app-author').innerHTML = `App by: ${vars.appAuthor}`;
//
//const renderBabyList = function () {
//	for (var item in vars.digiList.baby) {
//		var li = document.createElement('li');
//		var a = document.createElement('a');
//		var digiName = item.name;
//		var digiUrl = item.url;
//		a.href = digiUrl;
//		a.textContent = digiName;
//		var newListItem = li.appendChild(a);
//		document.querySelector('#babyList').appendChild(newListItem);
//	}
//};
//
//const renderInTrainingList = function () {
//	for (var item in vars.digiList.inTraining) {
//		var li = document.createElement('li');
//		var a = document.createElement('a');
//		var digiName = item.name;
//		var digiUrl = item.url;
//		a.href = digiUrl;
//		a.textContent = digiName;
//		li.appendChild(a);
//		var newListItem = li.appendChild(a);
//		document.querySelector('#inTrainingList').appendChild(newListItem);
//	}
//};

module.exports = {
	appTitle: displayAppTitle,
	appBodyText: displayAppBodyText,
	appAuthor: displayAppAuthor
}