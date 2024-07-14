import React, { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { Colors } from '@/src/constants/Colors';

type IconsProps = {
    name: ComponentProps<typeof Ionicons>['name'];
    darkColor?: string;
    lightColor?: string;
};

export function Icons({ name, darkColor, lightColor }: IconsProps) {
    const colorScheme = useColorScheme();
    const color = colorScheme === 'dark' ? darkColor || Colors.dark.tint : lightColor || Colors.light.tint;

    return <Ionicons name={name} size={28} color={color} />;
}
