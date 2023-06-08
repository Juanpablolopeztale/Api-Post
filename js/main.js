fetch('https://jsonplaceholder.typicode.com/users/4') // Change the URL to fetch the desired user profile
  .then(response => response.json())
  .then(profileData => {
    const profileContainer = document.getElementById('profile-container');

    const profileDiv = document.createElement('div');
    profileDiv.className = 'profile';

    const profileName = document.createElement('h2');
    profileName.className = 'profile-name';
    profileName.textContent = profileData.name;

    const profileEmail = document.createElement('p');
    profileEmail.className = 'profile-email';
    profileEmail.textContent = profileData.email;

    profileDiv.appendChild(profileName);
    profileDiv.appendChild(profileEmail);

    profileContainer.appendChild(profileDiv);
  });

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
