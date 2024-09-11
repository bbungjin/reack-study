import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';


function MuiExample() {
  const [user, setUser] = useState({name:"", age:''});
  const [view, setView] = useState([]);
  const [search, setSearch] = useState('');

  const getUser = (e) => {
    const idx = e.target;
    setUser({...user, [idx.name]:idx.value});
  }

  const logUser = (e) => {
    setView([...view,{...user}]);
  }

  const modUser = (index) => {
    console.log(view[index]);
  }
  const delUser = (index)=>{
    setView(view[index])
  }
  return(
    <div>
      <div>
        <Input name='name' onChange={getUser}>이름</Input>
        <Input name='age' onChange={getUser}>나이</Input>
        <Button variant="contained" onClick={logUser}>응애</Button>
      </div>
      <div>
        <Input onChange={(e) => setSearch(e.target.value)}>검색어</Input>
      </div>
      
      <div>
      <Table border={1}>
        <TableHead>
            <TableCell>이름</TableCell>
            <TableCell>나이</TableCell>
            <TableCell>수정</TableCell>
            <TableCell>삭제</TableCell>
        </TableHead>
          {view
            .filter(({name})=> name.includes(search))
            .map(({name, age}, index)=> 
            <TableRow>
              <TableCell >{name}</TableCell >
              <TableCell >{age}</TableCell >
              <TableCell ><Button variant="contained" onClick={()=>modUser(index)}>수정</Button></TableCell>
              <TableCell ><Button variant="contained" onClick={()=>delUser(index)}>삭제</Button></TableCell>
            </TableRow>)}
        </Table>
      </div>
    </div>
  )
}

export default MuiExample;