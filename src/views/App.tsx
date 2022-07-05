import React, {useEffect, useState} from 'react';
import { PageContent } from 'components/styled';
import YTable from "../components/y-table/YTable";
import {ColumnsType} from "antd/es/table";

type TableDataProps = {
  data1: number;
  data2: number;
  data3: number;
  data4: number;
  data5: number;
  key: string
}

function App() {
  const [tableData, setTableData] = useState<Array<TableDataProps>>([]);

  useEffect(() => {
    setTableData([
      { key: "1", data1: 1, data2: 2, data3: 3, data4: 4, data5: 5 },
      { key: "2", data1: 1, data2: 2, data3: 3, data4: 4, data5: 5 },
      { key: "3", data1: 1, data2: 2, data3: 3, data4: 4, data5: 5 }
    ])
  }, [setTableData])

  const columns: ColumnsType<TableDataProps> = [
    { title: "列1", dataIndex: 'data1', key: "data1" },
    { title: "列2", dataIndex: 'data2', key: "data2" },
    { title: "列3", dataIndex: 'data3', key: "data3" },
    { title: "列4", dataIndex: 'data4', key: "data4" },
    { title: "列5", dataIndex: 'data5', key: "data5" },
  ]

  return <PageContent>
    <YTable
      dataSource={tableData}
      columns={columns} />
  </PageContent>
}

export default App;