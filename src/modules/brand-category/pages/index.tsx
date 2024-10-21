import { useEffect, useState } from "react";
import { Button, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetBrandCategory } from "../hooks/queries";
import { useDeleteBrandCategory } from "../hooks/mutations";
import { Popconfirm, Table, Search } from "@components";
import { RecordType } from "../types";
import { PaginationType } from "@types";
import { useGetBrands } from "../../brands/hooks/queries";
import Modal from "./modal";

const index = () => {
   const [open, setOpen] = useState(false);
   const [update, setUpdate] = useState({} as RecordType);
   const [params, setParams] = useState({
      page: 1,
      limit: 5,
      search: "",
   });
   const { search } = useLocation();
   const { data } = useGetBrandCategory(params);
   const { data: brandsData } = useGetBrands({});

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

   const { mutate: deleteBrandCategory } = useDeleteBrandCategory();
   const navigate = useNavigate();

   const openModal = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
      setUpdate({} as RecordType);
   };
   const deleteData = (id: number) => {
      deleteBrandCategory(id);
   };
   const editData = (data: RecordType) => {
      setUpdate(data);
      openModal();
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
   const handleSearch = (value: string) => {
      setParams((prev) => ({
         ...prev,
         search: value,
      }));
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
      },
      {
         title: "Action",
         dataIndex: "action",
         key: "action",
         render: (_: string, record: RecordType) => (
            <div className="flex gap-6">
               <Popconfirm
                  title="Delete brand category?"
                  description="Are you sure to delete this brand category?"
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
         <Modal
            open={open}
            handleClose={handleClose}
            update={update}
            brandsData={brandsData?.data?.data.brands || []}
         />
         <div className="flex justify-between mb-10">
            <Search
               placeholder="Search brand category..."
               searchParamKey="search"
               onSearch={handleSearch}
            />
            <Button
               type="primary"
               onClick={openModal}
               className="rounded-lg px-4 py-5"
            >
               <span className="ml-2">Add Brand Category</span>
            </Button>
         </div>
         <Table
            data={data?.data?.data.brandCategories || []}
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
