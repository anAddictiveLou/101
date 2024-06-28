document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postsDiv = document.getElementById('posts');

    postForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });

        const newPost = await response.json();
        displayPost(newPost);
    });

    const loadPosts = async () => {
        const response = await fetch('/api/posts');
        const posts = await response.json();
        posts.forEach(post => displayPost(post));
    };

    const displayPost = (post) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postsDiv.appendChild(postDiv);
    };

    loadPosts();
});

