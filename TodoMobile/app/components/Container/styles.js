import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const containerWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    width: containerWidth,
  },
  containerImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: containerWidth,
  },
});