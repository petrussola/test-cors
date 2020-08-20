const button = document.getElementById('clickme');

button.addEventListener('click', async () => {
	const response = await fetch('https://andriy.online/');
	const data = await response.json();
	console.log(data);
});
