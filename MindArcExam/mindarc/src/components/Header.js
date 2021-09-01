import React from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Header() {
    const headerStyle = {
        padding: '0',
        position: 'relative'
    }
    const captionStyle = {
        position: 'absolute',
        top: '0',
        fontSize:'5vw',
        color: '#FFF',
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        opacity: '0.4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
    const textStyle = {
        textAlign: 'center',
        opacity: '1 !important'
    }

    //For checking device useragent to check if it is mobile version or not and change the background image source
    const ua = navigator.userAgent;
    let imageSrc;
    if (/Android|iPhone/i.test(ua)) {
        imageSrc = 'http://via.placeholder.com/600x600'
    } else {
        imageSrc = 'http://via.placeholder.com/1920x650'
    }
    return (
        <Col style={headerStyle}>
            <Image src={imageSrc} fluid />
            <div style={captionStyle}>
                <h1 style={textStyle}>
                    Hello Developer!
                    <p style={{fontSize: '20px', color: 'silver'}}>Lorem ipsum dolores sit ameticakno, consectetur adipiscing ngelot elit man this text is funny!</p>
                </h1>
            </div>
        </Col>
    )
}

export default Header
