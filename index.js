function submitData(name, email) {
    let formData = {
      name: name,
      email: email
    };
  
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        let newId = data.id;
        let idText = document.createTextNode(newId);
        document.body.appendChild(idText);
      })
      .catch(function(error) {
        let errorText = document.createTextNode(error.message);
        document.body.appendChild(errorText);
      });
  }