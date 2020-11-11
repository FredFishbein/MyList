

exports.getDate = function(){

let today = new Date();

let options = {
    weekday: "short",
    day: "numeric",
    month: "long",
};


return day = today.toLocaleDateString("en-US", options);

}
exports.getDay = function(){

    let today = new Date();

let options = {
    weekday: "long",
};

return day = today.toLocaleDateString("en-US", options);

}
