const editFormHandler = async function(event){
    event.preventDefault()
    const titleElement = document.getElementById('post-title')
    const bodyElement = document.getElementById('post-body')
    const postId = document.getElementById('post-id')
    
        fetch('/api/post/'+postId.value,{
            method: 'POST',
            body: JSON.stringify({title: titleElement.value, body: bodyElement.value}),
            headers:{
                "Content-Type": "application/json"
            }
        })
       .then(()=>{
           document.location.replace('/dashboard')
       })
    
}

document
.querySelector("#edit-post-form")
.addEventListener("submit", editFormHandler)