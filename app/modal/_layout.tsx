import { Stack } from 'expo-router';

export default function ModalLayout() {
  return (
    <Stack screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='index'/>
        <Stack.Screen
            name='modal-window'
            options={{
                presentation: 'modal'
            }}
        />
    </Stack>
  );
}
