let lat;
let lon;

let temp = document.querySelector('.temp')
let summary = document.querySelector('.summary')
let loc = document.querySelector('.location')
let kelvin = 273

window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            lon = position.coords.longitude
            lat = position.coords.latitude

            const APIKEY = "e69998c8d5dbc4270201fbb434d902ee"
            const END_POINT = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`

            fetch(END_POINT).then((res)=>{
                return res.json()
            }).then((data)=>{
                // console.log(data)
                temp.textContent = Math.floor(data.main.temp-kelvin) + ".C"
                summary.textContent = data.weather[0].description
                loc.textContent = data.name + " " + data.sys.country

            })
        })
    }
})