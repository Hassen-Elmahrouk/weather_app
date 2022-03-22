let weather={ //weather is js object
    apiKey:"822898a0802a4bc8ba0ac8f382b18d29",//elements are separated by ', ' and between element and it's value we have ':'
    fetchweather : function(city)  { //fetch fonction
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city +"&units=metric&appid=" 
        + this.apiKey)
        .then(function(res) {
          if (res.ok) {
            
           
            return res.json();
          }
        })
        .then((value)=>this.displayweather(value))
       
        .catch(function(err) {
            document.querySelector(".city").innerText="retry"
            document.querySelector(".temp").innerText="-"
            document.querySelector(".description").innerText="-"
            document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+"-"+".png"
            document.querySelector(".humidity").innerText="-"
            document.querySelector(".wind").innerText="-"
        });
      },
    displayweather : function (value) {
        console.log(value)
        console.log("test")
        console.log(JSON.stringify(value))

          const { name } = value; //result is a json  file
          const { icon, description } = value.weather[0];
          const { temp, humidity } = value.main;
          const { speed } = value.wind;
          document.querySelector(".city").innerText="weather in " +name
          document.querySelector(".temp").innerText=temp+"°"
          document.querySelector(".description").innerText=description
          document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+".png"
          document.querySelector(".humidity").innerText="humidity : "+humidity +"%"
          document.querySelector(".wind").innerText="Wind_speed : "+speed +"kmh"
          document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?"+name+"')"
        },
    search :function(){
    
        this.fetchweather(document.querySelector(".search-bar").value)
        document.getElementById("dd").classList.remove("loading")

    }
     


}
document.querySelector(".btn").addEventListener('click',()=>weather.search())
//weather.fetchweather("Tunisia")
