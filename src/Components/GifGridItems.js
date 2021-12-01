const GifGridItem = ({ title, url}) => {
    return(
        <div className='items animate__animated animate__fadeInBottomRight'>
            <img src={url} alt={ title }/>
            <h3 className='title'>{ title }</h3>
        </div>
    );
};

export default GifGridItem;