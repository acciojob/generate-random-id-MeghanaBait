function makeid(l) {
  // write your code here
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';

	for(let i = 0; i < 1; i++){
		const randomIdx = Math.floor(Math.random()* chars.length);
		result += chars[randomIdx];
	}
	return result;
}


// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
