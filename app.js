
const cardArr = [
    {
        name : "basketball",
        img : "basketball.png"
    },
    {
        name : "boy",
        img : "boy.jpg"
    },
    {
        name : "cafeteria",
        img : "cafeteria.png"
    },
    {
        name : "certificate",
        img : "certificate.jpg"
    },
    {
        name : "girl",
        img : "girl.jpg"
    },
    {
        name : "library",
        img : "library.png"
    },
    {
        name : "basketball",
        img : "basketball.png"
    },
    {
        name : "boy",
        img : "boy.jpg"
    },
    {
        name : "cafeteria",
        img : "cafeteria.png"
    },
    {
        name : "certificate",
        img : "certificate.jpg"
    },
    {
        name : "girl",
        img : "girl.jpg"
    },
    {
        name : "library",
        img : "library.png"
    },
]

cardArr.sort( () => 0.5 - Math.random())

const gridDisplay = document.getElementById("grid");
const result = document.querySelector("span")
let cardChoosen = [];
let cardChoosenID = [];
let cardWon = [];

function createBoard () {
    for (let i = 0; i < cardArr.length; i++) {
        const card = document.createElement("img")
        card.style.height = 100 + "px"
        card.style.width = 100 + "px"
        card.setAttribute("src", "blank.jpg")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
        
    }
}

createBoard();

function flipCard (){
    const cardID = this.getAttribute("data-id")
    cardChoosen.push(cardArr[cardID].name)
    cardChoosenID.push(cardID);
    this.setAttribute("src", cardArr[cardID].img)
    if (cardChoosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll("img")
    if (cardChoosenID[0] == cardChoosenID[1]) {
        alert("click on same image")
        
    }
    if (cardChoosen[0] == cardChoosen[1]) {
        alert("You found a match !")
        cards[cardChoosenID[0]].setAttribute("src", "ul.png")
        cards[cardChoosenID[1]].setAttribute("src", "ul.png")
        cards[cardChoosenID[0]].removeEventListener("click", flipCard)
        cards[cardChoosenID[1]].removeEventListener("click", flipCard)
        cardWon.push(cardChoosen);
    }else{
        cards[cardChoosenID[0]].setAttribute("src", "blank.jpg")
        cards[cardChoosenID[1]].setAttribute("src", "blank.jpg")
        alert("sorry wrong match try agian")
    }
    
    cardChoosen = [];
    cardChoosenID = [];
    result.textContent = cardWon.length

      if (cardWon.length == cardArr.length/2) {
        result.textContent = "Congratulations You found them all !"
      }
}