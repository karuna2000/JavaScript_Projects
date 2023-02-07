const Form = document.getElementById('form');


function validateName(element){

    let isValid = false;
    let minimum = 3;
    let maximum = 20;
    const span = document.getElementsByClassName('nameError')[0];
    let errorMessages = [
        'name length must have min 6 char and max 20',
        'this field is required'
    ]

    if(element.value.length>=minimum && element.value.length<=maximum){
          span.style.display="none";
          return !isValid;
    }
    if(element.value === ''){
        span.innerHTML=errorMessages[1];
    }
    else{
        span.innerHTML=errorMessages[0]; 
    }
    span.style.display="block";
    return isValid;
    
}



function validateEmail(element){
   
    let isValid = false;

    let atpos=element.value.indexOf("@"); 
    let dotpos=element.value.lastIndexOf("."); 
    const span = document.getElementsByClassName('emailError')[0];
    let errorMessage = ['this field is required','enter a valid email'];

    
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=element.value.length){
        console.log(element.value.length);
        if(element.value.length === 0){
            span.innerHTML=errorMessage[0];  
        }
        else{
            span.innerHTML=errorMessage[1]; 
        }
        span.style.display = "block";
        return isValid;
    }

    span.style.display = "none";
    return !isValid;
}



function validatePhone(element){
 
    let isValid = false;
    let len = 10;
    const span = document.getElementsByClassName('phoneError')[0];
    let errorMessage = ['this field is required',
 'phone number must have 10 digits'];

    if(phone.value.length !== len){
        if(phone.value.length === 0){
            span.innerHTML=errorMessage[0];
        }
        else{
            span.innerHTML=errorMessage[1];
        }
        span.style.display = "block"; 
        return !isValid;
    }
    span.style.display = "none";
    return !isValid;
}


function validateTech(element){
    let isValid = false;

    const span = document.getElementsByClassName('selectionError')[0];
    let errorMessage = 'this field is required';

    if(element.value.length){
        span.style.display = "none";  
        return !isValid;
    }
    span.innerHTML=errorMessage;
    span.style.display = "block";  
    return isValid;
}


function validateSkill(element){
    let isValid = false;
    const span = document.getElementsByClassName('multiSelectError')[0];
    let errorMessage = 'this field is required';
    if(element.value.length){
        span.style.display = "none";  
        return !isValid;
    }
    span.innerHTML=errorMessage;
    span.style.display= "block";  
    return isValid;
}


function validateAgreement(element){
    let isValid = false;

    const span = document.getElementsByClassName('AgreementError')[0];
    let errorMessage = 'this field is required';
    if(element.checked){
        span.style.display = "none";  
        return !isValid;
    }
    span.innerHTML=errorMessage;
    span.style.display = "block";  
    return isValid;
}


function checkValidity(name,email,phone,checkbox,technology,skill){

    let isNameValid = validateName(name);
    let isEmailValid = validateEmail(email);
    let isPhoneValid = validatePhone(phone);
    let istechnologyValid = validateTech(technology);
    let isSkillValid = validateSkill(skill);
    let isCheckValid = validateAgreement(checkbox);

   
    if(isNameValid&&isEmailValid&&isPhoneValid&&
    istechnologyValid&&isSkillValid&&
    isCheckValid){
        return true;
    }
   
    return false;
}


Form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const checkbox = document.getElementById('checkbox');
    const technology = document.getElementById('technogies');
    const skill = document.getElementById('skills');

    console.log(checkValidity(name,email,phone,checkbox,technology,skill));
    
    
});

