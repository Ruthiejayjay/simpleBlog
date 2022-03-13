const params = new URLSearchParams(location.search)
const postId = params.get('postId')

fetch(`https://jsonplaceholder.typicode.com/posts/${postId} `)
    .then((response) => response.json())
    .then((json) => displayPost(json));

function displayPost(posts) {
    let htmlToRender = ''
    // posts() => {
    htmlToRender += `
            <h3>Title:${posts.title}</h3>
            <p>Author: Ruth James</p>
            <p>${posts.body}</p>
            <button class="comment">View Comments</button>
    `
    // console.log(htmlToRender);
    // }
    document.querySelector('.post-data').innerHTML = htmlToRender;

    viewComment();
}


function viewComment() {
    const button = document.querySelector('button')


    //add eventListener
    button.addEventListener('click', () => { 

        // Write function to get comments
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => response.json())
            .then((json) => displayComments(json));

        //functon to display comments
        function displayComments(comments) {
            let htmlToRender = ''
            comments.forEach(comments => {
                htmlToRender += `
            <h4>Name:${comments.name}</h4>
            <p>Email:${comments.email}</p>
            <p>${comments.body}</p>
           
        `

            });

            document.querySelector('.comment-data').innerHTML = htmlToRender;


             document.querySelectorAll('.delete').forEach(deleteButton => {
                 deleteButton.addEventListener('click', () =>{
                     comments.removeChild(comments)
                 })
             })
             
        }
    })
}
