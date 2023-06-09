import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Popup from './components/Popup/Popup';
import './scss/App.scss';

function App() {
    const [showModal, setShowModal] = useState(true);

    return (
        <>
            <div className="bg_hero">
                <Header />
            </div>
            <div className="bg_main ">
                <div className="container">
                    <MainSection />
                    <Form />
                </div>
            </div>
            <Footer />
            {showModal && <Popup setShowModal={setShowModal} />}
        </>
    );
}

export default App;
