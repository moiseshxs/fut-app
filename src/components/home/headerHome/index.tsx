import { Pressable, View } from 'react-native';

import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';
import { Icons } from '../../icons';
import { Link } from 'expo-router';
import { useEffect } from 'react';

export function HeaderHome() {
    return (
        <View className='h-14 my-2'>
            <View className='h-full flex-row justify-between items-center'>
                <ThemedView className='h-14 w-1/2 rounded-full '>

                </ThemedView>

                <Link href={'chat'} asChild>
                    <Pressable className='h-14 w-14'>
                        <ThemedView className='h-14 w-14 rounded-full items-center justify-center'>
                            <Icons name="chatbubble-outline" lightColor="#000" darkColor="#fff" />
                        </ThemedView>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}