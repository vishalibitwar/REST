class UI {

  showAllFaculty(faculty) {
    let output = '';
    faculty.forEach(current => {
      output += `
         <div class=" row mx-auto container justify-content-center">
     <div class="  col-sm-6 card mt-3 text-light bg-info">
      <div class="card-body ml-3">
      <div class="d-flex justify-content-center align-items-center">
      <h1 class="text-center" ><span> ${current.name}</span></h1>
      </div>        
        <p class="lead"> <i class="fas fa-user-tie btn btn-light mr-2 btn-lg rounded-circle "></i>${current.Designation}</p>
        <p class="lead"> <i class="fas fa-user-graduate btn btn-light  mr-2 btn-lg rounded-circle "></i> ${current.Qualification}</p>
        <p class="lead"> <i class="fas fa-lightbulb btn btn-light  mr-2 btn-lg rounded-circle "></i> ${current.Specialization}
        </p>
        <p class="lead"> <i class="fas fa-envelope btn btn-light  mr-2 btn-lg rounded-circle "></i> ${current.email}
      </div>
    </div>
  </div>  
         `;
    });
    document.getElementById('output').innerHTML = output;
  }


  showSingleFaculty(current) {
    document.getElementById('output').innerHTML = `
    <div class="row mx-auto container justify-content-center align-items-center">
            <div class=" col-sm-6 card mt-3 text-light  bg-info">
             <div class="card-body ml-3">
             <div class="d-flex justify-content-center">
             <h1><span class=""> ${current.name}</span>  </h1>
             </div>        
               <p class="lead"> <i class="fas fa-user-tie btn btn-light mr-2 btn-lg rounded-circle "></i>${current.Designation}</p>
               <p class="lead"> <i class="fas fa-user-graduate btn btn-light  mr-2 btn-lg rounded-circle "></i> ${current.Qualification}</p>
               <p class="lead"> <i class="fas fa-lightbulb btn btn-light  mr-2 btn-lg rounded-circle "></i> ${current.Specialization}
               </p>
               <p class="lead"> <i class="fas fa-envelope btn btn-light  mr-2 btn-lg rounded-circle "></i> ${current.email}
             </div>
           </div>
         </div>      
    `;
  }

  showAddFaculty() {
    document.getElementById('output').innerHTML = `      
    <div class="row container justify-content-center">
    <div class="col-sm-5 bg-info p-4 rounded text-light">
      <div id="alert"></div>
        <div class="form-group">
          <label class="lead" for="name">Name</label>
          <input type="text" id="name" class="form-control" spellcheck="false" autocomplete="off">
          <div class="form-group">
            <label class="lead" for="designation">Designation</label>
            <input type="text" id="designation" class="form-control" spellcheck="false" autocomplete="off">
            <div class="form-group">
              <label class="lead" for="qualification">Qualification</label>
              <input type="text" id="qualification" class="form-control" spellcheck="false" autocomplete="off">
              <div class="form-group">
                <label class="lead" for="email" >Email</label>
                <input type="email" id="email" class="form-control" spellcheck="false" autocomplete="off" required>
              </div>
              <div class="form-group">
                <button id="submit" class="btn btn-light">Submit</button>
              </div>
    </div>
  </div>

      `;
  }

  showJsonResponse(faculty) {
    console.log(faculty);
    document.getElementById('output').innerHTML = `
    <div class="row container justify-content-center">
      <div class="col-sm-5 json-response p-4 rounded text-dark">
         <h3 class="mb-2">Json Response</h3>
        <pre>
            {             
               id:${faculty.id},
               name:"${faculty.name}",
               designation:"${faculty.designation}",
               qualification:"${faculty.qualification}"
               email:"${faculty.email}",
            }
        </pre>        
      </div>
    </div>    
    `;
  }

  showUpdateFaculty() {
    document.getElementById('output').innerHTML =
      `
    <div class="row container mx-auto searchheight align-items-center justify-content-center ">
    <div class="col-sm-5 bg-info p-4 rounded text-light">
    <div id="alert"></div>
      <p class="lead text-center">Enter Id of Faculty</p>
      <form action="" class="form-inline  searchcontainer">           
         <div class="form-group">              
             <input  id="idfield" type="number" class="form-control mr-3">
             <button  id="searchbtn" class="btn mt-3 mt-sm-0 btn-outline-light" >Search</button>
         </div>             
      </form>
    </div>
  </div>           
     `;
  }

  showSearchFaculty() {

    document.getElementById('output').innerHTML =
      `
    <div class="row container mx-auto searchheight align-items-center   justify-content-center ">
    <div class="col-sm-5  bg-info p-4 rounded text-light">
    <div id="alert"></div>
      <p class="lead text-center">Enter Id of Faculty</p>
      <form action="" class="form-inline  searchcontainer">           
         <div class="form-group">              
             <input  id="idfield" type="number" class="form-control mr-3">
             <button  id="singlefaculty" class="btn btn-outline-light mt-3 mt-md-0" >Search</button>
         </div>             
      </form>
    </div>
  </div>           
     `;
  }


  showDeleteResource(data) {
    console.log(data);
    document.getElementById('output').innerHTML = `
    <div class="row container text-center justify-content-center align-items-center">
    <div class="col-sm-5 bg-outline-danger json-response p-4 rounded text-dark">            
       <div>                
          <button id="clearoutput"  class="btn btn-outline-danger rounded-circle p-3"><i
            class="fas fa-trash fa-5x"></i></button>
            <p class="lead">Resource Deleted</p>
       </div>                  
    </div>
  </div>   `;

    document.getElementById('clearoutput').addEventListener('click', function () {
      document.getElementById('output').innerHTML = ``;
    });
  }


  showRemoveFaculty() {
    document.getElementById('output').innerHTML = `
    <div class="row container mx-auto searchheight align-items-center  justify-content-center ">
    <div class="col-sm-5 bg-info p-4 rounded text-light">
    <div id="alert"></div>
      <p class="lead text-center">Enter Id of Faculty</p>
      <form action="" class="form-inline searchcontainer">           
         <div class="form-group ">              
             <input  id="idfield" type="number" class="form-control mr-3">
             <button  id="removebtn" class="btn btn-outline-light mt-3 mt-sm-0" >Search</button>
         </div>             
      </form>
    </div>
  </div>           
     `;
  }




  showUpdateFacultyForm(faculty, id) {
    document.getElementById('output').innerHTML = `      
  <div class="row container justify-content-center">
  <div class="col-sm-5 bg-info p-4 rounded text-light">
    <div id="alert"></div>
      <div class="form-group">
        <label class="lead" for="name">Name</label>
        <input type="text" id="name" class="form-control" spellcheck="false" autocomplete="off" value="${faculty.name}">
        <div class="form-group">
          <label class="lead" for="designation">Designation</label>
          <input type="text" id="designation" class="form-control" spellcheck="false" autocomplete="off" value="${faculty.Designation}"  >
          <div class="form-group">
            <label class="lead" for="qualification">Qualification</label>
            <input type="text" id="qualification" class="form-control" spellcheck="false" autocomplete="off" value="${faculty.Qualification}"  >
            <div class="form-group">
              <label class="lead" for="email" >Email</label>
              <input type="email" id="email" class="form-control" spellcheck="false" autocomplete="off"  value="${faculty.email}" required>
            </div>
            <div class="form-group">
              <button id="update" class="btn btn-light">Update</button>
            </div>
            <input id="hidden" type="hidden" value="${id}" >            
  </div>
</div>
    `;
  }
  validateId() {
    const idfield = document.getElementById('idfield');
    if (idfield.value == '' || idfield.value > 7 || idfield.value < 1)
      return false;
    else
      return true;
  }

  validateFields() {
    const name = document.getElementById('name');
    const designation = document.getElementById('designation');
    const qualification = document.getElementById('qualification');
    const email = document.getElementById('email');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.value == '' || designation.value == '' || qualification.value == '' || email.value == '')
      return false;
    else if (!email.value.match(mailformat))
      return false;
    else
      return true;
  }


  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

}
