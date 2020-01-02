import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Administration'
  },
  {
    name: 'Meals',
    url: '/meals',
    icon: 'icon-drop'
  },
  {
    name: 'Inventory',
    url: '/inventory',
    icon: 'icon-drop'
  },
  {
    name: 'Grocery List',
    url: '/grocery-list',
    icon: 'icon-drop'
  }
];
