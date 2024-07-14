import { SafeAreaView, ScrollView } from 'react-native';

import { HeaderHome } from '@/src/components/headerHome';
import { Tabela } from '@/src/components/tabela';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        
        <HeaderHome />

        <Tabela />

      </ScrollView>
    </SafeAreaView>
  );
}

