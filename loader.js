var loadJS = function(js_url, callback) {
	var script = document.createElement('script');
	script.setAttribute('src', js_url);
	var isloaded = false;
	script.onload = function(){
		isloaded = true;
	}
	script.onreadystatechange = function(){
		if (typeof callback === 'function' && isloaded) {
			callback();
		};	
	}
	return document.getElementsByTagName('body')[0].appendChild(script);
};

var loadCSS = function(css_url) {
	var style = document.createElement('link');
	style.setAttribute('rel', 'stylesheet');
	style.setAttribute('type', 'text/css');
	style.setAttribute('href', css_url);
	return document.getElementsByTagName('head')[0].appendChild(style);
}

loadCSS('http://code.jquery.com/ui/1.10.3/themes/blitzer/jquery-ui.css');
loadCSS('https://dl.dropboxusercontent.com/u/65282618/editor.css');

loadJS('http://code.jquery.com/jquery-1.9.1.js');
loadJS('http://code.jquery.com/ui/1.10.3/jquery-ui.js');
loadJS('https://dl.dropboxusercontent.com/u/65282618/jQueryRotate.2.2.js');

loadJS('https://dl.dropboxusercontent.com/u/65282618/parser.js');
loadJS('https://dl.dropboxusercontent.com/u/65282618/unredo.js', function(){
	loadJS('https://dl.dropboxusercontent.com/u/65282618/editor.js');
	loadJS('https://dl.dropboxusercontent.com/u/65282618/save.js');	
});
