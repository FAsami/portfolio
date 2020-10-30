import React, { useState } from 'react'
import SocialLink from '../About/SocialLink';
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { sendEmail } from './sendmail';

function Contact() {
    const { register, handleSubmit, errors } = useForm();
    const [notification, setNotification] = useState({});

    const onSubmit = (data, e) => {
        sendEmail(e, setNotification);
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
            <h3 className="text-center pt-3">Contact</h3>

            <div className="card card-shadow p-5 mt-3">
                {notification && <div className={`alert alert-${notification.type}`}>{notification.msg}</div>}
                <h3 className="text-center">Send your message</h3>
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
