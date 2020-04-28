function windowPopUp(url, width, height) {

	const title = '';
	const left = (window.outerWidth / 2) + (window.screenX || window.screenLeft || 0) - (width / 2);
	const top = (window.outerHeight / 2) + (window.screenY || window.screenTop || 0) - (height / 2);

	return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
}

export default windowPopUp;
