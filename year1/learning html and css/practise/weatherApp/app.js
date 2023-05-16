window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            //console.log(position);
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy='hptts://proxyBoy.com/fuckU-Bech/';
            const api=`${proxy}https://api.yourMama.net/fuckYou/${lat},${long}`;
            fetch(api)
                .then(response=>{
                    return response.json();
                })
                .then(data =>{
                  console.log(data);
                  const {temperature, summary, icon} = data.currently;
                  //set DOM elements from the API
                  temperatureDegree.textContent = temperature;
                  temperatureDescription.textContent = summary;
                  locationTimezone.textContent = data.timezone;
                    //set icon
                    seticons(icon, document.querySelector('.icon'))
                });
            });
    }
    function seticons(item,iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon])
    }
});