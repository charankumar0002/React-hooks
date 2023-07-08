import { React , useEffect, useState} from 'react'
import { Card,Container, Row ,Col } from 'react-bootstrap'
import './Cards.css'
import axios from 'axios';

export default function Cards() {
const [data,setData] = useState();

useEffect(() => {
   axios.get("https://kclrw6wk33ersmoincuawpzgju0iqsuj.lambda-url.us-west-2.on.aws/api/iquiz-admin/js-active-profiles").then(
        response => setData(Array.from(response.data))
    )
},[])

console.log(data)
  return (
    <Container className='ContainerBox' fluid>
    
       <div>
        {data?.map((item,index) => <Card className='CardBox'> <li key={item.id}>{item.email}</li> </Card>)}
        </div>
    
 </Container>
  )
}
