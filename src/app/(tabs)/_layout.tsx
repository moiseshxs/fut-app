import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/src/components/navigation/TabBarIcon';
import { Colors } from '@/src/constants/Colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="elenco"
        options={{
          title: 'Elenco',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transferencia"
        options={{
          title: 'Transferencia',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="escritorio"
        options={{
          title: 'Escritorio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'briefcase' : 'briefcase-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="clube"
        options={{
          title: 'Clube',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'shield' : 'shield-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
