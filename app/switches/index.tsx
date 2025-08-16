import { useState } from 'react';

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';

const Switches = () => {
  const [state, setState] = useState({
      isActive: true,
      isHungry: false,
      isHappy: true,
  });

  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>
        <ThemedSwitch
          text='Activo'
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
        />

        <ThemedSwitch
          text='Hambriento'
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
        />

        <ThemedSwitch
          text='Contento'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
