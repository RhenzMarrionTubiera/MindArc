import React from 'react'
import Modal from 'react-bootstrap/Modal';

function MoreInfo(props) {
    let title;
    let content;
    //For checking if the data came from onLoad or as per clicking the Read More button to show the Modal
    if(props.triggertag){
        props.initdata.forEach(function (item, index) {
            if(index === 0){
                title = item.title;
                content = item.content;
            }
        });
    }else{
        title = props.parenttitle;
        content = props.parentcontent;
    }
    //Modal body
    return (
        <div>
            <Modal {...props} size="xs" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            </Modal>
        </div>
    )
}

export default MoreInfo
