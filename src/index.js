import React from 'react';
import {
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  message: {
    flexDirection: 'row',
    width: WIDTH * 0.7,
    fontSize: 20,
    fontFamily: 'Roboto',
    color: 'white',
    flexWrap: 'wrap',
  },
  container: {
    position: 'absolute',
    height: 60,
    elevation: 20,
    width: WIDTH,
    flexDirection: 'row',
    backgroundColor: '#000000ef',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  action: {
    padding: 10,
  },
  actionTitle: {
    fontSize: 20,

    fontFamily: 'Roboto',
    paddingHorizontal: 10,
  },
});

class Snackbar extends React.Component {
  constructor(props) {
    super(props);
    this.modalPosition = new Animated.Value(HEIGHT);
    this.state = {};
  }

  shouldComponentUpdate(props, state) {
    return props.isActive;
  }

  componentDidMount() {
    if (this.props.isActive) this.animateUp();
  }
  componentDidUpdate() {
    this.animateUp();
  }
  animateUp = () => {
    Animated.sequence([
      Animated.timing(this.modalPosition, {
        toValue: HEIGHT - 60,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(this.modalPosition, {
        delay: this.props.duration === 'short' ? 2500 : 3000,
        toValue: HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  render() {
    const { message, error, title, action } = this.props;
    return (
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: this.modalPosition }] },
        ]}>
        <Text style={styles.message}>{message}</Text>
        {action && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={action.onPress}
            style={styles.action}>
            <Text style={[styles.actionTitle, { color: action.color }]}>
              {action.title.toUpperCase()}
            </Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    );
  }
}

export default Snackbar;

Snackbar.defaultProps = {
  message: 'Mail sent!',
  duration: 'short',
  isActive: false,
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  duration: PropTypes.oneOf(['short', 'long']),
  action: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  }),
};

