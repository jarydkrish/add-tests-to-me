import _ from 'lodash';
import PropTypes from 'prop-types';

function InputBase(props) {
  const propsToPass = _.omit(props, ['onChange']);

  function handleChange(e) {
    props.onChange(e.target.value);
  }

  return (
    <input onChange={handleChange} {...propsToPass} />
  );
}

InputBase.propTypes = {
  onChange: PropTypes.func,
};

InputBase.defaultProps = {
  onChange: () => {},
};

export default InputBase;
