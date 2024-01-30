# odin-rock-paper-scissors

**GAME PSEUDOCODE**

CALL playGame  
IF win > loss THEN  
&ensp;RETURN finalResult = "You win!"  
ELSE IF win < loss THEN  
&ensp;RETURN finalResult = "You lose!"  
ELSE IF win === loss THEN  
&ensp;RETURN finalResult = "It's a tie!"
PRINT "Game over! finalResult"

**FUNCTIONS PSEUDOCODE**

getPlayerChoice()  

OBTAIN playerChoice  
SET playerSelection = playerChoice  

playRound()

CALL getPlayerChoice 
CALL getComputerChoice
CASE playerSelection OF  
&ensp;rock:  
&ensp;&ensp;IF computerSelection = rock THEN  
&ensp;&ensp;&ensp;PRINT "It's a tie! You both chose rock."  
&ensp;&ensp;&ensp;RETURN tie  
&ensp;&ensp;ELSE IF computerSelection = paper THEN  
&ensp;&ensp;&ensp;PRINT "You lose! Paper beats rock."  
&ensp;&ensp;&ensp;RETURN playerLose  
&ensp;&ensp;ELSE IF computerSelection = scissors THEN  
&ensp;&ensp;&ensp;PRINT "You win! Rock beats scissors."  
&ensp;&ensp;&ensp;RETURN playerWin  
&ensp;&ensp;ELSE  
&ensp;&ensp;&ensp;PRINT "Invalid input."  
&ensp;&ensp;ENDIF  
&ensp;paper:  
&ensp;&ensp;IF computerSelection = rock THEN  
&ensp;&ensp;&ensp;PRINT "You win! Paper beats rock."  
&ensp;&ensp;&ensp;RETURN playerWin  
&ensp;&ensp;ELSE IF computerSelection = paper THEN  
&ensp;&ensp;&ensp;PRINT "It's a tie! You both chose paper."  
&ensp;&ensp;&ensp;RETURN tie  
&ensp;&ensp;ELSE IF computerSelection = scissors THEN  
&ensp;&ensp;&ensp;PRINT "You lose! Scissors beat paper."  
&ensp;&ensp;&ensp;RETURN playerLose  
&ensp;&ensp;ELSE  
&ensp;&ensp;&ensp;PRINT "Invalid input."  
&ensp;&ensp;ENDIF  
&ensp;scissors:  
&ensp;&ensp;IF computerSelection = rock THEN  
&ensp;&ensp;&ensp;PRINT "You lose! Rock beats scissors."  
&ensp;&ensp;&ensp;RETURN playerLose  
&ensp;&ensp;ELSE IF computerSelection = paper THEN  
&ensp;&ensp;&ensp;PRINT "You win! Scissors beat paper."  
&ensp;&ensp;&ensp;RETURN playerWin  
&ensp;&ensp;ELSE IF computerSelection = scissors THEN  
&ensp;&ensp;&ensp;PRINT "It's a tie! You both chose scissors."  
&ensp;&ensp;&ensp;RETURN tie  
&ensp;&ensp;ELSE  
&ensp;&ensp;&ensp;PRINT "Invalid input."  
&ensp;&ensp;ENDIF  
&ensp;default:  
&ensp;&ensp;PRINT "Invalid player input. Please only choose rock, paper, or scissors."  
ENDCASE  

playGame()

FOR roundCount <= 5  
CALL playRound  
IF roundResult = playerWin THEN  
&ensp;INCREMENT wins  
ELSE IF roundResult = playerLose THEN  
&ensp;INCREMENT loses  
ELSE  
&ensp;INCREMENT ties  
INCREMENT roundCount  
ENDFOR  