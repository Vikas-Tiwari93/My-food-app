import { ProductType } from "../../components/pageComponents/homepageComponents/navbar/nav.types";

const navItems = [
  {
    id: "1",
    name: "Meal Plan",
    items: [
      {
        id: "1_1",
        name: "Custom Plan",
      },
      {
        id: "1_2",
        name: "Popular Plan",
      },
    ],
  },
  {
    id: "2",
    name: "Recepies",
    items: [
      {
        id: "2_1",
        name: "Recepies List",
      },
      {
        id: "2_2",
        name: "Pro Recepies",
      },
      {
        id: "2_3",
        name: "Browse",
      },
    ],
  },
  {
    id: "3",
    name: "Articles",
    items: [
      {
        id: "3_1",
        name: 'Popular Articles',
        
      },
      {
        id: "3_1",
        name: 'Pro Articles',
        
      },
     
    ],
  },
  {
    id: "4",
    name: "More",
    items: [
      {
        id: "4_1",
        name: "Projector Plus",
      
      },
      {
        id: "4_2",
        name: "Projector PlusHD",
        
      },
    ],
  },

  {
    id: "5",
    name: "About Us",
    items: [
      {
        id: "3_1",
        name: 'FAQs',
        
      },
      {
        id: "3_1",
        name: 'Vision',
        
      },
      {
        id: "3_1",
        name: 'Contact Us',
        
      },
     
    ],
  },
];

const navServices= {
    getProducts(): ProductType[] {
      return navItems;
    },
  };
  export default navServices
