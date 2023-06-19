{
    const calculateResult = (amount, currency) => { 
        const EUR = 4.50;
        const CHF = 4.63;
        const GBP = 5.24;
        const USD = 4.21;

        switch (currency) {
            case "EUR":
            return amount / EUR;
        

            case "CHF":
            return amount / CHF;

            case "GBP":
            return amount / GBP;

            case "USD":
            return amount / USD;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const sumElement = document.querySelector(".js-sum");
        sumElement.innerHTML = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
    }

        const onFormSubmit = (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".js-amount");
            const currencyElement = document.querySelector(".js-currency");
            
            const amount = +amountElement.value;
            const currency = currencyElement.value;

            let result = calculateResult(amount, currency);

            updateResultText(amount, result, currency);
        };

        const init = () => {
            const formElement = document.querySelector(".js-form");
            formElement.addEventListener("submit", onFormSubmit);
        };

        init();
}