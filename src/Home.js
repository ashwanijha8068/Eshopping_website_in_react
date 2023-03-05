import React from "react";
import "./Home.css";
import Product from "./Product";
import nt from './nt.jpg'
 

function Home() {
    
    return (
        <div className="home">
            <div className="home__container">

                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="My Inventions, Autobiography of Nikola Tesla"
                        price={97}
                        rating={5}
                        image={nt}
                    />
                    <Product
                        id="49538094"
                        title="Hak5 WiFi Pineapple Mark VII "
                        price={2390}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51vfBvelOwL._SL1000_.jpg"

                    />
                     <Product
                        id="49538094"
                        title="Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD"
                        price={233453}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"

                    />
                    
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Bhujialalji Punjabi Tadka (pack of 5) 750g | Chai time snacks"
                        price={199}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/51h9LE6oOaL.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={124}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="MSI GF63 Thin, Intel 11th Gen. i7-11800H, 40CM FHD 144Hz Gaming Laptop "
                        price={59899}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71BCum1YVzL._SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Colgate Plax Mouthwash - 250 ml (Pepper Mint, Buy 2 Get 1 Free)"
                        price={119}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51rNRT66cuL._SY300_SX300_QL70_FMwebp_.jpg"
                    />
                     <Product
                        id="90829332"
                        title="JBL Wave Beam in-Ear Earbuds (TWS) with Mic, App for Customized Extra Bass "
                        price={399}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61p1-gm4RwL._SL1500_.jpg"
                    />
                     <Product
                        id="90829332"
                        title="Himalayan Natives 100% Natural Premium California Almonds | Premium Badam "
                        price={456}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61sTXuH2hRL._SL1500_.jpg"
                    />
                </div>
            </div>   
        </div> 
    )
}

export default Home
