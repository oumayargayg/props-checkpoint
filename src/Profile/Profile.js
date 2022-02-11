import React from 'react'
import PropTypes from 'prop-types'
import {Card, Button} from 'react-bootstrap'
const Profile = (props) => {
    const handleName = (fullName) => alert(`My name is ${props.fullName}`)
return (
    <div style={{marginLeft:'40%'}} >
        <Card style={{ width: '18rem' }}>
    {props.children}
    <Card.Body>
        <Card.Title> {props.fullName} </Card.Title>
        <Card.Text> {props.Bio} </Card.Text>
        <Card.Text> {props.Profession} </Card.Text>
        <Button variant="primary" onClick={handleName}>Go somewhere</Button>
    </Card.Body>
    </Card>
        </div>
    )
}




Profile.propTypes = {
    age: PropTypes.number
}
Profile.defaultProps = {
    title: "this is a title"
}

export default Profile