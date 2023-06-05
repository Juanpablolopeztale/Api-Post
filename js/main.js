fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const postsContainer = document.getElementById('posts-container');

    data.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'post';

      const postTitle = document.createElement('h2');
      postTitle.className = 'post-title';
      postTitle.textContent = post.title;

      const postBody = document.createElement('p');
      postBody.className = 'post-body';
      postBody.textContent = post.body;

      postDiv.appendChild(postTitle);
      postDiv.appendChild(postBody);

      postsContainer.appendChild(postDiv);
    });
  });
