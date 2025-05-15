import React, { useEffect, useRef, useState } from 'react'
import styles from '@styles/components/banner.module.scss'

type BannerImage = { src: string; alt?: string }

interface AutoBannerProps {
    images: BannerImage[]
    aspectRatio?: number // 예: 2 (2:1), 16/9 등
    intervalMs?: number
    className?: string
}

export default function AutoBanner({ images, aspectRatio = 2, intervalMs = 3000, className = '' }: AutoBannerProps) {
    const [current, setCurrent] = useState(0)
    const timer = useRef<any>(null)
    const imageCount = images.length

    // 인디케이터/화살표 클릭 시
    const goTo = (idx: number) => setCurrent(idx)
    const prev = () => setCurrent((prev) => (prev - 1 + imageCount) % imageCount)
    const next = () => setCurrent((prev) => (prev + 1) % imageCount)

    // 자동 슬라이드
    useEffect(() => {
        timer.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % imageCount)
        }, intervalMs)
        return () => {
            if (timer.current) clearInterval(timer.current)
        }
    }, [imageCount, intervalMs])

    return (
        <div className={`${styles.bannerWrapper} ${className}`} style={{ aspectRatio: `${aspectRatio}/1` }}>
            <div
                className={styles.sliderTrack}
                style={{
                    width: `${imageCount * 100}%`,
                    transform: `translateX(-${current * (100 / imageCount)}%)`,
                }}>
                {images.map((img, idx) => (
                    <div className={styles.slide} key={img.src} style={{ width: `${100 / imageCount}%` }}>
                        <img src={img.src} alt={img.alt ?? `배너 이미지 ${idx + 1}`} draggable={false} />
                    </div>
                ))}
            </div>
            {/* 좌우 화살표 */}
            <button className={styles.arrow + ' ' + styles.left} onClick={prev} aria-label="이전 배너">
                &#8592;
            </button>
            <button className={styles.arrow + ' ' + styles.right} onClick={next} aria-label="다음 배너">
                &#8594;
            </button>
            {/* 인디케이터 */}
            <div className={styles.indicatorWrapper}>
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.indicator} ${current === idx ? styles.active : ''}`}
                        onClick={() => goTo(idx)}
                        aria-label={`배너 ${idx + 1}로 이동`}
                    />
                ))}
            </div>
        </div>
    )
}
