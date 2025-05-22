import { useEffect } from 'react'
import ReactModal, { Styles } from 'react-modal'
import { useModalStore } from '@stores/globalStore'

const customStyles: Styles = {
    overlay: {
        position: 'fixed',
        zIndex: 9999,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(71, 71, 71, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        background: 'white',
        maxWidth: 'calc(100vw - 2rem)',
        maxHeight: 'calc(100vh - 2rem)',
        overflowY: 'auto' as const,
        position: 'relative',
        border: '1px solid #ccc',
        borderRadius: '0.3rem',
        boxShadow: '0px 10px 15px rgba(61,61,61,1)',
        inset: 0,
    },
}

export default function Modal() {
    const { isOpen, onClose, children, reset } = useModalStore()

    // modal 창 팝업 시 뒤에 배경 scroll 막기
    useEffect(() => {
        isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
    }, [isOpen])

    return (
        <ReactModal isOpen={isOpen} style={customStyles} ariaHideApp={false} shouldCloseOnOverlayClick={false}>
            <div>
                <button onClick={reset}>닫기</button>
                {children}
            </div>
        </ReactModal>
    )
}
