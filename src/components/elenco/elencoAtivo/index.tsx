import { Pressable, View } from 'react-native';

import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';

export function ElencoAtivo() {
  return (
    <View className=''>
      <Pressable className='my-2'
        style={{ height: 390 }}
        onPress={() => console.log("Elenco")}>
        <ThemedView className='h-full w-full rounded-lg'>

        </ThemedView>
      </Pressable>
    </View>
  );
}