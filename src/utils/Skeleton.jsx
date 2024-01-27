import React from 'react'

const Skeleton = () => {
  return (
    <div className="skeleton text-primary w-32 h-32">
      <div className="skeleton__container">
        <div className="skeleton__title"></div>
        <div className="skeleton__subtitle"></div>
        <div className="skeleton__text"></div>
      </div>
    </div>
  )
}

export default Skeleton
