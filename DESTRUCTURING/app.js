/*
function checkFollow() {return "is follow done?"};
function checkAlert() {return "is Alert done?"};

const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notifications: {
        isFollow: follow,
        isAlert: alert
    }
}
const {notifications} = settings
console.log(notifications) // {isFollow: 'is follow done?', isAlert: 'is Alert done?'}
*/

/* 
function checkFollow() {return "is follow done?"};
function checkAlert() {return "is Alert done?"};

const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notifications: {
        follow: follow,
        alert: alert
    }
}
const {notifications} = settings
console.log(notifications) // {follow: 'is follow done?', alert: 'is Alert done?'}
*/


/* 
function checkFollow() {return "is follow done?"};
function checkAlert() {return "is Alert done?"};

const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notifications: {
        follow, //프로퍼티의 키(key)와 값(value)의 이름이 같을때 하나로 축약해서 사용할 수도 있음.
        alert 
    }
}
const {notifications} = settings
console.log(notifications)  // {follow: 'is follow done?', alert: 'is Alert done?'}
 */