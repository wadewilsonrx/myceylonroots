import { Testimonial, CountryReseller } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I fell in love with its freshness",
    subtitle: "From the time I opened the packaging of Tikiri Manike, I fell in love with its freshness, aroma and the quality. It was a delight to create some mouth wateringly delicious recipes using their spices.",
    author: "Anjala Fernando",
    role: "Recipe Developer and Food Photographer",
    rating: 5,
  },
  {
    quote: "Every chef's dream",
    subtitle: "Every chef's dream is to work with the best ingredients. We have elevated the quality of our foods using Tikiri Manike spices.",
    author: "Deshan Kumarasinghe",
    role: "Chef & Head of Production, V Foods (pvt) Ltd",
    rating: 5,
  },
  {
    quote: "Love the spices",
    subtitle: "My chefs love the spices we are getting from Tikiri Manike. It has not only enhanced the taste of our food but it has greatly contributed towards improving our costs, minimising wastage and offering a quality product to our customers. A pinch of Tikiri Manike spices can go a long way.",
    author: "Sheik Mohamed",
    role: "The Manager, Anjappar Chettinad Restaurant Hong Kong",
    rating: 5,
  },
];

export const RESELLER_COUNTRIES: CountryReseller[] = [
  {
    country: "Hong Kong",
    stores: [
      {
        name: "V Store",
        location: "S082, 2nd Floor, The Capital, 61-65 Chatham Road South, Tsim Sha Tsui, Kowloon, Hong Kong",
        contact: "+852 90891137",
        email: "info@vbrands.hk",
      },
    ],
  },
  {
    country: "Sri Lanka",
    stores: [
      {
        name: "TechTrove Colombo",
        location: "123 Galle Road, Colombo 03, Sri Lanka",
        contact: "+94 11 234 5678",
        email: "colombo@techtrove.lk",
      },
      {
        name: "ElectroNest Kandy",
        location: "456 Dalada Veediya, Kandy, Sri Lanka",
        contact: "+94 81 234 5678",
        email: "kandy@electronest.lk",
      },
      {
        name: "GadgetGrove Galle",
        location: "789 Galle Fort, Galle, Sri Lanka",
        contact: "+94 91 234 5678",
        email: "galle@gadgetgrove.lk",
      },
    ],
  },
];

export const FARMERS = [
  {
    id: "indika",
    name: "Indika",
    fullName: "Indika Thushara",
    bio: "My name is Indika Thushara. I grew up in an environment where my parents taught me the importance of hard work and perseverance. From a young age I learnt the importance of growing healthy food. I am happy to grow Organic Turmeric which has become one of the popular ingredient around the world for its health benefits.",
    image: "/media/indika.a0676dab.webp",
    crop: "Organic Turmeric",
  },
  {
    id: "kamala",
    name: "Kamala",
    fullName: "Kamala Priyangani",
    bio: "My name is Kamala Priyangani. I am a proud female farmer growing and processing Ceylon Cinnamon. From a young age I have learnt the technique of creating a perfect Ceylon Cinnamon quill. I am happy to be a part of Tikiri Manike, empowering women like myself.",
    image: "/media/kamala.c4faaff4.webp",
    crop: "Ceylon Cinnamon",
  },
];

export const PARADISE_SLIDES = [
  {
    title: "Island Paradise",
    description: "The epitome of Sri Lankan organic cultivation, Home to the Asia’s oldest Agro-Forestry system ~ Kandyan Forest Gardens. Perfect weather and soil conditions are ideal to grow mixed crops. Whether it is world famous Ceylon Tea, Spices or Ceylon Coffee. Kandy and it surrounding areas of Matale, Kotmale, Nuwaraeliya are the places where Black Pepper, Cloves, Nutmeg, Mace and Cardamoms grows.",
    crops: "Black Pepper, Cloves, Nutmeg, Mace and Cardamoms",
    image: "/media/paradise-3.85f7bc28.webp",
  },
  {
    title: "Island Paradise",
    description: "Ceylon Cinnamon is arguably the best spice that Sri Lanka has to offer to the world. It is sought after for the unique aroma, flavour and the medicinal value. Kalutara and it’s surrounding areas, such as Galle, Matara, Ratnapura, Gampaha are the areas where Ceylon Cinnamon grows and process in the time-honored manner.",
    crops: "Ceylon Cinnamon",
    image: "/media/paradise-2.b4e3e442.webp",
  },
  {
    title: "Island Paradise",
    description: "Surrounded by the UNESCO World’s Heritage sites, Anuradhapura was once the Capital of Sri Lanka. Located in the dry-zone of the island, hot weather and humid conditions provide the perfect atmosphere to grow and sun dried the red chillies. Other major crops grows in the area are sesame, onions and corn.",
    crops: "Red chillies, Sesame, Onions and Corn.",
    image: "/media/paradise-1.1ac290b6.webp",
  },
];
