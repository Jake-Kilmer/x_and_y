const newDate = (userDate) => {
	let currentDate = new Date();
	let currentYear =  currentDate.getFullYear();
	document.getElementById('currentYear').innerHTML = currentYear;
}