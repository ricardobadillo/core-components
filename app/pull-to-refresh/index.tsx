import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';

const PullToRefreshScreen = () => {
  const backgroundColor = useThemeColor({
    dark: 'black', light: 'white'
  }, 'background');
  const primaryColor = useThemeColor({}, 'primary');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async() => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={backgroundColor}
          colors={[ primaryColor ]}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
