
		var contentCheck;
		var content;
		var winningGame;
		var turn = 0;
		var cellChosen = 0;

		window.onload=function(){
			
			contentCheck = [false,false,false,false,false,false,false,false,false];
			content = ['','','','','','','','',''];
			winningGame = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
		}

		
		function canvasClicked(canvasNumber){
			var myCanvas = "canvas"+canvasNumber;
			var c = document.getElementById(myCanvas);
			var cxt = c.getContext("2d");
			

			if(contentCheck[canvasNumber-1] ==false){
				if(turn%2==0){
					cxt.beginPath();
					cxt.moveTo(10,10);
					cxt.lineTo(40,40);
					cxt.moveTo(40,10);
					cxt.lineTo(10,40);
					cxt.stroke();
					cxt.closePath();
					content[canvasNumber-1] = 'X';
				}

				else{
					cxt.beginPath();
					cxt.arc(25,25,20,0,Math.PI*2,true);
					cxt.stroke();
					cxt.closePath();
					content[canvasNumber-1] = 'O';
				}

				turn++;
				contentCheck[canvasNumber-1] = true;
				cellChosen++;
				if(cellChosen==9){
					
					document.getElementById('message').innerHTML = 'THE GAME IS OVER! it is tie '; 
				}
				checkForWinners(content[canvasNumber-1]);
			
			}
			else{
				alert("SORRY, THAT SPACE IS NOT AVAILABLE ANY MORE!");
			}

		}

		function checkForWinners(symbol){
			
			for(var k = 0; k < winningGame.length; k++){
			if(content[winningGame[k][0]]===symbol&&
				content[winningGame[k][1]]===symbol&&
				content[winningGame[k][2]]===symbol)
				{
				    document.getElementById('message').innerHTML = "THE WINNER IS: * " + symbol+" *";
				    contentCheck = [true,true,true,true,true,true,true,true,true];

				    }
			}
			}

		}

		function playAgain(){

				location.reload(true);
		}
