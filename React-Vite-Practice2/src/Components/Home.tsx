import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";
import './home.css';
import GPSWeather from "./GPSWeather";
const Home = () =>{
    const [search, setSearch] = useState<string>("");

    function onClickNowWeather() {
        {<Weather search={search}/>}
    }


    function onClickGPSWeather() {
        {<GPSWeather/>}
    }

    
    return(
        <>
            <Header/>
            <Search setSearch={setSearch}/>
            <button onClick={onClickNowWeather}>
                현재 날씨
            </button>
            <button onClick={onClickGPSWeather}>
                현위치 날씨
            </button>
            <button>
                5일간 날씨
            </button>

            <Weather search={search}/>
        </>
    )
}


export default Home;