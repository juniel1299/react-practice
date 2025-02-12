import { useState } from "react"
import Header from "./Header"
import List from "./List"
import Search from "./Search"
const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <Header/>
            <Search setSearchTerm={setSearchTerm}/>
            <List searchTerm={searchTerm}/>
        </div>
    )
}

export default Home;