window.onload = function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api.ipify.org?format=jsonp&callback=DisplayIP";
    document.getElementsByTagName("head")[0].appendChild(script);
};
function DisplayIP(response) {
    document.getElementById("ip").innerHTML = response.ip;
    // document.getElementById("ip").innerHTML = "Your IP Address is " + response.ip;
}