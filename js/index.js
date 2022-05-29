const elForm = document.querySelector(".site-form");
const elInput = document.querySelector(".form-control");

const elPiyoda = document.querySelector(".piyoda-result");
const elVelosiped = document.querySelector(".vel-result");
const elMashina = document.querySelector(".mashina-result");
const elSamolyot = document.querySelector(".sam-result");
const elSam = document.querySelector("samolyot-result");

const piyoda = "3.6";
const velosiped = "20.1";
const mashina = "70";
const samolyot = "800";

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = elInput.value;
  console.log(inputValue);

  if (inputValue > 0) {
    const walkTime = inputValue / piyoda;
    const walkHour = parseInt(walkTime);
    const walkMin = Math.round(
      (parseFloat(walkTime.toFixed(2)) - walkHour) * 60
    );
    elPiyoda.textContent = `${walkHour} soat, ${walkMin} min`;

    const velTime = inputValue / velosiped;
    const velHour = parseInt(velTime);
    const velMin = Math.round((parseFloat(velTime.toFixed(2)) - velHour) * 60);
    elVelosiped.textContent = `${velHour} soat, ${velMin} min`;

    const mashTime = inputValue / mashina;
    const mashHour = parseInt(mashTime);
    const mashMin = Math.round(
      (parseFloat(mashTime.toFixed(2)) - mashHour) * 60
    );
    elMashina.textContent = `${mashHour} soat, ${mashMin} min`;

    const samTime = inputValue / samolyot;
    const samHour = parseInt(samTime);
    const samMin = Math.round((parseFloat(samTime.toFixed(2)) - samHour) * 60);
    elSamolyot.textContent = `${samHour} soat, ${samMin} min XA XA XA BARIBIR YETAOLMAYSIZLAR 😝😝😝😝`;
  }
});
