// Afficher les utilisateurs actifs en vert et les utilisateurs inactifs en rouge. Si je clique sur l’un des users son état doit changer et passer de rouge à vert ou de vert à rouge

document.addEventListener('DOMContentLoaded', () => {
    const userArray = [
        { firstname: 'Alice', lastName: 'Dupont', isActive: true },
        { firstname: 'Bob', lastName: 'Martin', isActive: false },
        { firstname: 'Charlie', lastName: 'Durand', isActive: true },
        { firstname: 'Diana', lastName: 'Leclerc', isActive: false },
        { firstname: 'Eve', lastName: 'Lambert', isActive: true }
    ];

    function displayUsers() {
        const tableBody = document.getElementById('users-table');
        tableBody.innerHTML = '';
        userArray.forEach((user, index) => {
            const row = document.createElement('tr');
            row.className = user.isActive ? 'active' : 'inactive';
            
            const cellFirstname = document.createElement('td');
            cellFirstname.textContent = user.firstname;
            row.appendChild(cellFirstname);

            const cellLastname = document.createElement('td');
            cellLastname.textContent = user.lastName;
            row.appendChild(cellLastname);

            const cellStatus = document.createElement('td');
            cellStatus.textContent = user.isActive ? 'active' : 'inactive';
            row.appendChild(cellStatus);

            row.addEventListener('click', () => {
                toggleUserStatus(index);
            });

            tableBody.appendChild(row);
        });
    }

    function toggleUserStatus(index) {
        userArray[index].isActive = !userArray[index].isActive;
        displayUsers();
    }

    displayUsers();
});