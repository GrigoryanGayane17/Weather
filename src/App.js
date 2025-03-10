import React, {useState} from 'react';

function App(props) {
    const [value, setValue] = useState('')
    let lon
    let lat
    const lonAndLen = async () => {
        const resLaTLon = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=b05c48dc7af7a4871fb96d46b62056ad`)
            .then(response => response.json())  // Convert response to JSON
            .then(data => {
                lon = data[0].lon;
                lat = data[0].lat
            })    // Log the actual data
            .catch(error => console.error("Error fetching data:", error));

        console.log(lat, lon)

        const resData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b05c48dc7af7a4871fb96d46b62056ad`)
            .then(response => response.json())  // Convert response to JSON
            .then(data => {
                console.log(data)
            })    // Log the actual data
            .catch(error => console.error("Error fetching data:", error));
    }

    return (<div>
        <form onSubmit={(ev) => ev.preventDefault()}>
            <input onChange={(ev) => setValue(ev.target.value)} placeholder={'lalala'}/>
            <button onClick={() => lonAndLen()}>click</button>
            <p>sdjhfbdhf</p>
        </form>
    </div>);
}

export default App;