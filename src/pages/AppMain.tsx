import React, { useState, useEffect } from 'react'
import Header from '@components/layout/Header'
import AutoBanner from '@components/common/AutoBanner'
import Modal from '@components/common/Modal'
import main from '@styles/pages/main.module.scss'
import sample1 from '@images/sample1.png'
import sample2 from '@images/sample2.png'
import sample3 from '@images/sample3.png'
import sample4 from '@images/sample4.png'

export default function AppMain() {
    const [visible, setVisible] = useState(false)

    const images = [
        { src: sample1, alt: '배너1' },
        { src: sample2, alt: '배너2' },
        { src: sample3, alt: '배너3' },
        { src: sample4, alt: '배너4' },
    ]
    const items = [
        {
            title: '웹 개발자',
            content: '홍보내용 미리보기',
        },
        {
            title: '모바일 앱 개발자',
            content: '홍보내용 미리보기',
        },
        {
            title: 'UI/UX 디자이너',
            content: '홍보내용 미리보기',
        },
        {
            title: '웹 개발자',
            content: '홍보내용 미리보기',
        },
        {
            title: '모바일 앱 개발자',
            content: '홍보내용 미리보기',
        },
        {
            title: 'UI/UX 디자이너',
            content: '홍보내용 미리보기',
        },
        {
            title: '웹 개발자',
            content: '홍보내용 미리보기',
        },
        {
            title: '모바일 앱 개발자',
            content: '홍보내용 미리보기',
        },
        {
            title: 'UI/UX 디자이너',
            content: '홍보내용 미리보기',
        },
        {
            title: '웹 개발자',
            content: '홍보내용 미리보기',
        },
        {
            title: '모바일 앱 개발자',
            content: '홍보내용 미리보기',
        },
        {
            title: 'UI/UX 디자이너',
            content: '홍보내용 미리보기',
        },
    ]

    /**
     * @function handleClick
     * @description 맨 위로 이동 버튼 클릭 시 이벤트
     */
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 200)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <Header />
            <main className={main.mainContent}>
                <section className={main.heroSection}>
                    <AutoBanner images={images} aspectRatio={3} intervalMs={4000} />
                </section>

                <section className={main.servicesSection}>
                    <h2>모임 홍보 게시글 리스트</h2>
                    <div className={main.serviceCards}>
                        {items.map((item) => (
                            <div className={main.serviceCard}>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className={main.mainFooter}>
                <p>&copy; 2024 YourCompany. All rights reserved.</p>
            </footer>
            <button className={`${main.scrollTopBtn} ${visible ? main.visible : ''}`} onClick={handleClick} aria-label="맨 위로 이동">
                ↑
            </button>
            <Modal />
        </>
    )
}
