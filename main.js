const users=["cademy_all","cademy_zeyad","cademy_palloat","yousef","rawan","omar","kareem"]
const filteredUser =[]
function filter() {
    for (let start = 0; start < users.length; start++) {
        if (users[start].startsWith("cademy_",0)) {
            filteredUser.push(users[start])
        }
    }
    return filteredUser
}
console.log( filter());

function filterUsers(users, condition) {
    const filteredUsers = [];

    for (let i = 0; i < users.length; i++) {
        if (condition(users[i])) {
            filteredUsers.push(users[i]);
        }
    }
    return filteredUsers;
}
const filteredUsers = filterUsers(users, user =>  user.includes('cademy_'));
console.log(filteredUsers);