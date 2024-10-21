import { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { ModalProps } from "@types";
import { BrandsType } from "../types";
import { useGetCategory } from "../../category/hooks/queries";

const Index = ({ open, handleClose, update }: ModalProps) => {
   const [form] = Form.useForm();
   const [file, setFile] = useState<string | File>("");

   useEffect(() => {
      if (update?.id) {
         form.setFieldsValue({
            name: update.name,
            description: update.description,
            categoryId: update.category_id,
         });
      } else {
         form.resetFields();
      }
   }, [update, form]);

   const { data: categories } = useGetCategory({});

   const handleChange = (e: any) => {
      let fileData = e.target.files[0];
      setFile(fileData);
   };

   const handleSubmit = async (values: BrandsType) => {
      console.log(values);
   };

   return (
      <>
         <Modal
            open={open}
            title={update?.id ? "Update brand" : "Add new brand"}
            onCancel={handleClose}
            width={500}
            footer={
               <div
                  style={{
                     display: "flex",
                     justifyContent: "flex-start",
                     gap: "10px",
                  }}
               >
                  <Button type="primary" form="basic" htmlType="submit">
                     {update?.id ? "Update" : "Submit"}
                  </Button>
                  <Button onClick={handleClose}>Cancel</Button>
               </div>
            }
         >
            <Form form={form} id="basic" name="basic" onFinish={handleSubmit}>
               <Form.Item
                  label="Brand name"
                  name="name"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please input brand name!",
                     },
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label="Category"
                  name="categoryId"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please select category!",
                     },
                  ]}
               >
                  <Select allowClear showSearch placeholder="Select a Category">
                     {categories?.data.data.categories?.map((item: any) => (
                        <Select.Option value={item.id} key={item.id}>
                           {item.name}
                        </Select.Option>
                     ))}
                  </Select>
               </Form.Item>
               <Form.Item
                  label="Description"
                  name="description"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please input description!",
                     },
                  ]}
               >
                  <Input.TextArea allowClear />
               </Form.Item>
               {!update.id && (
                  <Form.Item
                     label="Brand logo"
                     name="file"
                     labelCol={{ span: 24 }}
                     wrapperCol={{ span: 24 }}
                     rules={[
                        {
                           required: true,
                           message: "Please upload brand logo!",
                        },
                     ]}
                  >
                     <Input type="file" onChange={handleChange} />
                  </Form.Item>
               )}
            </Form>
         </Modal>
      </>
   );
};

export default Index;
