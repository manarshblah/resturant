import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer'
import SecOne from './component/Section-one';
import SecTow from './component/section-tow';
import ItemFood from './component/ItemFood';
import SecThree from './component/setion-three';

function Home(){
    return(
        <div>
            <Header />
            <SecOne name="WELLCOME IN OUR RESTAURANT"/>
            <SecTow />
            <SecThree />
            <Footer />
        </div>
    )
}

export default Home;