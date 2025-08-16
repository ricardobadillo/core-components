import { Text } from 'react-native';

import { Link, router } from 'expo-router';

import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild className='mx-4 my-4' href="/modal/modal-window">
        <Text className='my-2 text-light-text dark:text-dark-text'>
          Open modal
        </Text>
      </Link>

      <ThemedButton onPress={() => router.push('/modal/modal-window')}>
        Abrir modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
