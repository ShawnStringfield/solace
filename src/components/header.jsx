import { Container } from './container';
import PropTypes from 'prop-types';

export const Header = ({ heading, text }) => (
  <header className='text-center mb-16'>
    <Container>
      <h1 className='mb-8 text-4xl sm:text-6xl'>{heading}</h1>
      <p>{text}</p>
    </Container>
  </header>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
