let jucator = { 
    name: "Marius",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let elementMesaj = document.querySelector(".element_mesaj")
let elementSuma = document.querySelector(".element_suma")
let elementCarti = document.querySelector(".element_carti")
let elementJucator = document.querySelector(".element_jucator")
  
elementJucator.textContent = jucator.name + ": $" + jucator.chips
  
function getRandomCard() {
   let randomNumber = Math.floor( Math.random() * 13 ) + 1 
   if (randomNumber > 10) {
    return 10
   } else if (randomNumber === 1) {
    return 11
   } else {
    return randomNumber
   }
}
   
function startGame() {
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
   renderGame()
}
  
function renderGame() {
   elementCarti.textContent = "Cards: "
   for ( i = 0; i < cards.length; i++) {
    elementCarti.textContent += cards[i] + " "
}
    
elementSuma.textContent = "Sum: " + sum
   if (sum < 20) {
    message = "Do you want to draw a new card?"
   } else if (sum === 21) 
{
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
  }
    elementMesaj.textContent = message
}
  
function newCard() {
   if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}

  
  
  
  
  
  