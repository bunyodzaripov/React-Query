import { useEffect, useState } from "react";
import { Button, Col, Drawer, Form, Input, Row, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ModalProps } from "@types";
import { useGetCategory } from "../../category/hooks/queries";
import { useGetBrandsByCategory } from "../../brands/hooks/queries";
import { useGetBrandCategoryByBrand } from "../../brand-category/hooks/queries";
import { useCreateProduct, useUpdateProduct } from "../hooks/mutations";
const { Option } = Select;

const Index = ({ open, handleClose, update }: ModalProps) => {
   const [form] = Form.useForm();
   const [categoryData, setCategoryData] = useState([]);
   const [categoryId, setCategoryId] = useState<number>();
   const [brandId, setBrandId] = useState<number>();
   const { data: categories } = useGetCategory({});
   const { data: brands } = useGetBrandsByCategory(categoryId || 0);
   const { data: brandCategories } = useGetBrandCategoryByBrand(brandId || 0);
   const { mutate: createProduct } = useCreateProduct();
   const { mutate: updateProduct } = useUpdateProduct();

   useEffect(() => {
      if (update.id) {
         form.setFieldsValue({
            name: update.name,
            price: update.price,
            category_id: update.category_id,
            brand_id: update.brand_id,
            brand_category_id: update.brand_category_id,
         });
      } else {
         form.resetFields();
      }
   }, [update, form]);
   useEffect(() => {
      setCategoryData(categories?.data?.data?.categories);
   }, [form, categories]);
   console.log(update.id, "update.id");

   const handleSubmit = (values: any) => {
      const editData: any = {
         name: values.name,
         price: parseInt(values.price),
         category_id: parseInt(values.category_id),
         brand_id: parseInt(values.brand_id),
         brand_category_id: parseInt(values.brand_category_id),
      };

      const formData: any = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("category_id", values.category_id);
      formData.append("brand_id", values.brand_id);
      formData.append("brand_category_id", values.brand_category_id);
      if (values.file && values.file.file) {
         formData.append("file", values.file.file);
      }

      if (update?.id) {
         updateProduct(
            { ...editData, id: update.id },
            {
               onSuccess: () => {
                  handleClose();
               },
            }
         );
      } else {
         createProduct(formData, {
            onSuccess: () => {
               handleClose();
            },
         });
      }
   };

   const changeCategory = (id: number) => {
      setCategoryId(id);
   };
   const changeBrand = (id: number) => {
      setBrandId(id);
   };

   return (
      <>
         <Drawer
            width={720}
            onClose={handleClose}
            open={open}
            styles={{
               body: {
                  paddingBottom: 80,
               },
            }}
         >
            <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        label="Product Name"
                        name="name"
                        rules={[
                           {
                              required: true,
                              message: "Please enter product name",
                           },
                        ]}
                     >
                        <Input allowClear />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        label="Product price"
                        name="price"
                        rules={[
                           {
                              required: true,
                              message: "Please enter url",
                           },
                        ]}
                     >
                        <Input type="number" allowClear />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        name="category_id"
                        label="Select category"
                        rules={[
                           {
                              required: true,
                              message: "Please choose the category",
                           },
                        ]}
                     >
                        <Select allowClear showSearch onSelect={changeCategory}>
                           {categoryData?.map((item: any, index: number) => (
                              <Option value={item.id} key={index}>
                                 {item.name}
                              </Option>
                           ))}
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        name="brand_id"
                        label="Select brand"
                        rules={[
                           {
                              required: true,
                              message: "Please choose the brand",
                           },
                        ]}
                     >
                        <Select
                           allowClear
                           showSearch
                           onSelect={changeBrand}
                           disabled={!form.getFieldValue("category_id")}
                        >
                           {brands?.data?.data.brands.map(
                              (item: any, index: number) => (
                                 <Option value={item.id} key={index}>
                                    {item.name}
                                 </Option>
                              )
                           )}
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        name="brand_category_id"
                        label="Select brand category"
                        rules={[
                           {
                              required: true,
                              message: "Please choose the brand category",
                           },
                        ]}
                     >
                        <Select
                           allowClear
                           showSearch
                           disabled={!form.getFieldValue("brand_id")}
                        >
                           {brandCategories?.data?.data?.brandCategories.map(
                              (item: any, index: number) => (
                                 <Option value={item.id} key={index}>
                                    {item.name}
                                 </Option>
                              )
                           )}
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     {!update.id && (
                        <Form.Item
                           name="files"
                           label="Product image"
                           rules={[
                              {
                                 required: true,
                                 message: "Please upload product image",
                              },
                           ]}
                        >
                           <Upload
                              beforeUpload={() => false}
                              maxCount={5}
                              listType="picture"
                              action={
                                 "https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              }
                           >
                              <Button
                                 className="w-full"
                                 icon={<UploadOutlined />}
                              >
                                 Upload Logo
                              </Button>
                           </Upload>
                        </Form.Item>
                     )}
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item>
                        <Button
                           htmlType="submit"
                           type="primary"
                           className="mt-10 py-4"
                        >
                           Add
                        </Button>
                        <Button className="ml-2" onClick={handleClose}>
                           cancel
                        </Button>
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </Drawer>
      </>
   );
};
export default Index;
