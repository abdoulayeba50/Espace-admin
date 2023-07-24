const users = [{ id:1, nom:'Ba', prenom:'Abdoulaye', age: 50 }]; 
const validateButton = document.getElementById('Valider');

validateButton.addEventListener('click', addUser);

//Fonctionalités
function addUser(e) {
    e.preventDefault();
    const enteredUsersData = {
        id: users.length !== 0 ? users[users.length - 1].id + 1 : 1,
        nom : document.getElementById('nom').value,
        prenom : document.getElementById('prenom').value,
        age : document.getElementById('age').value,
    };
    if(
        enteredUsersData.nom !=='' &&
        enteredUsersData.prenom !=='' &&
        enteredUsersData.age !=='' 
    ) {
        users.push(enteredUsersData);
       console.log(users);
    }
}
