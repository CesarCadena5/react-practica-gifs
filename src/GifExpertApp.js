import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifsExpertApp = () => {
    const [categories, setCategories] = useState(['']);

    return(
        <>
            <h2>Gifs</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {categories.map( c => <GifGrid key={c} category={c}>{c}</GifGrid> )}
            </ol>
        </>
    )
}

export default GifsExpertApp;
