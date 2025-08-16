import { Alert } from 'react-native';

import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';

const AlertsScreen = () => {
    const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'Mi mensaje de alerta', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'Mi mensaje de alerta', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <ThemedView margin className='flex-1 items-center justify-around'>
      <ThemedButton onPress={createTwoButtonAlert}>Primer botón</ThemedButton>
      <ThemedButton onPress={createThreeButtonAlert}>Segundo botón</ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
