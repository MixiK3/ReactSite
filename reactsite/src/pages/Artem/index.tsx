import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import axios from 'axios'

const Artem = () => {
  const [page, setPage] = useState(1)
  const [universityData, setUniversityData] = useState([])

  const fetchUniversityData = async () => {
    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search?offset=${
          (page - 1) * 5
        }&limit=${10}`
      )
      setUniversityData(response.data)
    } catch (error) {
      console.error('Error fetching university data:', error)
    }
  }

  useEffect(() => {
    fetchUniversityData()
  }, [page])

  const tableColumns = [
    {
      title: 'Страна',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Название школы',
      dataIndex: 'name',
      key: 'name',
    },
  ]

  const handlePageChange = (nextPage: React.SetStateAction<number>) => {
    setPage(nextPage)
  }

  return (
    <>
      <Table
        dataSource={universityData}
        columns={tableColumns}
        pagination={false}
      />
      <div>
        <Button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Назад
        </Button>
        <span>Страница: {page}</span>
        <Button onClick={() => handlePageChange(page + 1)}>Вперед</Button>
      </div>
    </>
  )
}

export default Artem
