import { SafeAreaView, ScrollView } from 'react-native';

import { ElencoAtivo } from '@/src/components/elenco/elencoAtivo';
import { GestaoElenco } from '@/src/components/elenco/gestaoElenco';


export default function Elenco() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20, }}>

        <ElencoAtivo />

        <GestaoElenco />

      </ScrollView>
    </SafeAreaView>
  );
}

