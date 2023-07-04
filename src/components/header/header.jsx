import './header.css'
import headerLogo from '../../assets/logo.png'
import headerMenu from '../../assets/icon_menu.svg'

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
        return <a key={l.id} href={l.link} className="header__link-item">{l.title}</a>
    })
    const linksRightFormatted = linksRight.map((l) => {
        return <a key={l.id} href={l.link} className="header__link-item">{l.title}</a>
    })
    
    return (
        <header>
            <div className="container">

                <div className="header header_space-between">

                    <div className='header__fraction'>
                        {linksLeftFormatted}
                    </div>
                    
                    <a href="#">
                        <img src={headerLogo} alt="logo"/>
                    </a>

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