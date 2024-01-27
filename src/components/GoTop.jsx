import React from 'react'

const GoTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="go-top">
            <button name={'Go to Top'} className="btn btn-secondary rounded-full" onClick={scrollToTop}>
                <i className="fa fa-angle-up text-neutral"></i>
            </button>
        </div>
    )

}

export default GoTop
