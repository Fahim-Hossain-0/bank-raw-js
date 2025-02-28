document.getElementById('cashout').style.display = 'none'
document.getElementById('cashout-box').addEventListener('click',function(){
    document.getElementById('cashout').style.display = 'block'
    document.getElementById('add-money').style.display = 'none'
})
document.getElementById('addMoney-box').addEventListener('click',function(){
    document.getElementById('add-money').style.display = 'block'
    document.getElementById('cashout').style.display = 'none'

})
