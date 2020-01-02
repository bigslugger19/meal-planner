import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Administration'
  },
  {
    name: 'Meals',
    url: '/meals',
    icon: 'fa fa-cutlery'
  },
  {
    name: 'Inventory',
    url: '/inventory',
    icon: 'fa fa-list-alt'
  },
  {
    name: 'Grocery List',
    url: '/grocery-list',
    icon: 'icon-basket-loaded'
  }
];
