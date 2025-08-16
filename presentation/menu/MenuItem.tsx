import { Pressable, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Href, router } from 'expo-router';

import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from '../shared/ThemedText';

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  isFirst?: boolean;
  isLast?: boolean;
  name: string;
  title: string;
}

export default function MenuItem({ icon, isFirst = false, isLast = false, name, title }: Props) {
  const [routerName] = name.split('/');
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Pressable
      className='bg-white dark:bg-black/15 px-5 py-2'
      onPress={ () => router.push(routerName as Href) }
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10
        }),
        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10
        })
      }}
    >
      <View className='flex-row gap-4 items-center'>
        <Ionicons color={primaryColor} name={icon} size={30 }/>
        <ThemedText className='color-black dark:color-white' type='h2'>{ title }</ThemedText>
      </View>
    </Pressable>
  )
}