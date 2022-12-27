function serializeForm(formNode) {
    const { elements } = formNode
    Array.from(elements)
        .filter((item) => !!item.name)
        .forEach((element) => {
          const { name, value } = element;
          localStorage.setItem(name, value);
          console.log({ name, value });
    })
}

function handleFormSubmit(event) {
    event.preventDefault();
    serializeForm(applicantForm);
}

const applicantForm = document.getElementById('post_form');
applicantForm.addEventListener('submit', handleFormSubmit);

