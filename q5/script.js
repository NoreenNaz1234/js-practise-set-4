function calPer() {
	let userPut = parseInt(document.querySelector("input").value);
	let per = parseInt(document.querySelector("input").value);
	let totalMarks = 1050;
      per = userPut / totalMarks * 100;
      alert(" Percentage "  +  per + " % " );
}