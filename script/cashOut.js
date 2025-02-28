document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const convartedCashOutAmount = parseFloat(cashOutAmount)
    const cashOutPin = document.getElementById('cash-out-pin').value;
    const convartedCashOutPin = parseInt(cashOutPin);
    const balance = document.getElementById('balance').innerText
const convertedBalance = parseFloat(balance);
if(!isNaN(convartedCashOutAmount)&&convartedCashOutAmount>0){
    if(convartedCashOutPin === 1234){
        if(convartedCashOutAmount<=convertedBalance){
            const newBalance = convartedCashOutAmount - convertedBalance
            document.getElementById('balance').innerText =newBalance
            
        }
        else{
            alert('Insufficient balance')
    
       }
    }
    else{
        alert('Wrong PIN');
    }
}
else{
    alert('Invalid amount')
}      
})
   