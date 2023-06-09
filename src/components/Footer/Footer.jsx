import React from 'react';

import inst from '../../assets/img/inst.svg'
import facebook from '../../assets/img/facebook.svg'
import twitter from '../../assets/img/twitter.svg'

import styles from './Footer.module.scss';
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.info}>
                    <h3>Disclaimer | Privacy Policy | Terms of Conditions</h3>
                    <p>
                        This site does not provide any form of online gambling and
                        delivers information for entertainment and research purposes only.
                        The games listed by Topwinningslots are intended for adult
                        audience entertainment (underage visitors are restricted) and do
                        not offer real money or prizes. Practicing online free games does
                        not imply future success at 'real money' gambling.
                    </p>
                    <div className={styles.social}>
                        <p>2022 | © Lorem Inc. All Rights Reserved</p>
                        <div>
                            <img src={twitter} alt="twitter" />
                            <img src={facebook} alt="facebook" />
                            <img src={inst} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
