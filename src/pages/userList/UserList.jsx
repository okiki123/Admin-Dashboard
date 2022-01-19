import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }
  
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 130 },
        { field: 'email', headerName: 'Email', width: 180 },
        {
          field: 'status',
          headerName: 'Status',
          width: 100,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'action',
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
              <Link to={"/user/"+params.row.id}>
              <button className='userListEdit'>Edit</button>
              </Link>
              <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)}/>
              </>
            )
          }
        }
      ];
      
      
    return (
        <div className='userList'>
             <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}

export default UserList
