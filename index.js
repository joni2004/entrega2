







function renderFormData() {
    var sortBy = document.getElementById("sortBy").value; 
  
    
    formDataList.sort(function(a, b) {
      var fieldA = a[sortBy].toLowerCase();
      var fieldB = b[sortBy].toLowerCase();
  
      if (fieldA < fieldB) {
        return -1;
      }
      if (fieldA > fieldB) {
        return 1;
      }
      return 0;
    });
  
   
    var infoContainer = document.getElementById("infoContainer");
  
    
    infoContainer.innerHTML = "";
  
  
    for (var i = 0; i < formDataList.length; i++) {
      var formData = formDataList[i];
  
      var infoElement = document.createElement("div");
      infoElement.innerHTML = "Nombre: " + formData.name + "<br>Apellido: " + formData.lastName + "<br>Empresa: " + formData.company + "<br>Salario: " + formData.salary;
  
      infoContainer.appendChild(infoElement);
    }
  }





var sortField = ""; 
var sortOrder = "asc"; 
function renderFormData() {
  var infoContainer = document.getElementById("infoContainer");

  
  infoContainer.innerHTML = "";

 
  formDataList.sort(function(a, b) {
    var fieldA = a[sortField];
    var fieldB = b[sortField];

   
    if (sortOrder === "asc") {
      if (fieldA < fieldB) {
        return -1;
      }
      if (fieldA > fieldB) {
        return 1;
      }
    } else if (sortOrder === "desc") {
      if (fieldA > fieldB) {
        return -1;
      }
      if (fieldA < fieldB) {
        return 1;
      }
    }

    return 0;
  });

  
  for (var i = 0; i < formDataList.length; i++) {
    var formData = formDataList[i];

    var infoElement = document.createElement("tr");
    infoElement.innerHTML =
      "<td>" + formData.name + "</td>" +
      "<td>" + formData.lastName + "</td>" +
      "<td>" + formData.company + "</td>" +
      "<td>" + formData.salary + "</td>";

    infoContainer.appendChild(infoElement);
  }

}
function sortData(field) {
    if (sortField === field) {
   
      sortOrder = sortOrder === "asc" ? "desc" : "asc";
    } else {
      
      sortField = field;
      sortOrder = "asc";
    }
  
    renderFormData();
  }

