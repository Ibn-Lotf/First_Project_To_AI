


let NumberThis = document.querySelector(".this");
let BtnNegative = document.querySelector(".BtnNegative");
let BtnEquality = document.querySelector(".BtnEquality");
let BtnPlus = document.querySelector(".BtnPlus");

let Conter = localStorage.FirstProjectNumberOne ? parseInt(localStorage.FirstProjectNumberOne) : 17;
NumberThis.textContent = Conter;

// start
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

// هذه الدلة للنقل
function EqualityLocalAndNumberThisToConter(C) {
  localStorage.FirstProjectNumberOne = C;
  NumberThis.textContent = C;
  ColorNumberThis(C)
}

// هذه دول الأزرار
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





// هذه الأضافة***************************************
let btnDarkOrLight = document.querySelector(".btnDarkOrLight");

// start
let DarkOrLight = localStorage.FiPrDarkOrLight || "Light";
ShowDarkOrLight(DarkOrLight)

// ---
btnDarkOrLight.addEventListener("click", () => {
  const isDark = DarkOrLight;
  if (isDark === "Dark") {
    // body
    document.body.classList.replace("Dark", "Light");
    // Number this
    NumberThis.classList.replace("DarkBoxNumber", "LightBoxNumber");
    // Buttn
    btnDarkOrLight.classList.replace("Dark", "Light");
    btnDarkOrLight.textContent = "Light";
    // Btns clacls
    BtnEquality.classList.replace("Darkbtn", "Lightbtn");
    BtnNegative.classList.replace("Darkbtn", "Lightbtn");
    BtnPlus.classList.replace("Darkbtn", "Lightbtn");
    // Save
    localStorage.FiPrDarkOrLight = "Light";
    DarkOrLight = "Light";
  } else {
    // body
    document.body.classList.replace("Light", "Dark");
    // Number this
    NumberThis.classList.replace("LightBoxNumber", "DarkBoxNumber");
    // Buttn
    btnDarkOrLight.classList.replace("Light", "Dark");
    btnDarkOrLight.textContent = "Dark";
    // Btns clacls
    BtnEquality.classList.replace("Lightbtn", "Darkbtn");
    BtnNegative.classList.replace("Lightbtn", "Darkbtn");
    BtnPlus.classList.replace("Lightbtn", "Darkbtn");
    // Save
    localStorage.FiPrDarkOrLight = "Dark";
    DarkOrLight = "Dark"; 
  }
});

function ShowDarkOrLight(isDark) {
  if (isDark === "Light") {
    // body
    document.body.classList.replace("Dark", "Light");
    // Number this
    NumberThis.classList.replace("DarkBoxNumber", "LightBoxNumber");
    // Buttn
    btnDarkOrLight.classList.replace("Dark", "Light");
    btnDarkOrLight.textContent = "Light";
    // Btns clacls
    BtnEquality.classList.replace("Darkbtn", "Lightbtn");
    BtnNegative.classList.replace("Darkbtn", "Lightbtn");
    BtnPlus.classList.replace("Darkbtn", "Lightbtn");
    // Save
    localStorage.FiPrDarkOrLight = "Light";
    DarkOrLight = "Light";

  } else {
    // body
    document.body.classList.replace("Light", "Dark");
    // Number this
    NumberThis.classList.replace("LightBoxNumber", "DarkBoxNumber");
    // Buttn
    btnDarkOrLight.classList.replace("Light", "Dark");
    btnDarkOrLight.textContent = "Dark";
    // Btns clacls
    BtnEquality.classList.replace("Lightbtn", "Darkbtn");
    BtnNegative.classList.replace("Lightbtn", "Darkbtn");
    BtnPlus.classList.replace("Lightbtn", "Darkbtn");
    // Save
    localStorage.FiPrDarkOrLight = "Dark";
    DarkOrLight = "Dark"; 
  }
}