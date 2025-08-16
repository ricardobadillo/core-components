import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";

import { router } from "expo-router";

import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useRef, useState } from "react";

interface Slide {
  description: string;
  image: ImageSourcePropType;
  title: string;
}

const items: Slide[] = [
  {
    description:
      "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    image: require("../../assets/images/slides/slide-1.png"),
    title: "Titulo 1",
  },
  {
    description:
      "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    image: require("../../assets/images/slides/slide-2.png"),
    title: "Titulo 2",
  },
  {
    description:
      "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    image: require("../../assets/images/slides/slide-3.png"),
    title: "Titulo 3",
  },
];

const SlidesScreen = () => {
  const flatListRef = useRef<FlatList | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLastSlideIndex, setIsLastSlideIndex] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLastSlideIndex) return;

    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

    if (currentIndex === items.length - 1) {
      setIsLastSlideIndex(true);
    }
  };

  const scroollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  };

  return (
    <ThemedView>
      <FlatList
        data={items}
        horizontal
        keyExtractor={(item) => item.title}
        onScroll={onScroll}
        pagingEnabled
        ref={flatListRef}
        renderItem={({ item }) => <SlideItem item={item}></SlideItem>}
        scrollEnabled={isLastSlideIndex}
      />

      {currentSlideIndex === items.length - 1 ? (
        <ThemedButton
          className="absolute bottom-10 right-5 w-[150px]"
          onPress={() => router.dismiss()}
        >
          Finalizar
        </ThemedButton>
      ) : (
        <ThemedButton
          className="absolute bottom-10 right-5 w-[150px]"
          onPress={() => scroollToSlide(currentSlideIndex + 1)}
        >
          Siguiente
        </ThemedButton>
      )}
    </ThemedView>
  );
};
export default SlidesScreen;

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { description, image, title } = item;

  return (
    <ThemedView
      className="bg-red-500 flex-1 justify-center p-10 rounded"
      style={{ width }}
    >
      <Image
        source={image}
        style={{
          alignSelf: "center",
          height: width * 0.75,
          resizeMode: "center",
          width: width * 0.75,
        }}
      ></Image>

      <ThemedText
        className="text-light-primary dark:text-dark-primary"
        type="h1"
      >
        {title}
      </ThemedText>

      <ThemedText className="mt-10 text-light-primary dark:text-dark-primary">
        {description}
      </ThemedText>
    </ThemedView>
  );
};
