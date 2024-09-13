import { Stack } from 'expo-router';
import { Logo } from '@/components/ui/Logo';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#6342D9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: () => <Logo /> }} />
    </Stack>
  );
}
