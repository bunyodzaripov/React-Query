import {
   AppstoreOutlined,
   ProductOutlined,
   TagOutlined,
   TagsOutlined,
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
   {
      content: "Brand Category",
      path: "/layout/brand-category",
      icon: <TagsOutlined />,
   },
];

export { paths };
