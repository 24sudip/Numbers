// http://numbersapi.com/

const factBtn = document.querySelector("button");
const factInput = document.querySelector("input");

const factPara = document.querySelector("p");
const factSelect = document.querySelector("select");

factBtn.addEventListener("click", () => {
    const number = factInput.value;
    const factType = factSelect.value || "trivia";

    if (Number.isFinite(parseInt(number))) {
        fetchFact(number, factType);
    } else if(number === "random"){
        fetchFact(number, factType);
    } else {
        return;
    }
});

async function fetchFact(number, type) {
    const factURL = "http://numbersapi.com/"; 

    const response = await fetch(`${factURL}${number}/${type}`);
    const responseData = await response.text();
    factPara.innerText = responseData;
}
