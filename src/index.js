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
    flexWrap: 'wrap',
    fontSize: 20,
    maxWidth: WIDTH * 0.7,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: 'white',
    fontFamily: 'Roboto',
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    elevation: 20,
    width: WIDTH,
    paddingHorizontal: 10,
    backgroundColor: '#1b1b1b',
  },
  action: {
    paddingHorizontal: 10,
    maxWidth: WIDTH * 0.4,
  },
  actionTitle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 20,
    textAlign: 'center',
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

  shouldComponentUpdate(props) {
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
        delay: this.props.duration === 'short' ? 2200 : 3500,
        toValue: HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  render() {
    const { message, action } = this.props;
    return (
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: this.modalPosition }] },
        ]}
      >
        <Text style={styles.message}>{message}</Text>
        {action && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={action.onPress}
            style={styles.action}
          >
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
