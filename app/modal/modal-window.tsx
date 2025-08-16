import { Platform } from 'react-native';

import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';

export default function ModalScreen() {
  return (
    <ThemedView bgColor='#A52182' className='flex-1 gap-4 items-center justify-center'>
      <ThemedButton onPress={() => router.push('/modal/other-modal-window')}>
        Otro modal
      </ThemedButton>

      <ThemedButton onPress={() => router.dismiss()}>
        Cerrar modal
      </ThemedButton>

      <StatusBar style={ Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
  );
}