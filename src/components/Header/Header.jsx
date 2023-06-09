import React, { useState } from 'react';
import logo from '../../assets/img/header/logo.svg';
import infoImg from '../../assets/img/header/1.svg';
import infoImg2 from '../../assets/img/header/2.svg';
import infoImg3 from '../../assets/img/header/3.svg';

import styles from './Header.module.scss';
const navigation = ['Games', 'Contact Us', 'Terms of Use', 'About'];

function Header() {
    const [activeNavItem, setActiveNavItem] = useState(0);

    return (
        <header className={styles.header}>
            <div className={styles.headerNavigation}>
                <div className={`${styles.navWrapper} container`}>
                    <nav className={styles.wrapper}>
                        <div className={styles.navWrapper__logo}>
                            <img src={logo} alt="logo" />
                        </div>
                        <ul className={styles.navWrapper__navigation}>
                            {navigation.map((item, index) => (
                                <li
                                    onClick={() => setActiveNavItem(index)}
                                    className={
                                        activeNavItem === index ? styles.active : ''
                                    }
                                    key={item}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.navWrapper__login}>
                        <button className={styles.singUp}>Sign up</button>
                        <button className={styles.login}>Log in</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.headerBox}>
                    <h1>
                        awesome html5 games
                        <br />- NO MONEY!
                    </h1>
                    <p>
                        Your perfect place to get some
                        <br />
                        fun and excitement
                    </p>
                    <div className={styles.headerBox__btn}>
                        <button className={styles.headerBox__login}>Log in</button>
                        <button className={styles.headerBox__play}>Play</button>
                    </div>

                    <div className={styles.headerBox__formWrapper}>
                        <div className={styles.form}>
                            <div className={styles.form__top}>
                                <h2>Create a free account now</h2>
                                <div className={styles.form__cards}>
                                    <div className={styles.form__info_item}>
                                        <img src={infoImg} alt="game" />
                                        <p>
                                            1000+ Games <br /> Available
                                        </p>
                                    </div>

                                    <div className={styles.form__info_item}>
                                        <img src={infoImg2} alt="game" />
                                        <p>
                                            New Game <br /> Every Week
                                        </p>
                                    </div>

                                    <div className={styles.form__info_item}>
                                        <img src={infoImg3} alt="game" />
                                        <p>
                                            Support Our <br /> Users 24/7
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <form action="#" className={styles.form__inputWrapper}>
                                <input type="text" placeholder="Firstname" />
                                <input type="text" placeholder="lastname" />
                                <input type="email" placeholder="Email address" />
                                <button>Join now</button>
                            </form>
                            <div className={styles.formFooter}>
                                <label>
                                    <input type="checkbox" />I accept the
                                    <span> Privacy Policy</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
