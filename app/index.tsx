import { View } from "react-native";

import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import MenuItem from "@/presentation/menu/MenuItem";
import ThemedView from "@/presentation/shared/ThemedView";

export default function ComponentsApp() {
  return (
    <ThemedView margin>
      {menuRoutes.map((route, index) => (
        <MenuItem
          icon={route.icon}
          key={route.title}
          isFirst={index === 0}
          name={route.name}
          title={route.title}
          isLast={index === menuRoutes.length - 1}
        ></MenuItem>
      ))}

      <View className="my-4" />

      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          icon={route.icon}
          key={route.title}
          isFirst={index === 0}
          name={route.name}
          title={route.title}
          isLast={index === uiMenuRoutes.length - 1}
        ></MenuItem>
      ))}

      <View className="my-4" />

      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          icon={route.icon}
          key={route.title}
          isFirst={index === 0}
          name={route.name}
          title={route.title}
          isLast={index === animationMenuRoutes.length - 1}
        ></MenuItem>
      ))}
    </ThemedView>
  );
}
