import { Ionicons } from "@expo/vector-icons";

interface MenuRoute {
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  title: string;
}

export const menuRoutes: MenuRoute[] = [
  {
    icon: 'refresh-outline',
    name: 'pull-to-refresh/index',
    title: 'Pull to refresh',
  },
  {
    icon: 'list-outline',
    name: 'section-list/index',
    title: 'Section List',
  },
  {
    icon: 'copy-outline',
    name: 'modal',
    title: 'Modal',
  },
  {
    icon: 'download-outline',
    name: 'infinite-scroll/index',
    title: 'InfiniteScroll',
  },
  {
    icon: 'flower-outline',
    name: 'slides/index',
    title: 'Slides',
  },
  {
    icon: 'flask-outline',
    name: 'themes/index',
    title: 'Themes',
  },
];

export const uiMenuRoutes: MenuRoute[] = [
  {
    icon: 'toggle-outline',
    name: 'switches/index',
    title: 'Switches',
  },
  {
    icon: 'alert-circle-outline',
    name: 'alerts/index',
    title: 'Alerts',
  },
  {
    icon: 'document-text-outline',
    name: 'text-inputs/index',
    title: 'TextInputs',
  },
];

export const animationMenuRoutes: MenuRoute[] = [
  {
    icon: 'cube-outline',
    name: 'animation-101/index',
    title: 'Animation 101',
  },
  {
    icon: 'albums-outline',
    name: 'animation-102/index',
    title: 'Animation 102',
  },
];

export const allRoutes = [
  ...menuRoutes,
  ...uiMenuRoutes,
  ...animationMenuRoutes,
];
