import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import axios from 'axios'

const Artem = () => {
  const [page, setPage] = useState(1)
  const [universityData, setUniversityData] = useState([])

  const PAGE_LIMIT = 5
  const fetchOffset = (page - 1) * PAGE_LIMIT

  const fetchUniversityData = async (offset: any, limit: any) => {
    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`
      )
      setUniversityData(response.data)
    } catch (error) {
      console.error('Error fetching university data:', error)
    }
  }

  useEffect(() => {
    fetchUniversityData(fetchOffset, PAGE_LIMIT)
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
