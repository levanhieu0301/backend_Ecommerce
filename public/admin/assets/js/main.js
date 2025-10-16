
// Validate form articleCreateCategoryForm
const formArticle =  document.querySelector("#articleCreateCategoryForm")
if(formArticle) {
  const validator = new JustValidate('#articleCreateCategoryForm');
  validator
    // .addField('#name', [
    //   {
    //     rule: 'required',
    //     errorMessage: 'Vui lòng nhập tên danh mục',
    //   },
    // ])
    .onSuccess(( event ) => {
      const name = event.target.name.value;
      const parent = event.target.parent.value;
      const description = event.target.description.value;

      const formData  = new FormData();
      formData.append("name", name);
      formData.append("parent", parent);
      formData.append("description", description);

      fetch(`/${pathAdmin}/article/category/create`, {
        method: "POST",
        body: formData
      })
      .then(res => res.json())
      .then(data=> {
        console.log(data)
      })

    });
}

// End Validate form articleCreateCategoryForm