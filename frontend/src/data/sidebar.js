
import {
  VscAccount,
  VscCommentDiscussion,
  VscGraphLine,
  VscExpandAll,
} from "react-icons/vsc";


const menu = [
  {
    title: "Dashboard",
    icon: <VscGraphLine />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <VscExpandAll />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <VscAccount />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <VscCommentDiscussion />,
    path: "/contact-us",
  },
];

export default menu;
