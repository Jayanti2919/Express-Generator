
async function handleSubmit(event) {
    event.preventDefault();
    const companyInput = document.querySelector('#company')
    const company = companyInput.value;
    const employee = document.querySelector('#employee').value
    const response = await fetch('http://localhost:3000/join', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            company: company,
            employee: employee,
        })
    })
    const data = await response.json()
    console.log(data)
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.register-company-form');
    form.addEventListener('submit', handleSubmit);
  });
  