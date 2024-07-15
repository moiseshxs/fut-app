import { SafeAreaView, ScrollView } from 'react-native';

import { HeaderChat } from '@/src/components/chat/header';

export default function Chat() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20, }}>

      <HeaderChat />

      </ScrollView>
    </SafeAreaView>
  );
}

