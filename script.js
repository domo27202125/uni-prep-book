let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");
let locationbutton = document.querySelector("#refresh")

let students = [
  {
    profileImage: "https://cdn.glitch.com/8602b3d5-5e85-4f58-9d4e-b421b72409a6%2FA9FC309B-6A1A-490D-A6C4-8C0893038559_1_101_o.jpeg?v=1585178439931",
    name: "Miranda",
    quote: "'-Conchale meng'",
    superlative: "Funniest Individual"
  },

  {
    profileImage: "https://cdn.glitch.com/8602b3d5-5e85-4f58-9d4e-b421b72409a6%2FF1C4A603-5C1A-4B78-A945-4AA9F381E0C7.png?v=1585164808681",
    name: "Adriana",
    quote: "-Diale meng",
    superlative: "Loudest Individual"
  },

  {
    profileImage: "https://cdn.glitch.com/8602b3d5-5e85-4f58-9d4e-b421b72409a6%2FIMG_4239.jpeg?v=1585178540517",
    name: "Munira",
    quote: " '-Thats tough'",
    superlative: "Best Smile"
  },

  {
    profileImage: "https://cdn.glitch.com/8602b3d5-5e85-4f58-9d4e-b421b72409a6%2FIMG_4177.jpeg?v=1585178584478",
    name: "Jinmaris",
    quote: " '-You Only Live Once'",
    superlative: "Best Dressed"
  },

  {
    profileImage: "https://cdn.glitch.com/8602b3d5-5e85-4f58-9d4e-b421b72409a6%2FIMG_1400.JPG?v=1585179634650",
    name: "Nayeli",
    quote: "'-Hate it here'",
    superlative: "Most Changed"
  },

  {
    profileImage: "https://cdn.glitch.com/8602b3d5-5e85-4f58-9d4e-b421b72409a6%2FIMG_1401.JPG?v=1585179985938",
    name: "Nixon",
    quote: "'-When all else fails, eat a donut.",
    superlative: " Most likely to become President"
  },

  {
    profileImage: "https://cdn.glitch.com/8602b3d5-5e85-4f58-9d4e-b421b72409a6%2FIMG_1398.png?v=1585178880766",
    name: "Yadira",
    quote: " '-Remember kids, boomer remover'",
    superlative: "Shortest Individual"
  },

  {
    profileImage: "https://cdn.glitch.com/8602b3d5-5e85-4f58-9d4e-b421b72409a6%2FIMG_2443.JPG?v=1585178885785",
    name: "Nancy",
    quote: " '-Have the courage to exist'",
    superlative: "Sweetest Individual"
  }
];

let count = 0;
document.querySelector("#pic").src = students[count].profileImage;
document.querySelector("#name").innerHTML = students[count].name;
document.querySelector("#quote").innerHTML = students[count].quote;
document.querySelector("#superlative").innerHTML = students[count].superlative;
let lastStudent = students.length -1

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  console.log(count);
  if (count > lastStudent){
    count = 0
  }
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =students[count].superlative;
  
});

backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
  if (count < 0){
    count = lastStudent
  }
});


let clickerButton = document.querySelector("#clicker")
console.log(clickerButton)

clickerButton.addEventListener("click", addToCount)

function addToCount(){
count++
console.log(count)  
  let scoreBoard = document.querySelector("#score")
  scoreBoard.innerHTML = `Score: ${count}`
  
  if(count >= 10){
    let gamePic = document.querySelector("#pic")
    gamePic.src = "https://media.giphy.com/media/rypyVNU547qrC/giphy.gif";
  alert("Refresh page");
  } 
    console.log(scoreBoard)
}

