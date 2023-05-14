import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({tags, webformatURL, largeImageURL}) => {
    
        return (

            <li className={css.imageGalleryItem}>
                <a href={largeImageURL}>
                    <img
                        src={webformatURL}
                        alt={tags}
                        className={css.imageGalleryItemImage}
                    >
                    </img>
                </a>
            </li>
        )
    
}
    

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    tags: PropTypes.string,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
}