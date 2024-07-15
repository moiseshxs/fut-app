import { Pressable, View } from 'react-native';

import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';

export function HeaderChat() {
    return (
        <View className='h-52 my-2'>
            <Pressable className='h-full' onPress={() => console.log("JOGAR")} onLongPress={() => console.log("SEGUROU")}>
                <ThemedView className='h-full w-full rounded-lg'>

                </ThemedView>
            </Pressable>
        </View>
    );
}