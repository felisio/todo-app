import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';


const ContainerImage = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <ImageBackground
        resizeMode="stretch"
        source={require('./images/background.png')}
        style={{width: '100%', height: '100%'}}
      >
        <View>
          {children}
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

ContainerImage.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string
};

export default ContainerImage;