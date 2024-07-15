import { SafeAreaView, ScrollView } from 'react-native';

import { HeaderHome } from '@/src/components/home/headerHome';
import { Tabela } from '@/src/components/home/tabela';
import { Jogar } from '@/src/components/home/jogar';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20, }}>
        
        <HeaderHome />

        <Jogar />

        <Tabela />

      </ScrollView>
    </SafeAreaView>
  );
}

