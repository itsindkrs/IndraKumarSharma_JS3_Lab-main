let searchBox = document.getElementById("search")
searchBox.addEventListener("keypress", (event) =>{
    if(event.keyCode == 13){
        callApi(searchBox.value)
    }
})

function callApi(cityName) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`
    fetch(url)
    .then(res => res.json())
    .then(res => displayData(res))
}

function displayData(res){
    console.log(res)

    let city = document.querySelector(".city")
    let dateField = document.querySelector(".date")
    let temp = document.querySelector(".temp")
    let weather = document.querySelector(".weather")
    let highLowTemp = document.querySelector(".hi-low")

    city.innerText = res.name + ", " + res.sys.country
    temp.innerText = Math.round(res.main.temp) + "°c"
    weather.innerText = res.weather[0].main
    highLowTemp.innerText = Math.round(res.main.temp_min) + "°c / " + Math.round(res.main.temp_max) + "°c"
    dateField.innerText = formDate()
}

function formDate(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let todaysDate = new Date()
    let day = days[todaysDate.getDay()]
    let month = months[todaysDate.getMonth()]
    let year = todaysDate.getFullYear()
    let date = todaysDate.getDate()
    return `${day} ${date} ${month} ${year}`
}