import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useSignInMutation } from "../../auth/hooks/mutations";
import SignInImg from "../../../assets/sign-in.jpg";
import { SignInType } from "../types";

const SignIn = () => {
   const { mutate } = useSignInMutation();

   const handleSubmit = (values: SignInType) => {
      mutate(values);
   };

   return (
      <div className="w-[100%] h-[100vh] flex  container mx-auto">
         <div className="w-[50%] flex justify-center items-center">
            <img className="w-50" src={SignInImg} alt="sign-in" />
         </div>
         <div className="w-[50%] flex justify-center items-center">
            <div>
               <h1 className="text-3xl font-semibold mb-4  text-[#c2410c]">
                  Login
               </h1>
               <Form className="w-[300px]" name="basic" onFinish={handleSubmit}>
                  <Form.Item
                     label="Phone number"
                     name="phone_number"
                     labelCol={{
                        span: 24,
                     }}
                     wrapperCol={{
                        span: 24,
                     }}
                     rules={[
                        {
                           required: true,
                           message: "Please input your phone number!",
                        },
                     ]}
                  >
                     <Input className="py-2" allowClear />
                  </Form.Item>

                  <Form.Item
                     label="Password"
                     name="password"
                     labelCol={{
                        span: 24,
                     }}
                     wrapperCol={{
                        span: 24,
                     }}
                     rules={[
                        {
                           required: true,
                           message: "Please input your password!",
                        },
                     ]}
                  >
                     <Input.Password className="py-2" allowClear showCount />
                  </Form.Item>

                  <Form.Item
                     wrapperCol={{
                        span: 24,
                     }}
                  >
                     <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full mt-"
                        size="large"
                     >
                        Submit
                     </Button>
                  </Form.Item>
                  <div className="flex justify-between items-center">
                     <p className="text-sm text-gray-500">
                        Don't have an account?
                     </p>
                     <Link
                        to="/sign-up"
                        className={"text-[#c2410c] bold text-lg"}
                     >
                        Register
                     </Link>
                  </div>
               </Form>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
