import { useRef } from 'react';
import { Animated, PanResponder, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y,
      },
    ], { useNativeDriver: false }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan,
        { toValue: { x: 0, y: 0 }, useNativeDriver: false },
      ).start();
    }
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 items-center justify-center'>
        <Animated.View className='bg-blue-600 h-20 w-20'
          {...panResponder.panHandlers}
          style={[pan.getLayout()]}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Animation102Screen;
