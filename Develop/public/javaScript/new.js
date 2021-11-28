const newFormHandler = async function(event){
    event.preventDefault()
    const title = document.querySelector('input[name="post-title"]').value
    const body = document.querySelector('textarea[name="post-body"]').value
    const token = localStorage.getItem("token")
    
        fetch('/api/post',{
            method: 'POST',
            body: JSON.stringify({title, body}),
            headers:{
                'Content-Tpye': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
       .then(()=>{
           document.location.replace('/dashboard')
       })
    
}

document
.querySelector('#new-post')
.addEventListener('submit', newFormHandler)