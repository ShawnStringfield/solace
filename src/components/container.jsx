import PropTypes from 'prop-types';

export const Container = ({ children, classes }) => (
  <section className={`container max-auto py-16 ${classes}`}>{children}</section>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
};
