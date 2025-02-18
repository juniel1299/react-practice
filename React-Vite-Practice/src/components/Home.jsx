import { useState } from "react";
import Header from "./Header";
import List from "./List";
import Search from "./Search";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [totalCount, setTotalCount] = useState(0);

    return (
        <div>
            <Header />
            <Search setSearchTerm={setSearchTerm} totalCount={totalCount} />
            <List searchTerm={searchTerm} setTotalCount={setTotalCount} />
        </div>
    );
}

export default Home;