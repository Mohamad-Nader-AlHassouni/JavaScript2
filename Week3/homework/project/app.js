'use strict'

const form = document.getElementById('tip-form');
const bill = document.getElementById('bill');
const service = document.getElementById('service');
const ppl = document.getElementById('ppl');
const tip = document.getElementById('tip');
const each = document.getElementById('each');
const tipAmout = document.getElementById('tipAmout');

form.onsubmit = function(){
    calcaluateTip();
};
function calcaluateTip(){
    event.preventDefault();
    let totalBill = bill.value;
    let tipPercentage = service.value;
    let pplNumber = ppl.value;
    let resault = ((totalBill * tipPercentage)/100) / pplNumber;
    resault = resault.toFixed(2)

    tip.innerText = '€' + resault ;
    tipAmout.innerText = `TIP AMOUNT` ;
    if (pplNumber > 1) each.innerText = `each`;
}
