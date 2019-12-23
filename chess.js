//codelodge
let size = prompt('Enter the size of the chessboard');
let chessb = "";
for(let i = 0; i < size; i++){
	for(let j = 0; j < size; j++){
		if((i+j)%2 == 0){
			chessb += " ";
		} else{
			chessb += "#";
		}
	} chess += "\n"
}
console.log(chessb);
console.log(chess);

