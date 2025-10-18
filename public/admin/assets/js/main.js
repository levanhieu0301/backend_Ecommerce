// Create an instance of Notyf
var notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'top',
  },
  dismissible	: true
});
const checkNotyf = sessionStorage.getItem("notyf");
if(checkNotyf){
  const {type, message} = JSON.parse(checkNotyf);
  if(type == "error"){
    notyf.error(message);
  }else {
    notyf.success(message);
  }
  sessionStorage.removeItem("notyf");
}

const drawNotyf = (type, message) => {
  sessionStorage.setItem("notyf", JSON.stringify({
    type: type,
    message:message
  }))
}
//End Create an instance of Notyf


// Validate form articleCreateCategoryForm
const formArticle =  document.querySelector("#articleCreateCategoryForm")
if(formArticle) {
  const validator = new JustValidate('#articleCreateCategoryForm');
  validator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Vui lòng nhập tên danh mục',
      },
    ])
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
        if(data.code == "error"){
          notyf.error(data.message);
        }else{
          //notyf.success(data.message);
          drawNotyf(data.code, data.message)
          location.reload();
        }
      })

    });
}

// End Validate form articleCreateCategoryForm