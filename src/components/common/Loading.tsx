import loading from '@styles/components/loading.module.scss'

export default function Loading() {
    return (
        <div className={loading.loading}>
            <p>로딩중...</p>
        </div>
    )
}
