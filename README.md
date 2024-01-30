# odin-rock-paper-scissors

GAME PSEUDOCODE

CALL playGame  
IF win > loss THEN  
  RETURN finalResult = "You win!"  
ELSE IF win < loss THEN  
  RETURN finalResult = "You lose!"  
ELSE IF win === loss THEN  
  RETURN finalResult = "It's a tie!"
PRINT "Game over! finalResult"

FUNCTIONS PSEUDOCODE

getPlayerChoice()  

OBTAIN playerChoice  
SET playerSelection = playerChoice  

playRound()

CALL getPlayerChoice 
CALL getComputerChoice
CASE playerSelection OF  
  rock:  
    IF computerSelection = rock THEN  
      PRINT "It's a tie! You both chose rock."  
      RETURN tie  
    ELSE IF computerSelection = paper THEN  
      PRINT "You lose! Paper beats rock."  
      RETURN playerLose  
    ELSE IF computerSelection = scissors THEN  
      PRINT "You win! Rock beats scissors."  
      RETURN playerWin  
    ELSE  
      PRINT "Invalid input."  
    ENDIF  
  paper:  
    IF computerSelection = rock THEN  
      PRINT "You win! Paper beats rock."  
      RETURN playerWin  
    ELSE IF computerSelection = paper THEN  
      PRINT "It's a tie! You both chose paper."  
      RETURN tie  
    ELSE IF computerSelection = scissors THEN  
      PRINT "You lose! Scissors beat paper."  
      RETURN playerLose  
    ELSE  
      PRINT "Invalid input."  
    ENDIF  
  scissors:  
    IF computerSelection = rock THEN  
      PRINT "You lose! Rock beats scissors."  
      RETURN playerLose  
    ELSE IF computerSelection = paper THEN  
      PRINT "You win! Scissors beat paper."  
      RETURN playerWin  
    ELSE IF computerSelection = scissors THEN  
      PRINT "It's a tie! You both chose scissors."  
      RETURN tie  
    ELSE  
      PRINT "Invalid input."  
    ENDIF  
  default:  
    PRINT "Invalid player input. Please only choose rock, paper, or scissors."  
ENDCASE  

playGame()

FOR roundCount <= 5  
CALL playRound  
IF roundResult = playerWin THEN  
    INCREMENT wins  
ELSE IF roundResult = playerLose THEN  
    INCREMENT loses  
ELSE  
    INCREMENT ties  
INCREMENT roundCount  
ENDFOR  