var skills = {
    "mySQL" : "Database",
    "PostgreSQL" : "Database",
    "Oracle DB" : "Database",
    "SQL" : "Database",
    "PL/SQL" : "Database",
    "Microsoft SQL Server" : "Database",
    "MariaDB" : "Database",
    "T-SQL" : "Database",
    "MongoDB": "NoSQL Database",
    "Redis" : "Database framework",
    "JavaScript" : "Front-end language",
    "ReactJs": "Front-end, JavaScript, Framework",
    "Vuejs": "Front-end, JavaScript, Framework",
    "Angular 1 (ng)": "Front-end, JavaScript, Framework",
    "Angular 2/4": "Front-end, JavaScript, Framework",
    "Backbone": "Front-end, JavaScript, Framework",
    "Knockout": "Front-end, JavaScript, Framework",
    "ExtJs": "Front-end, JavaScript, Framework",
    "Ember" : "Front-end, JavaScript, Framework",
    "D3" : "Front-end, JavaScript, Librarie",
    "Redux": "Front-end, JavaScript, Librarie",
    "jQuery": "Front-end, JavaScript, Librarie",
    "TypeScript" : "Front-end, JavaScript, Compiler",
    "CoffeeScript" : "Front-end, JavaScript, Compiler",
    "ES5" : "Front-end, JavaScript, Specifications",
    "ES6" : "Front-end, JavaScript, Specifications",
    "ES Next" : "Front-end, JavaScript, Specifications",
    "Ajax" : "Front-end, JavaScript, Technology",
    "Brackets" : "Front-end, JavaScript, Templating engine",
    "Handlebars" : "Front-end, JavaScript, Templating engine",
    "Sass" : "Front-end, CSS Preprocessor",
    "Less" : "Front-end, CSS Preprocessor",
    "Scss" : "Front-end, CSS Preprocessor",
    "Stylus" : "Front-end, CSS Preprocessor",
    "PostCSS" : "Front-end, CSS Preprocessor",
    "CSS, CSS3" : "Front-end, CSS",
    "HTML, HTML5" : "Front-end, HTML",
    "webpack" : "Front-end Pjrect builder",
    "gulp" : "Front-end Pjrect builder",
    "grunt" : "Front-end Pjrect builder",
    "npm" : "Front-end, package control",
    "yarn" : "Front-end, package control",
    "bower" : "Front-end, package control",
    "compass" : "Front-end, package control",
    "Java" : "Back-end language",
    "Spring": "Back-end Java Framework",
    "Struts": "Back-end Java Framework",
    "Hibernate": "Back-end Java Framework",
    "JSF": "Back-end Java Framework",
    "Grails": "Back-end Java Framework",
    "Spark (microframework)": "Back-end Java Framework",
    "Junit": "Back-end Java Librarie",
    "SLF4J": "Back-end Java Librarie",
    "Google Guava": "Back-end Java Librarie",
    "Express": "Back-end JavaScript Framework",
    "Meteor": "Back-end JavaScript Framework",
    "NodeJs": "Back-end JavaScript",
    "C#": "Back-end language",
    ".NET": "Back-end, C# Framework",
    "LINQ": "Back-end, C# Librarie",
    "NHibernate": "Back-end, C# Librarie",
    "Visual Studio": "Back-end, C# Tools",
    "Python": "Back-end programming language",
    "Django": "Back-end, Python framework",
    "Tornado": "Back-end, Python framework",
    "Flask": "Back-end, Python framework",
    "Requests" : "Back-end, Python librarie",
    "Scrapy" : "Back-end, Python librarie",
    "SQLAlchemy" : "Back-end, Python librarie",
    "Numpy" : "Back-end, Python librarie",
    "Ruby" : "Back-end programming language",
    "Ruby on Rails" : "Back-end, Ruby framework",
    "Sinatra" : "Back-end, Ruby framework",
    "Rake" : "Back-end, Ruby libarie",
    "rollbar" : "Back-end, Ruby librarie",
    "PHP" : "Back-end programming language",
    "Laravel" : "Back-end, PHP Framework",
    "Symfony" : "Back-end, PHP Framework",
    "Yii" : "Back-end, PHP Framework",
    "Zend" : "Back-end, PHP Framework",
    "Drupal" : "Back-end, PHP CMS",
    "Wordpress" : "Back-end, PHP CMS",
    "Opencart" : "Back-end, PHP CMS",
    "Scala" : "Back-end programming language",
    "Scalatra" : "Back-end, Scala framework",
    "Play" : "Back-end, Scala framework",
    "Finatra" : "Back-end, Scala framework",
    "Go" : "Back-end programming language (new)",
    "Revel" : "Back-end, Go framework",
    "Martini" : "Back-end, Go framework",
    "Gocraft" : "Back-end, Go framework",
    "Haskell" : "Back-end FP programming language",
    "Happstack" : "Back-end, Haskell framework",
    "Snap" : "Back-end, Haskell framework",
    "Yesod" : "Back-end, Haskell framework",
    "Salvia" : "Back-end, Haskell framework",
    "Apache Hadoop" : "Back-end big data technology",
    "Apache Kafka" : "Back-end big data technology",
    "Apache Spark" : "Back-end big data technology",
    "Apache Flink" : "Back-end big data technology",
    "Apache Samza" : "Back-end big data technology",
    "TensorFlow" : "Back-end machine learning technology",
    "H20" : "Back-end machine learning technology",
    "Apache Singa" : "Back-end machine learning technology",
    "Apache Deep Learning" : "Back-end machine learning technology",
    "C, C++" : "Back-end, low level programming language",
    "OOP" : "Architecture, Object oriented programming",
    "Functional Programming (FP)"  : "Architecture, Functional Programming ",
    "Data Warehousing" : "Architecture, Reporting and data analysis",
    "REST API (RESTful)" : "Architecture, An approach for API creation",
    "SOAP" : "Architecture, Simple Object Access Protocol",
    "MVC" : "Architecture, Stands for: Model View Controller",
    "Unit testing" : "QA, Types of tests",
    "Integration testing" : "QA, Types of test",
    "Mocha" : "QA, Testing framework",
    "Chai" : "QA, Testing framework",
    "NUnit" : "QA, Testing framework",
    "JUnit" : "QA, Testing framework",
    "Java EE" : "Mobile/soft developemnt framework",
    "Swift" : "Mobile/soft developemnt language",
    "Objective C" : "Mobile/soft developemnt language",
    "Kivy" : "Game developemnt Python framework",
    "React Native" : "Mobile developemnt JavaScript framework",
    "Unity" : "Game developemtn C# tool",
    "Cordova" : "Mobile developemnt JavaScript framework",
    "PhoneGap": "Mobile developemnt JavaScript framework"
}
var skill_names = Object.getOwnPropertyNames(skills);

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

