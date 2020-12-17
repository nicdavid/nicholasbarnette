import './styles/styles.scss';

window.addEventListener('load', () => {
	const hero = document.getElementById('hero');
	document
		.getElementById('hero-continue-icon')
		?.addEventListener('click', () => {
			window.scrollTo({
				top: hero?.getBoundingClientRect().height,
				left: 0,
				behavior: 'smooth',
			});
		});
});

const checkIfInView = (el: HTMLElement, offset?: number) => {
	const elParams = el.getBoundingClientRect();
	const scrollPos = window.scrollY;
	const screenHeight = window.innerHeight;
	const overrideOffset = offset ?? 200;
	// Scrolled into view && not above the current screen position
	const inView =
		scrollPos + screenHeight - overrideOffset > el.offsetTop &&
		elParams.top > 0;

	return inView;
};

window.addEventListener('scroll', () => {
	const animatedElements = Array.from(
		document.getElementsByClassName('will-animate-rise'),
	) as HTMLElement[];

	for (let el of animatedElements) {
		if (el) {
			const classes = el.getAttribute('class')?.split(' ') ?? [];
			if (classes.includes('animated-rise')) return;
			if (checkIfInView(el)) {
				el.classList.add('animated-rise');
				el.classList.remove('will-animate-rise');
			}
		}
	}
});

window.addEventListener('load', () => {
	const animatedElements = Array.from(
		document.getElementsByClassName('will-animate-rise-onload'),
	);

	for (let el of animatedElements) {
		if (el) {
			const classes = el.getAttribute('class')?.split(' ') ?? [];
			if (classes.includes('animated-rise')) return;
			el.classList.add('animated-rise');
			el.classList.remove('will-animate-rise-onload');
		}
	}
});
