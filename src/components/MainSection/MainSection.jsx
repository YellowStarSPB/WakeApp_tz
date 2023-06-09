import React from 'react';
import game7 from '../../assets/img/game/gametype 7.png'
import game8 from '../../assets/img/game/gametype 8.png'
import game9 from '../../assets/img/game/gametype 9.png'
import { gameCard } from './mock';

import styles from './MainSection.module.scss';

function MainSection() {
    return (
        <section className={styles.main}>
            <h2>Our Games</h2>
            <div className={styles.titleWrapper}>
                <p>Get Virtual Welcome bonus after Sign Up</p>
                <button>All games</button>
            </div>
            <div className={styles.gameWrapper}>
                <div className={styles.leftWrapper}>
                    {gameCard.map(({ img, title, subTitle }, index) => (
                        <div key={index} className={styles.gameCard}>
                            <img src={img} alt="game" />
                            <h3>{title}</h3>
                            <p>{subTitle}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.rightWrapper}>
                    <div className={styles.rightWrapperTop}>
                        <div className={styles.gameCard}>
                            <img src={game7} alt="game" />
                        </div>
                        <div className={styles.gameCard}>
                            <img src={game8} alt="game" />
                        </div>
                    </div>
                    <div className={styles.gameCard}>
                        <img src={game9} alt="game" />
                        <h3>Our deals are not to be missed</h3>
                        <p>Discover a wide range of weekly promotions</p>
                    </div>
                </div>
            </div>
            <p>
                * We don't offer opportunities to play for real money. Our games are free
                demo. All games were invented for entertainment purposes only and do not
                offer real money prizes.
            </p>
        </section>
    );
}

export default MainSection;
