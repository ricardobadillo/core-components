import { useState } from "react";

import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";

const ThemesScreen = () => {
  const { currentTheme, isSystemTheme, setSystemTheme, toggleTheme } =
    useThemeChangerContext();
  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? 'dark' : 'light');
    toggleTheme();

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard className="flex mt-5">
        <ThemedSwitch
          value={darkModeSettings.darkMode}
          text="Dark text"
          onValueChange={setDarkMode}
        />

        <ThemedSwitch
          value={darkModeSettings.systemMode}
          text="System mode"
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
