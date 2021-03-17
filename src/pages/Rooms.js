import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'

function Rooms() {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="Our rooms">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Rooms
