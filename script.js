var hints = [
	'Напиши кому-то из ребят, Славе или Диме',
	'Спроси как прошли выходные',
	'Проверь, если у него есть аккаунта в github',
	'Может он выставил что-то интересное в facebook',
	'Есть контакты, с которыми нужно поговорить сегодня?'
];
var needed_per_day = 10; 
var contacts = chrome.storage.local['contacts'] || 0;
var deals = chrome.storage.local['deals'] || 0;

contacts = parseInt(contacts, 10);
deals = parseInt(deals, 10);

function updateBar() {
	var contacts_heigh = (contacts * 300) / needed_per_day + 'px';
	var deals_heigh = (deals * 300) / needed_per_day + 'px';

	document.getElementsByClassName("contacts")[0].style.height = contacts_heigh;	
	document.getElementsByClassName("deals")[0].style.height = deals_heigh;

	var contacts_perf = parseFloat((contacts / needed_per_day).toFixed(1));
	var deals_perf = parseFloat((deals / (needed_per_day / 2)).toFixed(1)); // aim for 50% efficiency

	var text = "Нужно написать всего нескольким людям. Ты сможешь!";
	if (contacts_perf > 0) text = "Первый позади, он самый сложный!";
	if (contacts_perf > 0.1) text = "Ты уже начал, дальше легче!";
	if (contacts_perf > 0.4) text = "Половина есть! Только не останавливайся!";
	if (contacts_perf > 0.7) text = "Еще 2 и готово!";
	if (contacts_perf > 0.8) text = "Напиши любому и дело в шляпе!";
	if (contacts_perf > 0.9) text = "Красава! Можешь сделать перерыв!";

	document.getElementById('goal').innerText = text;
}

function showHint() {
	var rand = Math.floor(Math.random() * hints.length);
	document.getElementById('hint').innerText = hints[rand];
}
showHint();
setInterval(showHint, 30000);

updateBar();

document.getElementById("deal").addEventListener('click', function() {
	deals++;
	chrome.storage.local['deals'] = deals;
	updateBar();
});

document.getElementById("contact").addEventListener('click', function() {
	contacts++;
	chrome.storage.local['contacts'] = contacts;
	updateBar();
});