

const form=document.getElementById('form');
form.addEventListener('submit',e=>{
    e.preventDefault();
    validateFields();
});


const validateFields=()=>{
    const from=document.getElementById('from').value;
    if(from=='selectcountry'){
        alert('Please choose the country from the list');
        return false;
    }

    const to=document.getElementById('to').value;
    if(to=='selectcountry'){
        alert('Please choose the country from the list');
        return false;
    }
    
    const name1=document.getElementById('passengername1').value;
    if(name1 ==''){
        alert('Passenger 1 name is required');
        return false;
    } 
    else if(name1.length<5){
        alert('Passenger1 name should be atleast 5 characters long');
        return false;
    }

    const name2=document.getElementById('passengername2').value;
    if(name2 ==''){
        alert('Passenger 2 name is required');
        return false;
    } 
    else if(name2.length<5){
        alert('Passenger2 name should be atleast 5 characters long');
        return false;
    }
}


/* let validate = function (name,mob) {

    return new Promise((resolve, reject) => {
        if (name == "") {
            reject("Please enter the name")
        } else if (name.length < 5) {
            reject("Passenger name should be atleast 5 characters long")
        } else if(mob==""){
            reject("Please enter the mobile number")
        } else if(mob.length > 10){
            reject("Please enter the 10 digit")
        }
    })
    
    }
        
    let button = document.getElementById('book')
    
    button.addEventListener('click', (e) => {
    e.preventDefault();
    let name1 = document.getElementById('passengername1').value;
    let name2 = document.getElementById('passengername1').value;
    let mob = document.getElementById('phone').value;

    validate(name1,mob)
        .then((message) => {
            alert(message)
        })
        .catch((error) => {
            alert(error)
        })
    validate(name2,mob)
        .then((message) => {
            alert(message)
        })
        .catch((error) => {
            alert(error)
        })

    
    }) */