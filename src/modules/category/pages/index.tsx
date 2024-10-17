import { useEffect, useState } from "react";
import { Button, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCategory } from "../hooks/queries";
import { useDeleteCategory } from "../hooks/mutations";
import { Popconfirm, Table } from "@components";
import { RecordType, PaginationType } from "../types";

const index = () => {
   const [params, setParams] = useState({
      page: 1,
      limit: 5,
      search: "",
   });
   const { search } = useLocation();

   useEffect(() => {
      const params = new URLSearchParams(search);
      const page = Number(params.get("page")) || 1;
      const limit = Number(params.get("limit")) || 5;
      const search_val = params.get("search") || "";
      setParams((prev) => ({
         ...prev,
         search: search_val,
         page: page,
         limit: limit,
      }));
   }, [search]);

   const { data } = useGetCategory(params);
   const { mutate: deleteCategory } = useDeleteCategory();
   const navigate = useNavigate();

   const deleteData = (id: number) => {
      deleteCategory(id);
   };
   const editData = (data: RecordType) => {
      console.log(data);
   };
   const handleTableChange = (pagination: PaginationType) => {
      const { current, pageSize } = pagination;
      setParams((prev) => ({
         ...prev,
         page: current,
         limit: pageSize,
      }));
      const current_params = new URLSearchParams(search);
      current_params.set("page", `${current}`);
      current_params.set("limit", `${pageSize}`);
      navigate(`?${current_params}`);
   };

   const columns = [
      {
         title: "No",
         dataIndex: "no",
         key: "no",
         render: (_: string, __: RecordType, index: number) =>
            (params.page - 1) * params.limit + index + 1,
      },
      {
         title: "Name",
         dataIndex: "name",
         key: "name",
         onCell: (record: RecordType) => ({
            onClick: () => navigate(`/admin-layout/category/${record.id}`),
            style: { cursor: "pointer" },
         }),
      },
      {
         title: "Action",
         dataIndex: "action",
         key: "action",
         render: (_: string, record: RecordType) => (
            <div className="flex gap-6">
               <Popconfirm
                  title="Delete category?"
                  description="Are you sure to delete this category?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => deleteData(record.id)}
               >
                  <Tooltip title="Delete" color="#c2410c">
                     <Button>
                        <DeleteOutlined />
                     </Button>
                  </Tooltip>
               </Popconfirm>
               <Tooltip title="Edit" color="#c2410c">
                  <Button onClick={() => editData(record)}>
                     <EditOutlined />
                  </Button>
               </Tooltip>
            </div>
         ),
      },
   ];
   return (
      <>
         <Table
            data={data?.data?.data.categories || []}
            columns={columns}
            pagination={{
               current: params.page,
               pageSize: params.limit,
               total: data?.data?.data?.count || 0,
               showSizeChanger: true,
               pageSizeOptions: [2, 3, 5, 10, 20],
            }}
            onChange={handleTableChange}
         />
      </>
   );
};

export default index;
