function loadFakeImages() {
    fetch(`https://picsum.photos/v2/list?page=2&limit=6`)
        .then(response => response.json())
        .then(data => {
            for (const photo of data) {
                addGaleryItem(photo);
            }
        });
}

function addGaleryItem(photo) {
    let galery = document.getElementsByClassName("galery")[0];
    console.log(photo.id);

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
    galeryImg.setAttribute('src', photo.download_url + '.webp');
    galeryImg.classList.add('post-img');

    let author = document.createElement('a');
    author.setAttribute('href', '');
    author.classList.add('post-author');
    author.textContent = photo.author;
    
    let tag = document.createElement('a');
    tag.setAttribute('href', '');
    tag.classList.add('tag');
    tag.textContent = 'nature';
    
    galeryItem.appendChild(galeryImg);
    galeryItem.appendChild(author);
    galeryItem.appendChild(tag);
    galery.appendChild(galeryItem);
}