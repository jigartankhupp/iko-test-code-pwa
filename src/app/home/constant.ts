export interface Spot {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  wind: number;
  homes: number;
  people: number;
  windDetail: Array<string>;
  spotDetail: Array<string>;
  suitable: Array<string>;
  lat: number;
  lng: number;
  like: number;
  share: number;
  centers: Array<Centers>;
}

export interface Centers {
  title: string;
  image: string;
  location: string;
  rating: number;
  reviewed: number;
}

export const spotList: Array<Spot> = [
  {
    id: 1,
    title: 'Title',
    subTitle: 'subTitle',
    description: 'description',
    image: 'assets/images/cabarete.jpeg',
    wind: 20,
    homes: 10,
    people: 30,
    windDetail: ['Light', 'Moderate'],
    spotDetail: ['Flat', 'Medium Waves'],
    suitable: ['Beginner', 'Supervision', 'Advanced', 'Evolution'],
    lat: 6.428748,
    lng: 2.91902,
    like: 20,
    share: 1,
    centers: [
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 2',
        location: 'Flis Kitecenter NNNNNNNNN',
        rating: 5,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 3',
        location: 'Flis Kitecenter',
        rating: 2,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 2',
        location: 'Kitecenter NNNNNNNNN',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 5',
        location: 'Flis NNNNNNNNN',
        rating: 5,
        reviewed: 144
      }
    ]
  },
  {
    id: 2,
    title: 'Title 2',
    subTitle: 'subTitle 2',
    description: 'description 2',
    image: 'assets/images/cabarete.jpeg',
    wind: 20,
    homes: 10,
    people: 30,
    windDetail: ['Light', 'Moderate'],
    spotDetail: ['Flat', 'Medium Waves'],
    suitable: ['Beginner', 'Supervision', 'Advanced', 'Evolution'],
    lat: 6.428748,
    lng: 2.91902,
    like: 20,
    share: 1,
    centers: [
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 2',
        location: 'Flis Kitecenter NNNNNNNNN',
        rating: 5,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 3',
        location: 'Flis Kitecenter',
        rating: 2,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 2',
        location: 'Kitecenter NNNNNNNNN',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 5',
        location: 'Flis NNNNNNNNN',
        rating: 5,
        reviewed: 144
      }
    ]
  },
  {
    id: 3,
    title: 'Title',
    subTitle: 'subTitle',
    description: 'description',
    image: 'assets/images/cabarete.jpg',
    wind: 20,
    homes: 10,
    people: 30,
    windDetail: ['Light', 'Moderate'],
    spotDetail: ['Flat', 'Medium Waves'],
    suitable: ['Beginner', 'Supervision', 'Advanced', 'Evolution'],
    lat: 6.428748,
    lng: 2.91902,
    like: 20,
    share: 1,
    centers: [
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 2',
        location: 'Flis Kitecenter NNNNNNNNN',
        rating: 5,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 3',
        location: 'Flis Kitecenter',
        rating: 2,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 2',
        location: 'Kitecenter NNNNNNNNN',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 5',
        location: 'Flis NNNNNNNNN',
        rating: 5,
        reviewed: 144
      }
    ]
  },
  {
    id: 4,
    title: 'Title',
    subTitle: 'subTitle',
    description: 'description',
    image: 'assets/images/kite-trip-travel-essentials2_0.jpg',
    wind: 20,
    homes: 10,
    people: 30,
    windDetail: ['Light', 'Moderate'],
    spotDetail: ['Flat', 'Medium Waves'],
    suitable: ['Beginner', 'Supervision', 'Advanced', 'Evolution'],
    lat: 6.428748,
    lng: 2.91902,
    like: 20,
    share: 1,
    centers: [
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 2',
        location: 'Flis Kitecenter NNNNNNNNN',
        rating: 5,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 3',
        location: 'Flis Kitecenter',
        rating: 2,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 2',
        location: 'Kitecenter NNNNNNNNN',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 5',
        location: 'Flis NNNNNNNNN',
        rating: 5,
        reviewed: 144
      }
    ]
  },
  {
    id: 5,
    title: 'Title',
    subTitle: 'subTitle',
    description: 'description',
    image: 'assets/images/cabarete.jpeg',
    wind: 20,
    homes: 10,
    people: 30,
    windDetail: ['Light', 'Moderate'],
    spotDetail: ['Flat', 'Medium Waves'],
    suitable: ['Beginner', 'Supervision', 'Advanced', 'Evolution'],
    lat: 6.428748,
    lng: 2.91902,
    like: 20,
    share: 1,
    centers: [
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 2',
        location: 'Flis Kitecenter NNNNNNNNN',
        rating: 5,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 3',
        location: 'Flis Kitecenter',
        rating: 2,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 2',
        location: 'Kitecenter NNNNNNNNN',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'Title 5',
        location: 'Flis NNNNNNNNN',
        rating: 5,
        reviewed: 144
      }
    ]
  }
];
