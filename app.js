


let NumberThis = document.querySelector(".this");
let BtnNegative = document.querySelector(".BtnNegative");
let BtnEquality = document.querySelector(".BtnEquality");
let BtnPlus = document.querySelector(".BtnPlus");

let Conter = localStorage.FirstProjectNumberOne ? parseInt(localStorage.FirstProjectNumberOne) : 17;
NumberThis.textContent = Conter;

function ColorNumberThis(C) {
   if (C == 17) {
    NumberThis.style.color = "blue";
  } else if (C >= 0) {
    NumberThis.style.color = "green";
  } else {
    NumberThis.style.color = "red"
  }
}
ColorNumberThis(Conter);

function EqualityLocalAndNumberThisToConter(C) {
  localStorage.FirstProjectNumberOne = C;
  NumberThis.textContent = C;
  ColorNumberThis(C)
}

BtnPlus.addEventListener("click", _ => {
  Conter++;
  EqualityLocalAndNumberThisToConter(Conter)
})

BtnEquality.addEventListener("click", _ => {
  Conter = 17;
  EqualityLocalAndNumberThisToConter(Conter)
})

BtnNegative.addEventListener("click", _ => {
  Conter--;
  EqualityLocalAndNumberThisToConter(Conter);
})

