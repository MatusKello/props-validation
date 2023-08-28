import PropTypes from 'prop-types';
import defaultImage from './images/book-default.jpg';

const Book = ({ image, title, price }) => {
  return (
    <div>
      <h2>{title || 'Default name'}</h2>
      <img src={image || defaultImage} alt='' />
      <p>{price || 1000}</p>
    </div>
  );
};

Book.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

//! presunute do skrateneho zapisu v return
/* Book.defaultProps = {
  image: defaultImage,
  title: 'Default name',
  price: 1000,
}; */

export default Book;
