const firstCurrency = document.getElementById("first-currency");

const firstInput = document.getElementById("first-input");
const secondCurrency = document.getElementById("second-currency");

const secondInput = document.getElementById("second-input");

const exchangeRate = document.getElementById("exchange-rate");

calculateInput();

function calculateInput(){
    fetch(`https://v6.exchangerate-api.com/v6/197f4d36c6c6d56b6a664280/latest/${firstCurrency.value}`
    )
    .then((res) => res.json())
    .then((data) => {
        const rate = data.conversion_rates[secondCurrency.value];
        console.log(rate);
        exchangeRate.innerText = `1 ${firstCurrency.value} = ${rate + " "+secondCurrency.value}`
        secondInput.value = (firstInput.value * rate).toFixed(3);
});

    
}

firstCurrency.addEventListener("change", calculateInput);

secondCurrency.addEventListener("change", calculateInput);

firstInput.addEventListener("input", calculateInput);