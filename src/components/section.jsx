import PropTypes from 'prop-types';

export const Section = ({ children, classes }) => <section className={`my-20 ${classes}`}>{children}</section>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
};
