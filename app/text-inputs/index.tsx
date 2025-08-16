import { useState } from 'react';
// import { Platform } from 'react-native';

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';

// const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    // <KeyboardAvoidingView behavior={ isIOS ? 'height' : undefined }>
      <ThemedView margin>
        <ThemedCard className='flex gap-4'>
          <ThemedTextInput
            autoCapitalize={'words'}
            autoCorrect={false}
            placeholder='Nombre completo'
            onChangeText={(text) => setForm({ ...form, name: text })}
          />

          <ThemedTextInput
            autoCorrect={false}
            placeholder='Correo electrónico'
            keyboardType='email-address'
            onChangeText={(text) => setForm({ ...form, email: text })}
          />

          <ThemedTextInput
            autoCorrect={false}
            placeholder='Teléfono'
            keyboardType='phone-pad'
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />
        </ThemedCard>

        <ThemedCard>
          <ThemedText>{ JSON.stringify(form, null, 2) }</ThemedText>
        </ThemedCard>
      </ThemedView>
    // </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
