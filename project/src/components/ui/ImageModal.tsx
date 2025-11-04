import { X } from 'lucide-react'
import { useEffect } from 'react'

interface Props {
  readonly isOpen: boolean
  readonly src: string
  readonly alt?: string
  readonly onClose: () => void
}

export default function ImageModal({ isOpen, src, alt = '', onClose }: Props) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleBackdropKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
        onClick={handleBackdropClick}
        onKeyDown={handleBackdropKey}
        aria-label="Đóng ảnh"
      />

      <div className="relative z-50 max-w-[95vw] max-h-[95vh] p-4 flex items-center justify-center">
        <button
          aria-label="Đóng ảnh"
          onClick={onClose}
          className="absolute top-4 right-4 z-60 p-2 rounded-md bg-black/40 text-white hover:bg-black/60 backdrop-blur"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
          draggable={false}
        />
      </div>
    </div>
  )
}
