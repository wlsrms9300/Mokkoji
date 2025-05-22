import { useEffect, useState } from 'react'
import header from '@styles/components/header.module.scss'
import { useModalStore } from '@stores/globalStore'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const { openModal } = useModalStore()

    /**
     * @function handleModal
     * @description 모달 창 열기
     */
    const handleModal = () => {
        openModal(true, () => {}, <div>테스트</div>)
    }

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <header className={`${header.mainHeader} ${scrolled ? header.shadow : ''}`}>
                <div className={header.headerContent}>
                    <div className={header.logo}>
                        <a href="/">Logo</a>
                    </div>
                    <div className={header.actionsWrapper}>
                        <nav className={header.navigation}>
                            <ul>
                                <li>
                                    <a href="#portfolio">Button1</a>
                                </li>
                                <li>
                                    <a href="#contact">Button2</a>
                                </li>
                            </ul>
                        </nav>
                        <button className={header.loginButton} onClick={handleModal}>
                            로그인
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
