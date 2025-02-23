const currencyList = [
    "USD", "EUR", "GBP", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AZN", "BAM", "BDT", "BGN", "BHD", "BIF", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "FJD", "FKP", "FOK", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
];

function populateCurrencyDropdowns() {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    
    currencyList.forEach(currency => {
        let option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = currency;
        if (currency === "INR") {
            option1.selected = true;
        }
        fromCurrency.appendChild(option1);
        
        let option2 = document.createElement("option");
        option2.value = currency;
        option2.textContent = currency;
        if (currency === "USD") {
            option2.selected = true;
        }
        toCurrency.appendChild(option2);
    });
}

//this code belongs to sujalnichat18 do not copy my code

populateCurrencyDropdowns();

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    if (amount === "" || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    
    const apiKey = '0ad50af6dc620507b384b4b3102f62268797dec3d5d1935443d58307'; 
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        alert("Error fetching exchange rate data.");
    }
}

function resetForm() {
    document.getElementById('amount').value = '';
    document.getElementById('fromCurrency').value = 'INR';
    document.getElementById('toCurrency').value = 'USD';
    document.getElementById('result').innerText = '';
}