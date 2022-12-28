function serializeForm(formNode) {
    const { elements } = formNode;
    let post = new Object();
    dataArr = Array.from(elements)
        .filter((item) => !!item.name)
        .forEach((element) => {
          const { name, value } = element;
          if (name === "post_image") {
            post[name] = element.getAttribute('base64');
            if (post[name] === null) {
              alert("Download an image, please");
              throw new Exeption("Image is null");
            }
          }
          else
            post[name] = value;
    });

    let oldPosts = JSON.parse(localStorage.getItem("posts"));
    if (oldPosts === null) oldPosts = [];
    oldPosts.push(post);
    localStorage.setItem("posts", JSON.stringify(oldPosts));
}

function handleFormSubmit(event) {
    event.preventDefault();
    serializeForm(applicantForm);
}

const applicantForm = document.getElementById('post_form');
applicantForm.addEventListener('submit', handleFormSubmit);

