import React from 'react'
import './qr-code.css'
import QR from '../../assets/qrcode/images/image-qr-code.png'

const QrCode = () => {
    return (
        <div id="qr">
            <main className="container">
                <div className="card">
                    <img src={QR} alt="" />
                    <div className="text">
                        <h2>Improve your front-end skills by building projects</h2>
                        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                    </div>
                </div>
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                    Coded by <a href="https://github.com/MyMoose">Changwoo Lee</a>.
                </div>
            </main>
        </div>

    )
}

export default QrCode