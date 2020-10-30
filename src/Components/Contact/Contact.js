import React, { useState } from 'react'
import SocialLink from '../About/SocialLink';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

function Contact() {
    const { register, handleSubmit, errors } = useForm();
    const [notification, setNotification] = useState({});

    const onSubmit = (data, e) => {
        emailjs.sendForm('service_zkv0pzh', 'template_53k1t8i', e.target, 'user_44SfA9a2DcUOyBra8BV5h')
            .then((result) => {
                if (result.text === 'OK') {
                    setNotification({ type: 'success', msg: 'Message sent successfully' });
                    setTimeout(() => setNotification({}), 2000)
                }
                e.target.reset();
            }, (error) => {
                setNotification({ type: 'danger', msg: 'Something went wrong! Please try again' });
                setTimeout(() => setNotification({}), 2000);
                e.target.reset();
            });
    };

    const inputFieldClass = 'form-control mb-2 border-dark py-4 rounded-0';
    return (
        <motion.div
            className='container'
            style={{ paddingLeft: '100px', paddingTop: '50px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="card p-5 mt-3"
            >

                {notification && <div className={`alert alert-${notification.type}`}>{notification.msg}</div>}
                <h3 className="text-center py-3">Send your message</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        name='name'
                        placeholder='Your Name'
                        ref={register({ required: true })}
                        className={errors.name ? `${inputFieldClass} is-invalid` : inputFieldClass}
                    />
                    {errors.name && <div className="invalid-feedback pb-1">Name is required.</div>}
                    <input
                        type="email"
                        name='email'
                        ref={register({ required: true })}
                        placeholder='Your Email'
                        className={errors.email ? `${inputFieldClass} is-invalid` : inputFieldClass}
                    />
                    {errors.email && <div className="invalid-feedback pb-1">Email is required.</div>}
                    <textarea
                        name="message"
                        cols="5"
                        ref={register({ required: true })}
                        rows="3"
                        placeholder='Message'
                        className={errors.message ? `${inputFieldClass} is-invalid` : inputFieldClass}>
                    </textarea>
                    {errors.message && <div className="invalid-feedback pb-1">Please add some text ..</div>}
                    <input type="submit" className='btn btn-lg btn-dark rounded-0 mb-5' />
                    <SocialLink />
                </form>
            </div>
        </motion.div>
    )
}

export default Contact;
