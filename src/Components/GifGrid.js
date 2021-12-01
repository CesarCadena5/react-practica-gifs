import GifGridItem from "./GifGridItems";

import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return(
        <div>
            <h3> {category} </h3>
            {loading && <p>Cargando...</p>}
            <div className='container'>
                {
                    images.map( img => <GifGridItem {...img} key={img.id} /> )
                }
            </div>
        </div>
    );
};

export default GifGrid;
