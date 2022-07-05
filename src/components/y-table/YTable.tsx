import React from 'react';
import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {YNodeType} from "../../modal";

export interface YTableProps extends YNodeType {
  dataSource: any;
  columns: ColumnsType<any>
}
const YTable: React.FC<YTableProps> = ( props ) => {
  return <>
    <Table bordered size={"middle"}
      dataSource={props.dataSource}
      columns={props.columns}
      rowKey={Math.random()+ ""}
    />
  </>
}

export default YTable;