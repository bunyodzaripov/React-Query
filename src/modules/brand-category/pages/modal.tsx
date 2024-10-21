import { useEffect } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { ModalProps } from "@types";
import { BrandCategoryType } from "../types";
import {
   useCreateBrandCategory,
   useUpdateBrandCategory,
} from "../hooks/mutations";

const Index = ({ open, handleClose, update, brandsData }: ModalProps) => {
   const [form] = Form.useForm();

   useEffect(() => {
      if (update?.id) {
         form.setFieldsValue({
            name: update.name,
            brand_id: update.brand_id,
         });
      } else {
         form.resetFields();
      }
   }, [update, form]);

   const { mutate: createBrandCategory } = useCreateBrandCategory();
   const { mutate: updateBrandCategory } = useUpdateBrandCategory();

   const handleSubmit = async (values: BrandCategoryType) => {
      console.log(values, "values");

      if (update?.id) {
         updateBrandCategory(
            { ...values, id: update.id },
            {
               onSuccess: () => {
                  handleClose();
               },
            }
         );
      } else {
         createBrandCategory(values, {
            onSuccess: () => {
               handleClose();
            },
         });
      }
   };

   return (
      <>
         <Modal
            open={open}
            title={
               update?.id ? "Update brand category" : "Add new brand category"
            }
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
                  label="Brand category name"
                  name="name"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please input brand category name!",
                     },
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label="Brands"
                  name="brand_id"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please select category!",
                     },
                  ]}
               >
                  <Select allowClear showSearch placeholder="Select a Brands">
                     {brandsData?.map((item: any) => (
                        <Select.Option value={item.id} key={item.id}>
                           {item.name}
                        </Select.Option>
                     ))}
                  </Select>
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
};

export default Index;
