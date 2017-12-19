var star="* ";
var star2="* "

for(var i = 0; i <= 5; i++) //a loop, this counts from 0 to 10 (how many rows of stars)
{
	for(var x = 0; x <= i; x++)// a loop, counting from 0 to whatever value i is currently on
	{
		console.log(star);//write a * character

	}
     star = star+star2;
	console.log("\n"); //write a br tag, meaning new line, after every star in the row has been created
}
