    function logout(){
        console.log('logout')
        fetch('/api/user/logout',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            }
        })
       .then(()=>{
          document.location.replace('/')
       })
    

    }
    
      
const logoutLink = document.querySelector('#logout-link');

if(logoutLink){
    logoutLink.addEventListener('click', logout);
}

