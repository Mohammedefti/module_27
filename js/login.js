
// document.getElementById('id').addListener('click',fun)

// document.getElementById('button-login')
// .addEventListener('click',function(){
//     console.log('login button field')
// })

// search : form submit reloading the page

// step - 1 set event handler
document.getElementById('button-login')
.addEventListener('click',function(){
    // step 2 : prevent default behavior (prevent reloading browser)
    event.preventDefault();
    // console.log('login button clicked');

    // step 3 : get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // step 4: validate phone and pin
    // this is temporary you should not do like dis
    if (phoneNumber =='5'&& pinNumber =='1234') {
        console.log('You are logged in');
        // step -5: Allow user to use the website;
        window.location.href='/home.html';
    }else{
        alert('wrong phone number or pin');
        
    }
})
