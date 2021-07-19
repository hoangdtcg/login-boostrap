const USER = 'user';
const CURRENT= 'currentUser';
function saveData(data) {
    let strData = JSON.stringify(data);
    window.localStorage.setItem(USER,strData);
}

function loadData() {
    if(localStorage.hasOwnProperty(USER)){
        let strData = window.localStorage.getItem(USER);
        let data = JSON.parse(strData);
        return data;
    }else{
        return [];
    }
}

function createUser(user) {
    let users = loadData();
    users.push(user);
    saveData(users);
}

function saveCurrentUser(name) {
    window.localStorage.setItem(CURRENT,name);
}

function loadCurrentUser() {
    if(localStorage.hasOwnProperty(CURRENT)){
        return window.localStorage.getItem(CURRENT)
    }else{
        return null;
    }

}