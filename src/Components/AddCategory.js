import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');
    const handleInputValue = ({target}) => {
        setInputValue(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            // Acá, recibo las categorias anteriores con (cate), y a esas anteriores, le agrego el inputValue
            setCategories((cate) => [inputValue, ...cate]);
            setInputValue('');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;