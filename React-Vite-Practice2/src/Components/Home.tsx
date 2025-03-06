import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";
import './home.css';
const Home = () =>{
    const [search, setSearch] = useState<string>("");

    return(
        <>
            <Header/>
            <Search setSearch={setSearch}/>
            <Weather search={search}/>
        </>
    )
}


export default Home;