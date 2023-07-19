import './header.css'
import headerLogo from '../../assets/logo.png'
import headerMenu from '../../assets/icon_menu.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    
    const linksLeft = [
        {
            id: 1,
            link: "/",
            title: 'About',
        },
        {
            id: 2,
            link: "/gallery",
            title: 'Gallery',
        }
    ]
    const linksRight = [
        {
            id: 3,
            link: "/blog",
            title: 'Blog',
        },
        {
            id: 4,
            link: "/contact",
            title: 'Contact',
        },
    ]

    const linksLeftFormatted = linksLeft.map((l) => {
        return <Link key={l.id} to={l.link} className="header__link-item">{l.title}</Link>
    })
    const linksRightFormatted = linksRight.map((l) => {
        return <Link key={l.id} to={l.link} className="header__link-item">{l.title}</Link>
    })
    
    return (
        <header>
            <div className="container">
                <div className="header header_space-between">
                    <div className='header__fraction'>
                        {linksLeftFormatted}
                    </div>
                    
                    <Link to="/login">
                        <img src={headerLogo} alt="logo"/>
                    </Link>

                    <div className="header__fraction">
                        {linksRightFormatted}
                        <a href="#">
                            <div>
                                <img src={headerMenu} alt="menu"/>
                            </div>
                        </a>
                    </div>
                </div>                
            </div>
        </header>
    )
}