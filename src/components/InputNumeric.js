import _ from 'lodash';
import PropTypes from 'prop-types';

import InputBase from './InputBase';

function InputNumeric(props) {
  // convert value to number using lodash
  function handleChange(value) {
    if (value !== '') {
      value = Number(value);
    } else {
      value = null;
    }
    props.onChange(value);
  }

  const value = _.isNumber(props.value) ? props.value.toString() : null;
  return (
    <InputBase type="number" {...props} onChange={handleChange} value={value} />
  );
}

InputNumeric.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
}

InputNumeric.defaultProps = {
  onChange: () => {},
  value: null,
}

export default InputNumeric;
