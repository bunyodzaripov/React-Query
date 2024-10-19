import { Button, Modal, Form, Input } from "antd";
import { ModalProps } from "@types";
import { CategoryType } from "../../category/types";
import {
   useCreateSubCategory,
   useUpdateSubCategory,
} from "../../sub-category/hooks/mutations";
import { useEffect } from "react";

const Index = ({ open, handleClose, update, id }: ModalProps) => {
   const [form] = Form.useForm();

   const { mutate: createSubCategory } = useCreateSubCategory();
   const { mutate: updateSubCategory } = useUpdateSubCategory();

   useEffect(() => {
      if (open) {
         if (update) {
            form.setFieldsValue({
               name: update.name,
            });
         } else {
            form.resetFields();
         }
      }
   }, [open, update, form]);

   const handleSubmit = (values: CategoryType) => {
      if (update.id) {
         updateSubCategory(
            { ...values, id: update.id },
            {
               onSuccess: () => {
                  handleClose();
               },
            }
         );
      } else {
         createSubCategory(
            {
               ...values,
               parent_category_id: id,
            },
            {
               onSuccess: () => {
                  handleClose();
               },
            }
         );
      }
   };

   return (
      <>
         <Modal
            open={open}
            title={update?.id ? "Update Subcategory" : "Add new subcategory"}
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
                  label="Subcategory name"
                  name="name"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please input Subcategory name!",
                     },
                  ]}
               >
                  <Input />
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
};

export default Index;
