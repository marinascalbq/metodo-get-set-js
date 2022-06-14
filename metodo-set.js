function getAdmins(map){
    let admins = [];
    for ([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Marina', 'Admin');
usuarios.set('Marcio', 'Admin');
usuarios.set('Marluce', 'User');
usuarios.set('Anderson', 'Admin');

console.log(getAdmins(usuarios));