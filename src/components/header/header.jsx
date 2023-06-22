import './header.css'
import headerLogo from '../../assets/logo.png'
import headerMenu from '../../assets/icon_menu.svg'

export default function Header() {
    return (
        <header>
            <div class="container">

                <div className="header header_space-between">

                    <div className='header__fraction'>
                        <a href="#" class="header__link-item _margin-right-80">About</a>
                        <a href="#" class="header__link-item">Gallery</a>
                    </div>
                    
                    <a href="#">
                        <img src={headerLogo} alt="logo"/>
                    </a>

                    <div class="header__fraction">
                        <a href="#" class="header__link-item _margin-right-80">Blog</a>
                        <a href="#" class="header__link-item _margin-right-60">Contact</a>
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