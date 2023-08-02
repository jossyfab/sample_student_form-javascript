// get form element

// attache sumit listner

var form = document.getElementById('form');
console.log(form, 'form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const info = {};

  //get the usera inputs
  const firstName = document.getElementById('first_name').value;
  const middleName = document.getElementById('middle_name').value;
  const lastName = document.getElementById('last_name').value;
  const dateBirth = document.getElementById('date_birth').value;
  const studentId = document.getElementById('student_id').value;
  const streetAddress = document.getElementById('street_address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state_province').value;
  const country = document.getElementById('country').value;
  const zipCode = document.getElementById('zip_code').value;
  const email = document.getElementById('email').value;
  

  info.firstName = firstName;
  info.middleName = middleName;
  info.lastName = lastName;
  info.dateBirth = dateBirth;
  info.studentId = studentId;
  info.streetAddress = streetAddress;
  info.city = city;
  info.state = state;
  info.country = country;
  info.zipCode = zipCode;
  info.email = email;
 

  localStorage.setItem('student-info', JSON.stringify(info));


  const ls = localStorage.getItem('student-info');
  let studentsInfo = ls ? JSON.parse(ls) : [];

  if (studentsInfo && Array.isArray(studentsInfo)) {
    // if data exist
    studentsInfo.push(info);
  } else {
    //  if value does not exist
    studentsInfo = [];

    studentsInfo.push(info);
  }
 
  localStorage.setItem('student-info', JSON.stringify(studentsInfo));

  window.location.replace('./info.html');
});
