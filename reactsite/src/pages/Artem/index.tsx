import React, { useState, useEffect } from 'react'
import { Table, Button, TableColumnsType } from 'antd'

const Artem = () => {
  const data = [
    { key: '1', name: 'John', age: 25, address: '123 Street' },
    { key: '2', name: 'Bob', age: 40, address: '789 Road' },
    { key: '3', name: 'John', age: 25, address: '123 Street' },
    { key: '4', name: 'Jane', age: 30, address: '456 Avenue' },
    { key: '5', name: 'Bob', age: 40, address: '789 Road' },
    { key: '6', name: 'Alice', age: 35, address: '321 Boulevard' },
    { key: '7', name: 'David', age: 28, address: '555 Court' },
    { key: '8', name: 'Eva', age: 33, address: '678 Lane' },
    { key: '9', name: 'Michael', age: 45, address: '910 Drive' },
    { key: '10', name: 'Sarah', age: 29, address: '222 Terrace' },
    { key: '11', name: 'Ryan', age: 32, address: '333 Circle' },
    { key: '12', name: 'Olivia', age: 37, address: '444 Lane' },
    { key: '13', name: 'Liam', age: 31, address: '555 Place' },
    { key: '14', name: 'Sophia', age: 36, address: '666 Road' },
    { key: '15', name: 'James', age: 42, address: '777 Avenue' },
    { key: '16', name: 'Emily', age: 27, address: '888 Street' },
    { key: '17', name: 'Matthew', age: 34, address: '999 Court' },
    { key: '18', name: 'Ava', age: 39, address: '000 Drive' },
    { key: '19', name: 'Daniel', age: 26, address: '111 Terrace' },
    { key: '20', name: 'Chloe', age: 41, address: '222 Circle' },
    { key: '21', name: 'Benjamin', age: 38, address: '333 Boulevard' },
    { key: '22', name: 'Mia', age: 43, address: '444 Place' },
    { key: '23', name: 'William', age: 24, address: '555 Lane' },
    { key: '24', name: 'Amelia', age: 46, address: '666 Road' },
    { key: '25', name: 'Ethan', age: 23, address: '777 Avenue' },
    { key: '26', name: 'Victoria', age: 44, address: '888 Street' },
    { key: '27', name: 'Madison', age: 22, address: '999 Court' },
    { key: '28', name: 'Aiden', age: 47, address: '000 Drive' },
    { key: '29', name: 'Grace', age: 21, address: '111 Terrace' },
    { key: '30', name: 'Logan', age: 48, address: '222 Circle' },
    { key: '31', name: 'Natalie', age: 20, address: '333 Boulevard' },
  ]

  const [tableData, setTableData] = useState<
    { name: string; age: number; address: string }[]
  >([])
  const [page, setPage] = useState(1)

  const limit = 10

  const fetchTableData = (offset: number, limit: number) => {
    const startIndex = offset
    const endIndex = offset + limit
    const dataSlice: {
      key: string
      name: string
      age: number
      address: string
    }[] = data.slice(startIndex, endIndex)
    setTableData(dataSlice)
  }

  useEffect(() => {
    fetchTableData(0, limit)
  }, [])

  const handlePrevious = () => {
    if (page > 1) {
      const offset = (page - 2) * limit
      fetchTableData(offset, limit)
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    const offset = page * limit
    const dataSlice = data.slice(offset, offset + limit)
    if (dataSlice.length > 0) {
      fetchTableData(offset, limit)
      setPage(page + 1)
    }
  }

  const columns: TableColumnsType<{
    name: string
    age: number
    address: string
  }> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  return (
    <>
      <Table columns={columns} dataSource={tableData} pagination={false} />
      <div className="pagination">
        <Button onClick={handlePrevious} disabled={page === 1}>
          Назад
        </Button>
        <span className="page-number">Страница: {page}</span>
        <Button onClick={handleNext}>Вперёд</Button>
      </div>
    </>
  )
}

export default Artem
