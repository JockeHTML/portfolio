import React from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';
import cx from 'classnames';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_206hzpv', 'template_byl1c47', e.target, "user_WCegDg1lg7n89Cavfa2QJ")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}


function ContactForm(props) {
    return (
        <div className={styles.formWrapper}>
            <div className={styles.formHeading}>
                <h1>CONTACT ME</h1>
                <h4>Wanna get in touch?</h4>
            </div>
                <form autoComplete="off" onSubmit={sendEmail} className={styles.form}>
                    <div className={cx (styles.input, styles.name)}>
                        <input autoComplete="off" placeholder="Name" type="text" name="name" />
                    </div>
                    <div className={cx(styles.input, styles.email)}>
                        <input autoComplete="off" placeholder="Email" type="text" name="email" />
                    </div>
                    <div className={cx(styles.input, styles.subject)}>
                        <input autoComplete="off" placeholder="Subject" type="text" name="subject" />
                    </div>
                    <div className={cx(styles.input, styles.message)}>
                        <textarea autoComplete="off" placeholder="Your Message" type="text" name="message" />
                    </div>
                    <div className={styles.formButton}>
                        <button type="submit">SUBMIT</button>
                    </div>
                    
                </form>   
           
        </div>
    );
}

export default ContactForm;