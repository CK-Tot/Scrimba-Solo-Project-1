const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const postContainer = document.getElementById('post-container');


const renderPost = posts =>  {

    postContainer.innerHTML = '';

   const postHTML =  posts.map(post => {
        return `
        <div class="post">
                    <div class="user-info">
                        <img src="${post.avatar}" alt="" class="post-avatar">

                        <div class="text">
                            <p class="user-name">${post.name}</p>
                            <span class="user-location">${post.location}</span>
                        </div>

                    </div>

                    <img src="${post.post}" alt="post" class="post-img">

                    <div class="interactions">
                        <button><img src="/images/icon-heart.png" class="liked" alt=""></button>
                        <button><img src="/images/icon-comment.png" alt=""></button>
                        <button><img src="/images/icon-dm.png" alt=""></button>
                    </div>

                    <div class="like-count">
                        <span>${post.likes} Likes</span>
                    </div>

                    <div class="comment-section">
                        <p>${post.username}</p>
                        <span>${post.comment}</span>
                    </div>
                </div>
        `
    }).join(' ');

    postContainer.innerHTML = postHTML;


    

}


renderPost(posts);