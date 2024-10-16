import {
   AppstoreOutlined,
   ProductOutlined,
   TagOutlined,
} from "@ant-design/icons";

const paths = [
   {
      content: "Products",
      path: "/layout",
      icon: <ProductOutlined />,
   },
   {
      content: "Category",
      path: "/layout/category",
      icon: <AppstoreOutlined />,
   },
   {
      content: "Brands",
      path: "/layout/brands",
      icon: <TagOutlined />,
   },
];

export { paths };
