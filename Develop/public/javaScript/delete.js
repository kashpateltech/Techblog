const deletePostHandler = async function(event){
    event.preventDefault()
    const postId = document.getElementById('post-id')
    
    fetch("/api/post/"+postId.value, {
        method: "delete"
    })
    .then(()=>{
        document.location.replace("/dashboard")
    })
}

document
.querySelector("#delete-btn")
.addEventListener("click", deletePostHandler)