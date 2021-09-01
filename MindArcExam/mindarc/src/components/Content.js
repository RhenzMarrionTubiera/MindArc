import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import MoreInfo from './MoreInfo';

function Content() {

    //This is where we will get the data from a file data.json using fetch API then pass the value into "data" variable for use later on
    const [data,setData] = React.useState([]);

    const getData = () => {
        fetch('data.json', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }).then((response) => {
            return response.json();
          }).then((myJson) => {
            setData(myJson)
          });
    }

    //This is where the functionality for the React Bootstrap Modal along with the initialized "title" and "content" to be passed on the Modal
    const [modalShow, setModalShow] = React.useState(false);

    const [title, setTitle] = React.useState();
    const [content, setContent] = React.useState();

    const modalClick = (title, content) => {
        setModalShow(true);
        setTrigger(false);
        setTitle(title);
        setContent(content);
    }

    const [trigger, setTrigger] = React.useState();

    //Function for triggering onLoad
    const onLoad = () => {
        setModalShow(true);
        setTrigger(true);
    }

    //This is where the onLoad starts
    React.useEffect(() => {getData(); onLoad();},[])

    const boxStyle = {
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '8px',
        padding: '15px',
        margin: '15px'
    }
    const cardStyle = {
        width: '18rem',
        border: '0'
    }
    const buttonStyle = {
        border: '2px solid black',
        borderRadius: '50px'
    }
    const imageSrc = 'http://via.placeholder.com/400x300'

    //This is where the list of items from "data.json" are iterated for dynamic viewing of tabs items
    return (
        <CardGroup className="justify-content-md-center">
            {data.map((postData, index) => {
                return (
                    <div style={boxStyle} key={index}>
                        <Card style={cardStyle}>
                        <Card.Img variant="top" src={imageSrc} />
                        <Card.Body style={{textAlign: 'center'}}>
                            <Card.Title>{postData.title}</Card.Title>
                            <Card.Text>{postData.content}</Card.Text>
                            <Button style={buttonStyle} variant="outline-dark" onClick={() => modalClick(postData.title, postData.content)}><strong>READ MORE</strong></Button>
                        </Card.Body>
                        </Card>
                    </div>
                );
            })}

            {/* Modal body */}
            <MoreInfo show={modalShow} onHide={() => setModalShow(false)} triggertag={trigger} initdata={data} parenttitle={title} parentcontent={content} />

        </CardGroup>
    )
}

export default Content
