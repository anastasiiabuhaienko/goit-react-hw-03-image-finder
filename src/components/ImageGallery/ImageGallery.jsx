import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';




const ImageGallery = ({ photos }) => {

    return (
        <ul className={css.gallery}>
            {photos.map(({ tags, webformatURL, largeImageURL }) => (

                <ImageGalleryItem
                    alt={tags}
                    src={webformatURL}
                    href={largeImageURL}
                />

            ))}
            
        </ul>
    )
}

export default ImageGallery;


ImageGallery.propTypes = {
    tags: PropTypes.string,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
};
