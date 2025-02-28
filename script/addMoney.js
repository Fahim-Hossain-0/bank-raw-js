document.getElementById('add-money').addEventListener('click',function(event){
event.preventDefault();
const amount = document.getElementById('amount').value;
const convertedAmount = parseFloat(amount)
const pin = document.getElementById('pin').value
const convertedPin = parseInt(pin)
const balance = document.getElementById('balance').innerText
const convertedBalance = parseFloat(balance);

if(convertedAmount){
    if(convertedPin === 1234){
        const sum = convertedBalance+convertedAmount
            document.getElementById('balance').innerText = sum
    }
    else{
        alert('wrong pin')
    }
}
else{
    // alert('empty amount')
}



})