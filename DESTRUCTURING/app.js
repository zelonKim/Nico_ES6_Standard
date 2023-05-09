/* 
function saveSettings(settings) {
    console.log(settings);
}
saveSettings({
    follow: true, 
    alert: true, 
    color: "green"
});
// {follow: true, alert: true, color: 'green'}
 */

/* 
function saveSettings({follow, alert, color}) {
    console.log(follow);
}
saveSettings({
    follow: true, 
    alert: true, 
    color: "green", 
});
// true 
*/

/* 
function saveSettings({follow, alert, color}) {
    console.log(color);
}

saveSettings({
    follow: true, 
    alert: true, 
    color: "green", 
});
// green 
*/


/*
function saveSettings({follow, alert, color, mkt}) {
    console.log(mkt);
}

saveSettings({
    follow: true, 
    alert: true, 
    color: "green", 
}); 
// undefined 
*/


/* 
function saveSettings({follow, alert, color, mkt="hello"}) {
    console.log(mkt);
}

saveSettings({
    follow: true, 
    alert: true, 
    color: "green", 
}); 
// hello 
*/

/* 
function saveSettings({notifications, color: {theme}}) {
    console.log(notifications);
}

saveSettings({
    notifications: {
        follow: true,
        alert: true,
        mkt: false
    },
    color: {
        theme: "blue"
    }
});
// {follow: true, alert: true, mkt: false}
 */


/*
function saveSettings({notifications, color: {theme}}) {
    console.log(theme);
}

saveSettings({
    notifications: {
        follow: true,
        alert: true,
        mkt: false
    },
    color: {
        theme: "dark"
    }
});
// dark
 */