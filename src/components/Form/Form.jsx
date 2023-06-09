import React from 'react';
import img from '../../assets/img/image.png';
import styles from './Form.module.scss';

function Form() {
    return (
        <section className={styles.formSection}>
            <h2>Contact us</h2>
            <p>If you have some questions, send us a message</p>
            <div className={styles.wrapper}>
                <form action="#">
                    <input type="text" placeholder="Firstname" />
                    <input type="email" placeholder="Email Address" />
                    <textarea type="text" placeholder="Your message here..." />
                    <div className={styles.formFooter}>
                        <label>
                            <input type="checkbox" />I accept the 
                            <span> Privacy Policy</span>
                        </label>
                        <button>Send</button>
                    </div>
                </form>
            </div>
            <img src={img} alt="spinImg" />
        </section>
    );
}

export default Form;
