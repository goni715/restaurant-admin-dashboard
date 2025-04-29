import { FaRegCircleUser } from "react-icons/fa6";
import { GiFrogPrince } from "react-icons/gi";
import { GrRestaurant } from "react-icons/gr";
import { MdDining } from "react-icons/md";
import { RiAdminFill, RiPieChart2Fill, RiRestaurant2Fill } from "react-icons/ri";


export const menuItems = [
    // {
    //     title: "Dashboard",
    //     path: '/',
    //     icon: RiPieChart2Fill
    // },
    {
        title: "User Management",
        path: '/users',
        icon: FaRegCircleUser
    },
    {
      title: "Owners",
      path: '/owners',
      icon: GiFrogPrince
<<<<<<< HEAD
   },
   {
=======
    },
    {
>>>>>>> 173cb03d45d61bce1fed8d3d53d302862521529e
        title: "Restaurants",
        path: '/restaurants',
        icon: RiRestaurant2Fill
    },
    {
        title: "Cuisine",
        path: '/cuisine',
        icon: GrRestaurant
    },
    {
        title: "Dining",
        path: '/dining',
        icon: MdDining
    },
    // {
    //     title: "Administrators",
    //     path: '/administrators',
    //     icon: RiAdminFill
    // }
]


export const subMenuItems = [
  {
    title: "Terms & Conditions",
    path: "/terms-conditions",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "FAQS",
    path: "/faqs",
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
];