fetch('https://jsonplaceholder.typicode.com/posts ')
    .then(res => res.json())
    .then(data => {
        // display only 6 posts.
        const posts = [];

        for (let index = 0; index < 10; index++) {
            const post = data[index];
            posts.push(post)
        }

        displayPost(posts);
    })

/**
 * 
 * @param {Array} posts 
 */
function displayPost(posts) {

    let htmlToRender = ''
    posts.forEach(post => {

        htmlToRender += `
            <div class="blog1">
                <h3>Title:${post.title}</h3>
                <p>Author: Ruth James</p>
                <p>${post.body}</p>
                <a href='post.html?postId=${post.id}'>View Post</a>
            </div>
        `
    });

    document.querySelector('.main').innerHTML = htmlToRender;


}

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         //display 10 comments
//         const comments = [];

//         for (let index = 0; index < 10; index++) {
//             const comment = data[index];
//             comments.push(comment)
//         }
//         displayComments(comments)
//     })

// function displayComments(comments) {
//     let htmlToRender =''
//     const com = `
//             <div class="text4">
//                 <h3>Name: ${comments.name}</h3>
//                 <p>Email: ${comments.email}</p>
//                 <p>${comments.body}</p>
//             </div
//     `
    // document.querySelector('').innerHTML = htmlToRender;
//}

// button.addEventListener('click', () =>{
//     displayComments()
// })