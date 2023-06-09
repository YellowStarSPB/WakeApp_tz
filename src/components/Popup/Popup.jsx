import { useEffect } from 'react';
import styles from './Popup.module.scss';
function Popup({ setShowModal }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = '');
    }, []);

    return (
        <div className={styles.bg}>
            <div className={styles.popUp}>
                <div className={styles.btnWrapper}>
                    <button className={styles.active}>Sign Up</button>
                    <button>Login</button>
                </div>
                <div className={styles.formWrapper}>
                    <input type="text" placeholder="Firstname" />
                    <input type="text" placeholder="Lastname" />
                    <input type="email" placeholder="Email" />
                    <div className={styles.password}>
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                </div>

                <div className={styles.policy}>
                    <label>
                        <input type="checkbox" />I accept the
                        <span> Privacy Policy</span>
                    </label>
                </div>
                <div className={styles.btn}>
                    <button onClick={() => setShowModal(false)}>Join now</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
