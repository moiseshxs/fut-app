import { Pressable, View } from 'react-native';

import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';

export function GestaoElenco() {
    return (
        <View className='w-full'>
            <Pressable className='h-48 w-full my-2' onPress={() => console.log("Gestão")}>
                <ThemedView className='h-full w-full rounded-lg'>

                </ThemedView>
            </Pressable>
        </View>
    );
}