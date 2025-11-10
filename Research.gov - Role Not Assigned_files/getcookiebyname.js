/**
 * get cookie by name without using a regular expression
 */
var getCookie = function(name) {
	var getCookieValues = function(cookie) {
		var cookieArray = cookie.split('=');
		return cookieArray[1].trim();
	};

	var getCookieNames = function(cookie) {
		var cookieArray = cookie.split('=');
		return cookieArray[0].trim();
	};

	var cookies = document.cookie.split(';');
	var cookieValue = cookies.map(getCookieValues)[cookies.map(getCookieNames).indexOf(name)];

	return (cookieValue === undefined) ? null : cookieValue;
};

/**
 * alternative: get cookie by name with using a regular expression
 */
var getCookiebyName = function(name){
	var pair = document.cookie.match(new RegExp(name + '=([^;]+)'));
	return !!pair ? pair[1] : null;
};

/**
 * [Gets the cookie value if the cookie key exists in the right format]
 * @param  {[string]} name [name of the cookie]
 * @return {[string]}      [value of the cookie]
 */
var getCookie = function (name) {
    return parseCookies()[name] || '';
};

/**
 * [Parsing the cookieString and returning an object of the available cookies]
 * @return {[object]} [map of the available objects]
 */
var parseCookies = function () {
	var cookieData = (typeof document.cookie === 'string' ? document.cookie : '').trim();

	return (cookieData ? cookieData.split(';') : []).reduce(function (cookies, cookieString) {
		var cookiePair = cookieString.split('=');

		cookies[cookiePair[0].trim()] = cookiePair.length > 1 ? cookiePair[1].trim() : '';

		return cookies;
	}, {});
};

