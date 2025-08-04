interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface CategoryData {
  heroSlides: Array<{
    id: number;
    image: string;
    title: string;
    subtitle: string;
  }>;
  products: Product[];
}

export const productData: Record<string, CategoryData> = {
  iPhone: {
    heroSlides: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'iPhone 15 Pro',
        subtitle: 'Titanium. So strong. So light. So Pro.',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'iPhone 15',
        subtitle: 'New camera. New design. Newphoria.',
      },
    ],
    products: [
      {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: 'From $1,199',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80',
        description: 'The ultimate iPhone with titanium design, A17 Pro chip, and Action Button.',
      },
      {
        id: 2,
        name: 'iPhone 15 Pro',
        price: 'From $999',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
        description: 'Pro camera system, titanium design, and the powerful A17 Pro chip.',
      },
      {
        id: 3,
        name: 'iPhone 15',
        price: 'From $799',
        image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80',
        description: 'Dynamic Island, 48MP camera, and USB-C connectivity.',
      },
    ],
  },
  iPad: {
    heroSlides: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'iPad Pro',
        subtitle: 'Supercharged by M2 chip.',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'iPad Air',
        subtitle: 'Serious performance. Surprisingly portable.',
      },
    ],
    products: [
      {
        id: 1,
        name: 'iPad Pro 12.9"',
        price: 'From $1,099',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80',
        description: 'The ultimate iPad experience with M2 chip and Liquid Retina XDR display.',
      },
      {
        id: 2,
        name: 'iPad Air',
        price: 'From $599',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80',
        description: 'Powerful, colorful, and incredibly versatile.',
      },
      {
        id: 3,
        name: 'iPad',
        price: 'From $449',
        image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=600&q=80',
        description: 'The all-new colorful iPad for the things you do every day.',
      },
    ],
  },
  Watch: {
    heroSlides: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'Apple Watch Series 9',
        subtitle: 'Smarter. Brighter. Mightier.',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'Apple Watch Ultra 2',
        subtitle: 'Next-level adventure.',
      },
    ],
    products: [
      {
        id: 1,
        name: 'Apple Watch Ultra 2',
        price: 'From $799',
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80',
        description: 'The most rugged and capable Apple Watch pushes boundaries again.',
      },
      {
        id: 2,
        name: 'Apple Watch Series 9',
        price: 'From $399',
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=600&q=80',
        description: 'Your essential companion for a healthy life.',
      },
      {
        id: 3,
        name: 'Apple Watch SE',
        price: 'From $299',
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=600&q=80',
        description: 'All the essentials. Light on price.',
      },
    ],
  },
  TV: {
    heroSlides: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'Apple TV 4K',
        subtitle: 'The Apple experience. Cinematic in every sense.',
      },
    ],
    products: [
      {
        id: 1,
        name: 'Apple TV 4K (128GB)',
        price: '$149',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
        description: 'Our best Apple TV yet with 4K Dolby Vision and immersive audio.',
      },
      {
        id: 2,
        name: 'Apple TV 4K (64GB)',
        price: '$129',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
        description: 'Powerful streaming with A15 Bionic chip and Siri Remote.',
      },
    ],
  },
  Mac: {
    heroSlides: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'MacBook Pro',
        subtitle: 'Mind-blowing. Head-turning.',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'MacBook Air',
        subtitle: 'Lean. Mean. M3 machine.',
      },
    ],
    products: [
      {
        id: 1,
        name: 'MacBook Pro 16"',
        price: 'From $2,499',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
        description: 'The most powerful MacBook Pro ever with M3 Max chip.',
      },
      {
        id: 2,
        name: 'MacBook Pro 14"',
        price: 'From $1,999',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80',
        description: 'Supercharged for pros with M3 Pro and M3 Max.',
      },
      {
        id: 3,
        name: 'MacBook Air',
        price: 'From $1,099',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
        description: 'Strikingly thin and fast so you can work, play, or create anywhere.',
      },
    ],
  },
  AirPods: {
    heroSlides: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'AirPods Pro',
        subtitle: 'Adaptive Audio. Now playing.',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1920&h=1080&q=80',
        title: 'AirPods Max',
        subtitle: 'Computational audio. Listen, it\'s incredible.',
      },
    ],
    products: [
      {
        id: 1,
        name: 'AirPods Pro (2nd generation)',
        price: '$249',
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80',
        description: 'Active Noise Cancellation, Adaptive Audio, and USB-C charging.',
      },
      {
        id: 2,
        name: 'AirPods Max',
        price: '$549',
        image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80',
        description: 'Over-ear headphones with Active Noise Cancellation and spatial audio.',
      },
      {
        id: 3,
        name: 'AirPods (3rd generation)',
        price: '$179',
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=600&q=80',
        description: 'Spatial Audio, sweat and water resistance, and up to 30 hours of listening time.',
      },
    ],
  },
};