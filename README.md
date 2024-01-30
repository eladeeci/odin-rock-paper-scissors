# odin-rock-paper-scissors

GAME PSEUDOCODE

CALL getPlayerChoice  
SET playerSelection  
CALL getComputerChoice  
SET computerSelection  
CALL playGame  

FUNCTIONS PSEUDOCODE

getPlayerChoice()  

OBTAIN playerChoice  
SET playerSelection = playerChoice  

playRound()

READ playerSelection  
READ computerSelection  
CASE playerSelection OF  
&emsp;rock:  
&emsp;&emsp;IF computerSelection = rock THEN  
&emsp;&emsp;&emsp;PRINT "It's a tie! You both chose rock."  
&emsp;&emsp;ELSE IF computerSelection = paper THEN  
&emsp;&emsp;&emsp;PRINT "You lose! Paper beats rock."  
&emsp;&emsp;ELSE IF computerSelection = scissors THEN  
&emsp;&emsp;&emsp;PRINT "You win! Rock beats scissors."  
&emsp;&emsp;ELSE  
&emsp;&emsp;&emsp;PRINT "Invalid input."  
&emsp;&emsp;ENDIF  
&emsp;paper:  
&emsp;&emsp;IF computerSelection = rock THEN  
&emsp;&emsp;&emsp;PRINT "You win! Paper beats rock."  
&emsp;&emsp;ELSE IF computerSelection = paper THEN  
&emsp;&emsp;&emsp;PRINT "It's a tie! You both chose paper."  
&emsp;&emsp;ELSE IF computerSelection = scissors THEN  
&emsp;&emsp;&emsp;PRINT "You lose! Scissors beat paper."  
&emsp;&emsp;ELSE  
&emsp;&emsp;&emsp;PRINT "Invalid input."  
&emsp;&emsp;ENDIF  
&emsp;scissors:  
&emsp;&emsp;IF computerSelection = rock THEN  
&emsp;&emsp;&emsp;PRINT "You lose! Rock beats scissors."  
&emsp;&emsp;ELSE IF computerSelection = paper THEN  
&emsp;&emsp;&emsp;PRINT "You win! Scissors beat paper."  
&emsp;&emsp;ELSE IF computerSelection = scissors THEN  
&emsp;&emsp;&emsp;PRINT "It's a tie! You both chose scissors."  
&emsp;&emsp;ELSE  
&emsp;&emsp;&emsp;PRINT "Invalid input."  
&emsp;&emsp;ENDIF  
&emsp;default:  
&emsp;&emsp;PRINT "Invalid player input. Please only choose rock, paper, or scissors."  
ENDCASE  
