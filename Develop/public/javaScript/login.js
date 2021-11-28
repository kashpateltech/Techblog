const loginFormHandler = async function(event){
    event.preventDefault()
    const userNameElement = document.getElementById('username-input-login')
    const passwordElement = document.getElementById('password-input-login')
    
    
        fetch('/api/user/login',{
            method: 'POST',
            body: JSON.stringify({username: userNameElement.value, password: passwordElement.value}),
            headers:{
                "Content-Type": "application/json"
            }
        })
       .then(()=>{
           document.location.replace('/dashboard')
       })
    
}

document
.querySelector('#login-form')
.addEventListener('submit', loginFormHandler)