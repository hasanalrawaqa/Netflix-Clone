import  { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap/';

function ModalMovie(props) {
    const [userCaption, setUserCaption] = useState('');

    function handleCaption(j) {
        j.preventDefault();
        const newData = { ...props.movie, userCaption };
        props.addComment(newData, props.movie.id);
    }

    function handleUserCaptionChange(event) {
        setUserCaption(event.target.value);
    }

    return (
        <>
            <Modal show={props.show} onHide={() => { props.handleColse() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width='100%' src={props.movie.poster_path} alt={props.movie.title} />
                    <p>{props.movie.topText ? props.movie.topText : "No Text Provided"}</p>
                    <p>{props.movie.caption}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Captions:</Form.Label>
                        <Form.Control type="textarea" placeholder={props.movie.caption ? props.movie.caption : "Add Your Caption Here..."} onChange={handleUserCaptionChange} value={userCaption} />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}>
                        Add a Caption
                    </Button>
                    <Button variant="secondary" onClick={props.handleColse}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie;