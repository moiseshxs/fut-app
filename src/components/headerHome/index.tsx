import { Pressable, View } from 'react-native';

import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';

export function HeaderHome() {
    return (
        <View className='h-80 p-5 gap-2'>
            <View className='h-1/4 flex-row justify-between items-center'>
                <ThemedView className='h-14 w-1/2 rounded-full '>

                </ThemedView>
                <ThemedView className='h-14 w-14 rounded-full'>

                </ThemedView>
            </View>

            <Pressable className='h-3/4' onPress={() => console.log("JOGAR")} onLongPress={() => console.log("SEGUROU")}>
                <ThemedView className='h-full w-full rounded-lg'>

                </ThemedView>
            </Pressable>
        </View>
    );
}