import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { useHistory } from 'react-router-dom'

const Lister = ({data, limit}) => {

  const history = useHistory()
  
  const renderCell = data => {
      const onClick = _ => {
      history.push({
        pathname: `/details/${data.row.kafka_topic}/${data.row.kafka_offset}`,
        state: {
          identifierType: data.row.identifier_type,
          identifierValue: data.row.identifier_value,
          partition: data.row.kafka_partition
        }
      })
    }

    return (
      <div
        onClick={onClick}
        style={{cursor: 'pointer'}}
      >{data.row.kafka_offset}</div>
    )
  }
  
  const columns = [
    { field: 'kafka_topic', headerName: 'Topic', flex: 0.8 },
    { field: 'kafka_partition', headerName: 'Partition', flex: 0.3 },
    { field: 'kafka_offset', headerName: 'Offset', flex: 0.3, renderCell },
    { field: 'identifier_type', headerName: 'Identifier Type', flex: 0.6 },
    { field: 'identifier_value', headerName: 'Identifier Value', flex: 1 },
  ]

  return (
    <div style={{ height: '82vh', width: '100%' }}>
      {(data.length > 0 && data.length < limit) && <DataGrid hideFooter rows={data.map(d => {
        return { ...d, id: Math.random().toString(20)}
      })} columns={columns} />}
      {data.length >= limit && <p style={{fontSize: 14}}>Too many rows</p>}
    </div>
  )
}

export default Lister
