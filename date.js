

exports.getDate = function(){

const today = new Date();

const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
};


return day = today.toLocaleDateString("en-US", options);

}
exports.getDay = function(){

    const today = new Date();

let options = {
    weekday: "long",
};

return day = today.toLocaleDateString("en-US", options);

}
