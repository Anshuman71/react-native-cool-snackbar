import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

const Snackbar = ({ message, duration, width, reset }) => (
  <Animatable.View
    animation="slideInUp"
    useNativeDriver
    iterationCount={2}
    iterationDelay={duration === 'short' ? 1400 : 2000}
    duration={600}
    onAnimationEnd={reset}
    direction="alternate"
    style={{
      position: 'absolute',
      bottom: 0,
      height: 60,
      flexDirection: 'row',
      width,
      backgroundColor: '#000',
      opacity: 0.95,
      alignItems: 'center',
    }}
  >
    <Text
      style={{
        flex: 1,
        fontSize: 18,
        fontFamily: 'Raleway',
        color: 'white',
        flexWrap: 'wrap',
        paddingRight: 10,
      }}
    >
      {message}
    </Text>
  </Animatable.View>
);
export default Snackbar;

Snackbar.defaultProps = {
  reset: () => {},
  duration: 'short',
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  duration: PropTypes.oneOf(['short', 'long']),
  reset: PropTypes.func,
};
