import React, {useState} from 'react';
import './assets/main.css';
import WeatherBar from "./WeatherBar";

function App() {
    const [value, setValue] = useState('');
    const [weather, setWeather] = useState(null);

    // const getData2 = async ()=>{
    //     const responseMain = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}&appid=b05c48dc7af7a4871fb96d46b62056ad`);
    //     let dataMain = await responseMain.json();
    //     console.log(dataMain , "Main Data")
    //
    // }

    const getData = async () => {
        try {
            const responseMoreInfo = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=b05c48dc7af7a4871fb96d46b62056ad`);
            const dataMoreInfo = await responseMoreInfo.json();

            if (dataMoreInfo.length === 0) {
                alert('City not found!');
                return;
            }

            const lon = dataMoreInfo[0].lon;
            const lat = dataMoreInfo[0].lat;

            console.log(lat, lon, "Coordinates fetched");

            const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=b05c48dc7af7a4871fb96d46b62056ad`);
            const weatherData = await weatherRes.json();

            setWeather(weatherData);
            console.log(weatherData, "Data more info");

            const responseMain = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}&appid=b05c48dc7af7a4871fb96d46b62056ad`);
            let dataMain = await responseMain.json();
            console.log(dataMain , "Main Data")
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div style={{
            backgroundImage: `url("https://w0.peakpx.com/wallpaper/577/915/HD-wallpaper-blue-note-3-mesh-blue-galaxy-gnote-mesh-note-samsung-texture.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight: '100vh'
        }}>
            {weather ?
                <WeatherBar data={weather}/>
                :
                <div className="container-fluid">
                    <div className="row">
                        <div style={{padding: '50px', display: 'flex', justifyContent: 'center'}} className="col-12">
                            <form onSubmit={(ev) => ev.preventDefault()}>
                                <input className="search-input" onChange={(ev) => setValue(ev.target.value)}
                                       placeholder="Write the City name"/>
                                <button className="search-button" onClick={getData}>Search</button>
                                <button>Clickkkkk</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
