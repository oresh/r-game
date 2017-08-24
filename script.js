var skills = {
    "mySQL" : "Database<br>Standard Database used by most of the developers",
    "PostgreSQL" : "Database<br>Mostly used by Symfony and Laravel developers and a few others",
    "Oracle DB" : "Database<br>Mostly used by Java developers",
    "SQL" : "Database language",
    "PL/SQL" : "Database language for Oracle DB",
    "Microsoft SQL Server" : "Database<br>Mostly used by Java and .NET developers",
    "MariaDB" : "Database<br>Rarely used, mb some devs to that",
    "T-SQL" : "Database lang extension<br>Used with Microsoft",
    "MongoDB": "NoSQL Database<br>Used by Nodejs developers and some other",
    "Redis" : "Database framework<br>Cool, used by startups and stuff",
    "JavaScript (JS)" : "Front-end language",
    "ReactJs": "Front-end, JavaScript, Framework<br>Modern front-end framework that's quite popular and is getting a lot of attention. We use that",
    "Vuejs": "Front-end, JavaScript, Framework<br>Newer front-end framework with a gworing community, but not frequently used in large production websites. Was created taking the best parts from other frameworks, so it's a mixture of everything or so.",
    "Angular 1 (ng)": "Front-end, JavaScript, Framework<br>Old version of angular that had a lot of problems and not that pretty. Currently not that commonly used.",
    "Angular 2/4 (ng2)": "Front-end, JavaScript, Framework<br>The next version of Angular. Has good parts like rouding, components, templates, can be compared to React and Vue. Is quite often used.",
    "Backbone": "Front-end, JavaScript, Framework<br>An old front-end framework that was popular, when none other existed. Currently it's mostly used on old and support projects.",
    "Knockout": "Front-end, JavaScript, Framework.<br>Is cool but an old framework, I think it's usually used with other technologies",
    "ExtJs": "Front-end, JavaScript, Framework<br>It's cool large front-end framework with lots of components. The downside is that it's paid and costs a few thousand dollars. Mostly used on large b2b projects or so.",
    "Ember" : "Front-end, JavaScript, Framework<br>An old front-end framework that was used as an alternative to backbone(maybe). Almost nether used currently.",
    "D3" : "Front-end, JavaScript, Librarie<br>A framework for creating visualisation in javaScript",
    "Redux": "Front-end, JavaScript, Librarie<br>It's a librarie that is most commonly used in conjunction with React. It's used to work with all the data in the application and control the data flow. Sometimes is also used with React Sagas",
    "jQuery": "Front-end, JavaScript, Librarie<br>jQuery is a js librarie that makes DOM manipulation easy and cross-browser. Like add class, switch color, collapse etc. Mostly used by back-end developers on project that don't need a framework.",
    "TypeScript" : "Front-end, JavaScript, Compiler<br>It's layer above JavaScript that supports current and future javaScript (ECMAScript) specifications and compiles the code to the needed version. IT also adds types to JS. Is used by default with Angular 2",
    "CoffeeScript" : "Front-end, JavaScript, Compiler<br>It's a rarely used prettifier for JavaScript that just makes the code look a bit prettier.",
    "ES5" : "Front-end, JavaScript, Specifications<br>Current JavaScript standard",
    "ES6" : "Front-end, JavaScript, Specifications<br>Future (the latest) javascript standard, not fully supported by all browsers",
    "ES Next" : "Front-end, JavaScript, Specifications<br>Includes the new stuff that will be added to JavaScript in future",
    "Ajax" : "Front-end, JavaScript, Technology<br>Is used by back-end developers to make requests to server and get data without reloading the page. Is also called XHTTP requests",
    "Brackets" : "Front-end, JavaScript, Templating engine<br>Rarely used",
    "Handlebars" : "Front-end, JavaScript, Templating engine<br>Rarely used",
    "Sass" : "Front-end, CSS Preprocessor<br>Add variables, mixins, inheritance and other stuff to CSS. Written in Ruby. Same as Scss",
    "Less" : "Front-end, CSS Preprocessor<br>Add variables, mixins, inheritance and other stuff to CSS. Written in javaScript",
    "Scss" : "Front-end, CSS Preprocessor<br>Add variables, mixins, inheritance and other stuff to CSS. Written in Ruby. Same as Sass",
    "Stylus" : "Front-end, CSS Preprocessor<br>Rarely used. Add variables, mixins, inheritance and other stuff to CSS. Written in JavaScript",
    "PostCSS" : "Front-end, CSS Preprocessor<br>Add variables, mixins, inheritance and other stuff to CSS by different modules. Written in JavaScript",
    "CSS, CSS3" : "Front-end, CSS",
	"Bootstrap" : "Front-end, CSS Framework<br>A librarie that includes ready-made CSS styles and grid",
	"Foundation" : "Front-end, CSS Framework<br>A librarie that includes ready-made CSS styles and grid",
    "HTML, HTML5" : "Front-end, HTML",
    "webpack" : "Front-end Pjrect builder<br>A new cool stuff we use to combine files together, run some scripts and prepare the code for production",
    "gulp" : "Front-end Pjrect builder<br>Modular project builder that combine files together, run some scripts and prepare the code for production. Written in Javascript",
    "grunt" : "Front-end Pjrect builder<br>Modular project builder that combine files together, run some scripts and prepare the code for production. Written in Javascript",
    "npm" : "Front-end, package control<br>Nodejs package control that downloads and updates modules",
    "yarn" : "Front-end, package control<br>Nodejs package control that downloads and updates modules",
    "bower" : "Front-end, package control<br>JavaScript package control that downloads and updates libraries and plugins",
    "compass" : "Front-end, package control<br>Ruby package control for sass and stuff.",
    "Java" : "Back-end language",
    "Apache Tomcat" : "Back-end, open-source Java Servlet Container.<br\>Kinda old, though still supported and updated.",
    "Spring": "Back-end Java Framework<br>The most popular Java framework",
    "Struts": "Back-end Java Framework",
    "Hibernate": "Back-end Java Framework",
    "JSF": "Back-end Java Framework",
    "Grails": "Back-end Java Framework",
    "Spark (microframework)": "Back-end Java Framework",
    "Junit": "Back-end Java Librarie<br>Used for testing by Java developers",
    "SLF4J": "Back-end Java Librarie",
    "Google Guava": "Back-end Java Librarie",
    "Express": "Back-end JavaScript Framework<br>",
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
	'Напиши кому-то из знакомых разработчиков',
	'Спроси как прошли выходные',
	'Проверь, если у него есть аккаунта в github',
	'Может он выставил что-то интересное в facebook',
	'Сколько человек в команде?',
	'Есть что интересное почитать?',
	'Поделись интересной ссылкой или новостью',
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