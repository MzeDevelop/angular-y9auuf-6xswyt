export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  CartCount: number;
}

export const products = [
  {
    id: 0,
    name: 'IPhone 7, Rose Gold Out Of Stock',
    price: 250,
    availableCount: 0,
    description:
      'Generalüberholt(Leichte Kratzer, Defekter Homebutton, Akkukappazität bei 30%)',
    produced: 'Apple Generalüberholt',
    manufacturedImage: '',
    image:
      'https://media.kaufland-online.de/images/items/300x300/d6b87110ebe32e06c47f3c56e1bfbeed.jpg'
  },
  {
    id: 1,
    name: 'IPhone 11',
    price: 1200,
    availableCount: 3,
    description: 'Apple IPhone 11 250 GB OVP',
    produced: 'Apple',
    manufacturedImage:
      'https://media-exp1.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_200_200/0/1595530301220?e=2159024400&v=beta&t=IJmg_K1W7KCh6082rXN9V7gzlrD9GMwYqk_EjCrDxGw',
    image:
      'https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/290062_b77cfcbd-dc81-4b01-be44-34fa18d8e966-thumb.jpg'
  },
  {
    id: 2,
    name: 'IPhone 12 Mini',
    price: 780,
    availableCount: 4,
    description:
      'Speicherkapazität 128 GB Betriebssystem iOS Kameraauflösung 12 Megapixel',
    produced: 'Apple',
    manufacturedImage: '',
    image:
      'https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/412290_c8fd22d9-34a7-4c7e-b389-c09501056560-thumb.jpg'
  },
  {
    id: 3,
    name: 'IPhone 12',
    price: 829,
    availableCount: 32,
    description:
      'Speicherkapazität 128 GB Betriebssystem iOS Kameraauflösung 12 Megapixel',
    produced: 'Apple',
    manufacturedImage: '',
    image:
      'https://media.kaufland-online.de/images/items/300x300/6b4beb57ca003cc4c8582635807452aa.jpg'
  },
  {
    id: 6,
    name: 'Sony Playstation 5 White',
    price: 1250.99,
    availableCount: 0,
    description:
      'Speicherkapazität 1 TB Zubehör: Controller, Ladekabel, HDMI Kabel',
    produced: 'Sony Interactive',
    manufacturedImage: '',
    image:
      'https://www.reviews.org/app/uploads/2020/10/PlayStation-5-Digital-Edition-300x300.png'
  },
  {
    id: 4,
    name: 'Samsung Galaxy S21 5G Smartphone, Phantom Gray',
    price: 849,
    availableCount: 4,
    description:
      '15.7 cm (6.2 Zoll) Infinity-O Dynamic AMOLED Display, 2400 x 1080 Pixel (FHD+), bis zu 120 Hz, 20:9',
    produced: 'Samsung',
    manufacturedImage: '',
    image:
      'https://asset.conrad.com/media10/isa/160267/c1/-/de/002348114PI00/samsung-galaxy-s21-5g-dual-sim-smartphone-128-gb-6-2-zoll-15-7-cm-dual-sim-android-11-grau.jpg?x=300&y=300&format=jpg&ex=300&ey=300&align=center'
  },

  {
    id: 5,
    name: 'Samsung Galaxy S21 5G Smartphone, Phantom Gray; Stark reduziert',
    price: 300,
    availableCount: 1,
    description:
      'Generalüberholt(Kratzer und beschädigte Ladebuchse) 15.7 cm (6.2 Zoll) Infinity-O Dynamic AMOLED Display, 2400 x 1080 Pixel (FHD+), bis zu 120 Hz, 20:9',
    produced: 'Samsung Refactored by SA-Electron',
    manufacturedImage: '',
    image:
      'https://asset.conrad.com/media10/isa/160267/c1/-/de/002348114PI00/samsung-galaxy-s21-5g-dual-sim-smartphone-128-gb-6-2-zoll-15-7-cm-dual-sim-android-11-grau.jpg?x=300&y=300&format=jpg&ex=300&ey=300&align=center'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
