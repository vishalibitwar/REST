const http = new EasyHTTP;
const ui =new UI;


const showFaculty = document.getElementById('showfaculty');
const addfaculty =document.getElementById('addfaculty');
const updatefaculty = document.getElementById('updatefaculty');
const removefaculty = document.getElementById('removefaculty');
const output = document.getElementById('output');
const searchfaculty = document.getElementById('searchfaculty');


searchfaculty.addEventListener('click',function()
{
   ui.showSearchFaculty();

});


updatefaculty.addEventListener('click',function()
{
      ui.showUpdateFaculty();

});


removefaculty.addEventListener('click',function()
{
      ui.showRemoveFaculty();

});





output.addEventListener('click', function(e)
{

   //search Faculty
   if(e.target.id == 'singlefaculty'){  
    if(ui.validateId())
    {
      const id = document.getElementById('idfield').value;
      http.get(`http://my-json-server.typicode.com/vishalibitwar/api/faculty/${id}`)
   .then(data =>   ui.showSingleFaculty(data) )
   .catch(err => console.log(err));
     
    }else{         
     document.getElementById('alert').innerHTML =  `        
         <p class="alert alert-danger text-center "> Please, Enter Valid Id</p>
        `;         
        setTimeout(() => {           
          ui.clearAlert();
        }, 2000);
       }   
    } 
  
 
    // Removing Faculty     
    if(e.target.id == 'removebtn'){  
      if(ui.validateId())
      {
       const id = document.getElementById('idfield').value;
        http.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(data => ui.showDeleteResource(data))
        .catch(err => console.log(err));
                
      }else{         
       document.getElementById('alert').innerHTML =  `        
           <p class="alert alert-danger text-center "> Please, Enter Valid Id</p>
          `;         
          setTimeout(() => {           
            ui.clearAlert();
          }, 2000);
         }   
      }
 
  //Updating New Faculty
   if(e.target.id == 'searchbtn'){  
     if(ui.validateId())
     {
      const id = document.getElementById('idfield').value;
       http.get(`http://my-json-server.typicode.com/vishalibitwar/api/faculty/${id}`)
    .then(data =>   ui.showUpdateFacultyForm(data, id) )
    .catch(err => console.log(err));  

     }else{         
      document.getElementById('alert').innerHTML =  `        
          <p class="alert alert-danger text-center "> Please, Enter Valid Id</p>
         `;         
         setTimeout(() => {           
           ui.clearAlert();
         }, 2000);
        }   
     }

     if(e.target.id == 'update' )
     {     
         if(ui.validateFields()){          
           const name = document.getElementById('name').value;
           const designation = document.getElementById('designation').value;
           const qualification = document.getElementById('qualification').value;
           const email = document.getElementById('email').value;
           const id= document.getElementById('hidden').value;
 
           const data = {              
               name: name,
               designation: designation,
               qualification: qualification,
               email: email
           }
           

           // Create User
           http.put(`http://my-json-server.typicode.com/vishalibitwar/api/faculty/${id}`, data)
             .then(data =>  ui.showJsonResponse(data))
             .catch(err => console.log(err)); 
         }else{
           document.getElementById('alert').innerHTML =  `        
           <p class="alert alert-danger text-center"> Please make sure all fields are filled out correctly</p>
          `;         
          setTimeout(() => {           
            ui.clearAlert();
          }, 2000);
         }       
              
     }

   // For Adding new Faculty
    if(e.target.id == 'submit' )
    {     
        if(ui.validateFields()){          
          const name = document.getElementById('name').value;
          const designation = document.getElementById('designation').value;
          const qualification = document.getElementById('qualification').value;
          const email = document.getElementById('email').value;

          const data = {              
              name: name,
              designation: designation,
              qualification: qualification,
              email: email
          }
          
          // Create User
          http.post('http://my-json-server.typicode.com/vishalibitwar/api/faculty/', data)
            .then(data =>  ui.showJsonResponse(data))
            .catch(err => console.log(err));
        }else{
          document.getElementById('alert').innerHTML =  `        
          <p class="alert alert-danger text-center"> Please make sure all fields are filled out correctly</p>
         `;         
         setTimeout(() => {           
           ui.clearAlert();
         }, 2000);
        }       
             
    }
    e.preventDefault();   
});


showFaculty.addEventListener('click', function()
{
  // Get Users
  http.get('http://my-json-server.typicode.com/vishalibitwar/api/faculty/')
    .then(data =>  ui.showAllFaculty(data) )
    .catch(err => console.log(err));
} );

addfaculty.addEventListener('click',function()
{   ui.showAddFaculty();
});











