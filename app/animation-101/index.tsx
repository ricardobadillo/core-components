import { Animated, Easing, View } from "react-native";

import { useAnimation } from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <ThemedView margin className="flex-1 gap-y-4 items-center justify-center">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          height: 150,
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedTop,
            },
          ],
          width: 150,
        }}
      ></Animated.View>

      <View className="flex gap-4">
        <ThemedButton
          onPress={() => {
            fadeIn({});
            startMovingTopPosition({ easing: Easing.bounce });
          }}
        >
          FadeIn
        </ThemedButton>

        <ThemedButton onPress={() => fadeOut({})}>FadeOut</ThemedButton>
      </View>
    </ThemedView>
  );
};
export default Animation101Screen;
