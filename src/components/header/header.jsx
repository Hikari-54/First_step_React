import './header.css'
import headerLogo from '../../assets/logo.png'
import headerMenu from '../../assets/icon_menu.svg'

export default function Header() {
    return (
        <header>
            <div class="container header-flex">

                <div>
                    <a href="#" class="margin-right-80">About</a>
                    <a href="#">Gallery</a>
                </div>
                
                <a href="">
                    <img src={headerLogo} alt="logo"/>
                </a>

                <div class="header-flex-right">
                    <a href="#" class="margin-right-80">Blog</a>
                    <a href="#" class="margin-right-60">Contact</a>
                    <a href="#">
                        <div class="menu">
                            <img src={headerMenu} alt="menu"/>
                        </div>
                    </a>
                </div>

            </div>
        </header>
    )
}