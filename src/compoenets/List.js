import React, { Component } from 'react' ; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Card} from "react-bootstrap"; 






 class List extends Component {
    render() {
        return (
            <div>
            <h1>list user</h1>

            <div className="style">
              
            
                {this.props.table.map(el=>(
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
                <Card.Title>{el.username}</Card.Title>
                <Card.Text>{el.name}</Card.Text>
                <Card.Text>{el.email}</Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

))}
                 
                </div>
         
                </div>
           
        )
    }
}
export default List ; 