document.getElementById("deal")
	.addEventListener('click', function() {
		console.log("??");
		deals++;
		chrome.storage.local['deals'] = deals;
		updateBar();
	});

document.getElementById("contact")
	.addEventListener('click', function() {
		console.log("!!");
		contacts++;
		chrome.storage.local['contacts'] = contacts;
		updateBar();
	});

var tab_pills = document.getElementsByClassName('tab-nav-pill');
var tabs = document.getElementsByClassName('container');

document.getElementsByClassName('tab-nav')[0]
	.addEventListener('click', function(e) {
		var target = e.target;
		if (target.classList.contains('tab-nav-pill')) {
			[].forEach.call(tab_pills, function(el) {
				el.classList.remove('active');
			});
			target.classList.add('active');

			var tab_name = target.getAttribute('data-target');
			[].forEach.call(tabs, function(el) {
				el.classList.remove('active');
			});
			console.log(tab_name);
			document.getElementById(tab_name).classList.add('active');
		}
	});

document.getElementsByClassName('vocabulary-search')[0]
	.addEventListener('keyup', function() {
		var val = this.value.toLowerCase();
		var out = [];
		for (var i = 0, len = skill_names.length; i < len; i++) {
			var name = skill_names[i];
			if (name.toLowerCase().indexOf(val) != -1) {
				out.push('<li><h3>' + name + '</h3><p>' + skills[name] + '</p>');
			}
		}
		document.getElementById('search-results').innerHTML = out.join('');
	});