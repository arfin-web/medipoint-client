import React, { useRef } from 'react';
import './Contact.css';
import useAuth from '../../Hooks/useAuth';
import emailjs from 'emailjs-com';

const Contact = () => {
    const { user } = useAuth();
    const contactimg = 'https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?b=1&k=20&m=1271752802&s=170667a&w=0&h=sMEPVY49FAy2UHkhyQLWDHlAhYsR2F2NDkNlSEteO3s=';
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o6517kp', 'template_narxogp', form.current, 'user_ODdpKQ7lUpHGR3sVtpazS')
            .then((result) => {
                console.log(result.text);
                alert('Your message has been sent')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div className="container-fluid contact-container p-5">
                    <div className="card mb-3 border-0 rounded-3 shadow">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="fs-3">Stay With Us</p>
                                    <div className="mb-3">
                                        <input type="text" value={user?.displayName} className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" value={user?.email} className="form-control" id="formGroupExampleInput" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className='btn btn-primary bg-gradient' value="Send" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={contactimg} className="img-fluid rounded-start h-100" alt="contact" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Contact;