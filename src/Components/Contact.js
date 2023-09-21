import React from 'react'
import contact_image from '../Image/contact_image.png'
import Input from './Input'
import { TextareaAutosize } from '@mui/material'




const Contact = () => {

    const textareaStyle = {
        backgroundColor: 'transparent',
        padding: '10px',
        border: '1px solid #9b9b9b',
        borderRadius: '5px',
        width: '80%',
        fontSize: '16px',
        color: 'white',
        height: '90px',
        margin: '20px 0',
        fontFamily: "Oswald",
    };
    return (
        <>
            <h1 className='name' style={{ color: "white" }} >Contact</h1>
            <p>Get in touch and let me know how I can help.</p>
            <div style={{ backgroundColor: 'transparent' }} className='container'>
                <div className='row d-flex justify-content-around align-items-center' >
                    <div className='col-lg-5'>
                        <img className='w-lg-100 w-75 contact_image' src={contact_image} alt="contact_image" />
                    </div>
                    <div className='col-lg-2 d-flex flex-lg-column gap-lg-3 gap-0 social_handles social-links' >
                        <div className="social-links">
                            <div id="twitter" className="social-btn flex-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="black" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
                                </svg><span>Facebook</span>
                            </div>
                            <div id="linkedin" className="social-btn flex-center">
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="black" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2zM1 19V6h4v13H1zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7v-8.556z" />
                                </svg><span>Linkedin</span>
                            </div>
                            <div id="github" className="social-btn flex-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="black" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z" />
                                </svg><span>Gmail</span>
                            </div>
                            <div id="github" className="social-btn flex-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none">
                                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                                        <path fill="#000000" d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581a9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z" />
                                    </g>
                                </svg><span>Github</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 input_field'>
                        <Input innerText={"Name"} type={"text"} />
                        <Input innerText={"Email"} type={"email"} />
                        <Input innerText={"Phone no."} type={"number"} />
                        <TextareaAutosize
                            placeholder="Write message..."
                            style={textareaStyle}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'cyan';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#ccc';
                            }}
                        />
                        <br />
                        <button className="send_button" >SEND</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact