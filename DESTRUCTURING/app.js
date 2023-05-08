/*
const settings = {
    color: {
        theme: "dark",
        mix: "pink"
    },
    notifications: {
        follow: true,
        alerts: true,
        unfollow: false
    }
};

const {
    color,
    notifications
} = settings;

console.log(color) // {theme: 'dark', mix: 'pink'}
console.log(notifications) 
// {   follow: true,
//     alerts: true,
//     unfollow: false  }
*/

/*
const settings = {
    color: {
        theme: "dark",
        mix: "pink"
    },
    notifications: {
        follow: true,
        alerts: true,
        unfollow: false
    }
};

const {
    color: {theme},
    notifications: {follow}
} = settings;

console.log(theme) // dark
console.log(follow) // true
*/

/*
const settings = {
    color: {
        theme: "dark",
        mix: "pink"
    },
    notifications: {
        follow: true,
        alerts: true,
        unfollow: false
    }
};

const {
    notifications
} = settings;
console.log(notifications) // {follow: true, alerts: true, unfollow: false}


const noti = settings.notifications;
console.log(noti)  // {follow: true, alerts: true, unfollow: false}
*/

/*
const settings = {
    color: {
        theme: "dark",
        mix: "pink"
    },
    notifications: {
        follow: true,
        alerts: true,
        unfollow: false
    }
};

const {
    notifications: {follow} // notifications 변수는 가져오지 않으며, 그 안의 follow 변수만 갖고 옴.
} = settings;

console.log(notifications) // 오류 발생
console.log(follow) // true
*/

/*
const settings = {
    color: {
        theme: "dark",
        mix: "pink"
    },
    notifications: {
        alerts: true,
        unfollow: false
    }
};

const {
    notifications: {follow}
} = settings;

console.log(follow) // undefined
*/

/*
const settings = {
    color: {
        theme: "dark",
        mix: "pink"
    },
    notifications: {
        alerts: true,
        unfollow: false
    }
};

const {
    notifications: {follow = "do not have"}// 해당 프로퍼티가 없을 경우의 '디폴트값(=)' 설정 
} = settings;

console.log(follow) // do not have
*/
