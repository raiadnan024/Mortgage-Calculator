function calculateMortgage(principal, annualRate, years) {
    const monthlyRate = (annualRate / 100) / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                           (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment.toFixed(2);
}

function calculateanddisplay() {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualRate = parseFloat(document.getElementById('annual-rate').value);
    const years = parseInt(document.getElementById('years').value, 10);

    if (isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal <= 0 || annualRate <= 0 || annualRate >=10 || years <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid values for all fields.';
        return;
    }

    const monthlyPayment = calculateMortgage(principal, annualRate, years);
    console.log(monthlyPayment)
    document.getElementById('result').innerHTML = `The monthly mortgage payment is: ${monthlyPayment}`;
}