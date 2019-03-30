
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const genderInput = document.querySelector('#gender');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput.value + ' ' + emailInput.value);

    if(nameInput.value ==='' || emailInput.value ===''){
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    }
    else{
        const li = document.createElement('li');
        const text = document.createTextNode(`name : ${nameInput.value}   email : ${emailInput.value}   gender : ${genderInput.value}   subject : ${subjectInput.value}   message : ${messageInput.value}`);
        li.appendChild(text);
        // console.log(li);

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}

