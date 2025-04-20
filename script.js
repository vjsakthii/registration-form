document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
  
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
  
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${course}</td>
      <td>${gender}</td>
      <td>${email}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
  
    document.getElementById('studentForm').reset();
  });
  
  document.getElementById('studentTable').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('delete-btn')) {
      e.target.parentElement.parentElement.remove();
    }
  });