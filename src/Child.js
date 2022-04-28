import { Button, TextField } from '@material-ui/core'
import React from 'react'

function Child(props) {
    const [data,setData]=React.useState(0)
    const [search,setSearch]=React.useState("")
  return (
    <div>
        <h1>{data}</h1>
        <h1>{search}</h1>
        <TextField onChange={(e)=>props.searchfun(e.target.value)}></TextField>
        <Button onClick={()=>props.plusfun(data,setData)}>Click me</Button>
    </div>
  )
}

export default Child