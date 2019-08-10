(function() {

	//Select the head tag
	var head = document.getElementsByTagName('HEAD')[0];

	//Create icon font CSS import
	var fontImport = document.createElement('link');
	fontImport.rel = 'stylesheet';
	fontImport.type = 'text/css';
	fontImport.href = 'http://nicholasbarnette.com/iconFont.css';

	//Apply font import
	head.appendChild(fontImport);
	console.log('Icon font imported...');

})();