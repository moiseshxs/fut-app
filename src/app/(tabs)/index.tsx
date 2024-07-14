import { SafeAreaView, ScrollView } from 'react-native';

import { HeaderHome } from '@/src/components/headerHome';
import { Tabela } from '@/src/components/tabela';
import { Jogar } from '@/src/components/jogar';

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

