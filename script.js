const data = [
	{
		title: 'portfolio-one',
		text: 'Figma; HTML; CSS(Flex-box); JS; Адаптив по медиа-запросам.',
		link: 'https://dimayur31.github.io/Prtfolio_one/'
	},
	{
		title: 'portfolio-two',
		text: 'Figma; HTML (БЭМ); SCSS(Grid); Prepros; JS; Photoshop(сжатие img); Адаптив по медиа-запросам.',
		link: 'https://dimayur31.github.io/Prtfolio_two/'
	},
	{
		title: 'TO-DO List',
		text: 'React.js, SCSS',
		link: 'https://my-to-do-new-site.netlify.app'
	},
	{
		title: 'Countries-Vue.js',
		text: 'Vue.js, SCSS, Adaptive',
		link: 'https://dimayur31countries.netlify.app'
	},
];

isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},

	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},

	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},

	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},

	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},

	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

let body = document.querySelector('body');

if (isMobile.any()) {
	body.classList.add('_mobile');
} else {
	body.classList.add('_PC');
}

window.addEventListener('scroll', function () {
	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
	let menuToggle = document.querySelector('.toggle');
	let menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
};



function worksList(data) {
	const root = document.querySelector('.works-items');

	root.innerHTML = data
		.map(item => {
			return `
			<div class="work-item">
					<h3>${item.title}</h3>
					<div>
						<p>${item.text}</p>
						<a href="${item.link}" target="blank">Click here</a>
					</div>
				</div>
			`;
		})
		.join('');
}

worksList(data);