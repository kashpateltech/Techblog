    function logout(){
        fetch('/api/user/logout',{
            method: 'POST',
            headers:{
                'Content-Tpye': 'application/json'
            }
        })
       .then(()=>{
           document.location.replace('/')
       })
    

    }
    
      


document
.querySelector('#logout-link')
.addEventListener('click', logout)