$(document).ready(function() {
    $('#employeeForm').on('submit', function(event) {
        event.preventDefault();

        const employee = {
            name: $('#name').val().trim(),
            surname: $('#surname').val().trim(),
            salary: $('#salary').val(),
            birthdate: $('#birthdate').val(),
            experience: $('#experience').val()
        };

        let outputHtml = `
            <div class="data-item"><strong>First Name:</strong> ${employee.name}</div>
            <div class="data-item"><strong>Surname:</strong> ${employee.surname}</div>
            <div class="data-item"><strong>Salary:</strong> $${Number(employee.salary).toLocaleString()}</div>
            <div class="data-item"><strong>Birthdate:</strong> ${employee.birthdate}</div>
            <div class="data-item"><strong>Experience Level:</strong> ${employee.experience.toUpperCase()}</div>
        `;

        $('#outputDisplay').html(outputHtml);
    });
});