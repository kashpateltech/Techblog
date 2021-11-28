const signupFormHandler = async function(event){
    event.preventDefault()
    const userNameElement = document.getElementById('username-input-signup')
    const passwordElement = document.getElementById('password-input-signup')
    
    
        fetch('/api/user',{
            method: 'POST',
            body: JSON.stringify({username: userNameElement.value, password: passwordElement.value}),
            headers:{
                'Content-Tpye': 'application/json'
            }
        })
       .then(()=>{
           document.location.replace('/dashboard')
       })
    
}

document
.querySelector('#signup-form')
.addEventListener('submit', signupFormHandler)