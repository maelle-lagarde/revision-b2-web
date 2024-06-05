// afficher uniquement les user actifs dans la console.

const userArray = [
    { firstname: 'Alice', lastName: 'Dupont', isActive: true},
    { firstname: 'Bob', lastName: 'Martin', isActive: false},
    { firstname: 'Charlie', lastName: 'Durand', isActive: true},
    { firstname: 'Diana', lastName: 'Leclerc', isActive: false},
    { firstname: 'Eve', lastName: 'Lambert', isActive: true}
  ];

userArray.forEach(user => {
    if (user.isActive)
        console.log(user.firstname, user.lastName);    
});