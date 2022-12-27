let posts = JSON.parse(localStorage.getItem('posts'));
if (posts !== null)
    addGaleryItemFromStorage(posts);

function addGaleryItemFromStorage(posts) {
    posts.forEach(post => {
        let galery = document.getElementsByClassName("galery")[0];

        let galeryItem = document.createElement('div');
        galeryItem.classList.add('galery__item');

        //litlle image on the left top corner
        let imgContainer = document.createElement('div');
        imgContainer.setAttribute('style', 'height: 0;');
        let short_icon = document.createElement('img');
        short_icon.setAttribute('src', 'assets\\imgs\\image-icon-2.png');
        short_icon.classList.add('image-icn');
        imgContainer.appendChild(short_icon);
        galeryItem.appendChild(imgContainer);
        
        let galeryImg = document.createElement('img');
        galeryImg.setAttribute('src', post.post_image);
        // galeryImg.setAttribute('src', post);
    
        galeryImg.classList.add('post-img');

        let author = document.createElement('a');
        author.setAttribute('href', '');
        author.classList.add('post-author');
        author.textContent = post.autor_name;
        
        let tag = document.createElement('a');
        tag.setAttribute('href', '');
        tag.classList.add('tag');
        tag.textContent = post.post_tags;
        
        galeryItem.appendChild(galeryImg);
        galeryItem.appendChild(author);
        galeryItem.appendChild(tag);
        galery.appendChild(galeryItem);
    });
}