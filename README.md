# odin-rock-paper-scissors

# GAME PSEUDOCODE

CALL getPlayerChoice
CALL getComputerChoice
CALL playGame

# FUNCTIONS PSEUDOCODE

# getPlayerChoice ()

OBTAIN playerChoice
SET playerSelection = playerChoice

# playGame ()

READ playerSelection
READ computerSelection
CASE playerSelection OF
    rock:
        IF computerSelection = rock THEN
            PRINT "It's a tie! You both chose rock."
        ELSE IF computerSelection = paper THEN
            PRINT "You lose! Paper beats rock."
        ELSE IF computerSelection = scissors THEN
            PRINT "You win! Rock beats scissors."
        ELSE
            PRINT "Invalid input."
        ENDIF
    paper:
        IF computerSelection = rock THEN
            PRINT "You win! Paper beats rock."
        ELSE IF computerSelection = paper THEN
            PRINT "It's a tie! You both chose paper."
        ELSE IF computerSelection = scissors THEN
            PRINT "You lose! Scissors beat paper."
        ELSE
            PRINT "Invalid input."
        ENDIF
    scissors:
        IF computerSelection = rock THEN
            PRINT "You lose! Rock beats scissors."
        ELSE IF computerSelection = paper THEN
            PRINT "You win! Scissors beat paper."
        ELSE IF computerSelection = scissors THEN
            PRINT "It's a tie! You both chose scissors."
        ELSE
            PRINT "Invalid input."
        ENDIF
    default:
        PRINT "Invalid player input. Please only choose rock, paper, or scissors."
ENDCASE