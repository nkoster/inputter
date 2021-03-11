import React from 'react'
import { DataGrid } from '@material-ui/data-grid'

const columns = [
  { field: 'kafka_topic', headerName: 'Kafka Topic', flex: 1 },
  { field: 'kafka_offset', headerName: 'Kafka Offset', flex: 0.4 },
  { field: 'identifier_type', headerName: 'Identifier Type', flex: 1 },
  { field: 'identifier_value', headerName: 'Identifier Value', flex: 1 },
]

const Lister = ({data, limit}) => {
  return (
    <div style={{ height: 500, width: '100%' }}>
      {(data.length > 0 && data.length < limit) && <DataGrid hideFooter rows={data.map(d => {
        return { ...d, id: Math.random().toString(20)}
      })} columns={columns} />}
      {data.length >= limit && <p style={{fontSize: 14}}>Too many rows</p>}
    </div>
  )
}

export default Lister
