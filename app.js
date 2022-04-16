const calculatePer = () => {
	let sub1 = document.querySelector('#sub1').value;
	let sub2 = document.querySelector('#sub2').value;
	let sub3 = document.querySelector('#sub3').value;
	let sub4 = document.querySelector('#sub4').value;
	let grade = "";

	let total = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4);
	let percentage = (total/400) * 100;

	if(percentage <= 100 && percentage >= 80){
		grade = 'A';
	}else if(percentage <= 79 && percentage >=60){
		grade = 'B';
	}else if(percentage <= 59 && percentage >= 40){
		grade = 'C';
	}else{
		grade = 'F';
	}

	if(percentage >= 39.5){
		document.querySelector('.result').innerHTML = ` Out of 400 your total is ${total} and percentage is ${percentage}%. <br> Your grade is ${grade}. PASS`;
	}else{
		document.querySelector('.result').innerHTML = ` Out of 400 your total is ${total} and percentage is ${percentage}%. <br> Your grade is ${grade}. FAIL`;
	}
}