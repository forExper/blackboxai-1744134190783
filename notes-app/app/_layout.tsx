import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NoteProvider } from '../context/NoteContext';
import { TagProvider } from '../context/TagContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NoteProvider>
        <TagProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </TagProvider>
      </NoteProvider>
    </SafeAreaProvider>
  );
}
