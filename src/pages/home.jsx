import React from 'react'
import Books from '../components/books'
import Contact from '../components/contact'

function Home() {
    const data = [
        { title: '  لابتوب     ', url: '1712187593.webp', link: 'labtops' },
        { title: '  كمبيوتر     ', url: '1711317930.gif', link: 'pc' },
        { title: ' هواتف ', url: '1712187593.webp', link: 'Mobile' },
        { title: ' شنط ', url: '1711317930.gif', link: 'bags' },
    ]

    return (
        <div>
            <Books data={data} />
            <Contact></Contact>
        </div>
    )
}

export default Home