document.getElementById('login-btn').addEventListener("click",function(event){
    event.preventDefault()
    const accountNumber = document.getElementById('account-number').value.trim();
    // console.log(typeof accountNumber);
    const pinNumber = document.getElementById('pin').value.trim();
    // console.log(typeof pinNumber);
    if(accountNumber.length === 11){
        if(pinNumber.length === 1234){
            window.location.href = "/main.html"
        }
        else{
            alert('Incorrect Pin')
        }
        
    }
    else{
        alert('account number not right')
    }
})