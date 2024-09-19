// add money to the account
/**
 * S-*1: add event handler
 * prevent pager reload after form submit
 * S-2 : get money to be added to the account balance;
 * s-m: verify pin number
 */

// step 1: add an event handler to the add money button inside thr form;
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();
    // console.log('money add button clicked');

    // step-2: get money to be added to the account;
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step 3: verify pin number
    // wrong way to validate pin number
    if (pinNumberInput === '1234') {
        console.log('adding money to your account');

        // step 4: get the current amount
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        //  step 5: addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
       const newBalance = addMoneyNumber+balanceNumber;
       console.log(newBalance);

    //    step-6: update the balance to the UI/DOM
    document.getElementById('account-balance').innerText= newBalance;

    }else{
        console.log('Failed to add money! Please try again');
    }

})