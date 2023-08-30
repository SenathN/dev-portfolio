import React from 'react'

const footer = () => {

    return (
        <footer className="container-fluid text-center border-top py-3 mt-3">
            <div className='row'>
                <div className='col-sm'>
                    <a>About</a><br />
                    <a>Skills</a><br />
                </div>
                <div className='col-sm footer-text-parent'>
                    <h6>Attributions</h6>
                    <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a><br />
                    <a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons">Css 3 icons created by Freepik - Flaticon</a><br />
                </div>
            </div>
        </footer>
    )
}

export default footer