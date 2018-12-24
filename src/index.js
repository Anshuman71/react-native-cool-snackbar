import React from 'react';
import { Text, Easing, Animated } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

class Snackbar extends React.Component {
  constructor(props) {
    super(props);
    this.modalPosition = new Animated.Value(-60);
    this.state = {};
  }

  componentDidMount() {
    this.animateUp();
    this.timer = setTimeout(this.animateDown, this.props.duration === 'short' ? 2000 : 2500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  animateUp = () => {
    Animated.timing(this.modalPosition, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
    }).start();
  };

  animateDown = () => {
    Animated.timing(this.modalPosition, {
      toValue: -60,
      duration: 300,
      easing: Easing.linear,
    }).start(this.props.reset);
  };

  render() {
    const { message, error, title } = this.props;
    return (
      <Animated.View
        style={{
          position: 'absolute',
          bottom: this.modalPosition,
          height: 60,
          elevation: 20,
          width: Layout.window.width,
          flexDirection: 'row',
          backgroundColor: '#000',
          opacity: 0.85,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Raleway',
            color: error ? Colors.errorText : Colors.tintColor,
            marginHorizontal: 10,
          }}
        >
          {title}
        </Text>
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
      </Animated.View>
    );
  }
}

export default Snackbar;

Snackbar.defaultProps = {
  error: false,
  reset: () => {},
  duration: 'short',
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.oneOf(['short', 'long']),
  error: PropTypes.bool,
  reset: PropTypes.func,
};

