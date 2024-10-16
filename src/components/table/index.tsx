import { Table } from "antd";

const Index = ({ data, pagination, onChange, columns }: any) => {
   return (
      <Table
         columns={columns}
         dataSource={data}
         pagination={pagination}
         onChange={(pagination) => onChange(pagination)}
         rowKey={(record) => record.id || `${record.name}_${Math.random()}`}
         bordered
      />
   );
};

export default Index;
