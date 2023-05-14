import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
    
    return (
        <header className={css.searchbar}>
            <form className={css.searchForm}>
                <button
                    type="submit"
                    className={css.searchFormButton}
                >
                    <ImSearch />
                    <span className={css.searchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={css.searchFormButtonInput}
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />

            </form>
        </header>
    )
}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};

