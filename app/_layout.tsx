import { Stack, Link } from 'expo-router';
import { Logo } from '@/components/ui/Logo';
import { MenuButton } from '@/components/ui/MenuButton';
import { DeckContextProvider } from '@/providers/DeckContextProvider';

export default function RootLayout() {
  return (
    <DeckContextProvider>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#6342D9'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: () => <Logo />,
            headerRight: () => (
              <Link href="/decks">
                <MenuButton />
              </Link>
            )
          }}
        />
        <Stack.Screen
          name="decks"
          options={{
            presentation: 'modal',
            headerTitle: 'Decks'
          }}
        />
      </Stack>
    </DeckContextProvider>
  );
}
