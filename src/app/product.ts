export interface Product {
  name: string;
  icon: string;
  price: number;
  categories: Array<string>;
}

export const products: Product[] = [
  {
    name: 'House',
    price: 56.98,
    icon: 'home',
    categories: ['building']
  },
  {
    name: 'Gear',
    price: 2.36,
    icon: 'settings',
    categories: ['building', 'tech']
  },
  {
    name: 'Bin',
    price: 14.99,
    icon: 'delete',
    categories: ['home']
  },
  {
    name: 'Paper',
    price: 0.99,
    icon: 'description',
    categories: ['school']
  },
  {
    name: 'Clock',
    price: 3,
    icon: 'schedule',
    categories: ['school', 'home', 'tech']
  },
  {
    name: 'Globe',
    price: 2.75,
    icon: 'language',
    categories: ['school', 'home']
  },
  {
    name: 'Calendar',
    price: 2.75,
    icon: 'event',
    categories: ['school', 'home']
  },
  {
    name: 'Lightbulb',
    price: 1.75,
    icon: 'lightbulb',
    categories: ['home', 'tech']
  },
  {
    name: 'Star',
    price: 3.89,
    icon: 'star_rate',
    categories: ['toys']
  },
  {
    name: 'Wrench',
    price: 1.89,
    icon: 'build',
    categories: ['building']
  },
  {
    name: 'Print machine',
    price: 249.99,
    icon: 'print',
    categories: ['school', 'tech']
  },
  {
    name: 'Pig bank',
    price: 3.99,
    icon: 'savings',
    categories: ['finance']
  },
  {
    name: 'Compass',
    price: 3.99,
    icon: 'explore',
    categories: ['nature']
  },
  {
    name: 'Suitcase',
    price: 249.99,
    icon: 'work_outline',
    categories: ['office']
  },
  {
    name: 'Owl',
    price: 500,
    icon: 'flutter_dash',
    categories: ['nature']
  },
  {
    name: 'Calculator',
    price: 39.99,
    icon: 'table_view',
    categories: ['tech', 'school', 'office']
  },
  {
    name: 'Smartphone',
    price: 999.99,
    icon: 'app_settings_alt',
    categories: ['tech']
  },
  {
    name: 'Gamepad',
    price: 49.99,
    icon: 'sports_esports',
    categories: ['tech']
  },
  {
    name: 'Fireplace',
    price: 99.99,
    icon: 'fireplace',
    categories: ['home', 'office']
  },
  {
    name: 'Letter',
    price: 249.99,
    icon: 'mail',
    categories: ['home', 'school', 'office']
  },
]

export const categories: string[] = ['all', 'school', 'tech', 'nature', 'office', 'building', 'home'];
