import React from 'react'

const About = () => {

    const bio_subtopic = (text, starty = "") => {
        return (
            <div className='row py-2'>
                <span className='col-sm-2' style={{ textAlign: "end" }}>{starty}</span>
                <span className='col-sm' style={{ textAlign: "start" }}>{text}</span>
            </div>
        )
    }

    return (
        <>
            <h4 className='display-6'>About</h4>
            <hr />
            <div>
                <p className='fs-5'>
                    Software Engineering undergraduate at SLIIT, freelance 3D modelling artist who possess both creativity
                    and problem solution skills.
                </p>

                {bio_subtopic(
                    "SLIIT - 3.69 GPA Software Enginnering Undergraduate.",
                    "Present"
                )}
                {bio_subtopic(
                    "G.C.E. A/L (English Medium) scored 1C (Mathematics) and 2Ss' (Physics,Chemistry) in Science Stream.",
                    2020
                )}
                {bio_subtopic(
                    "G.C.E. O/L (English Medium) scored 9As'.",
                    2017
                )}
            </div>
        </>
    )
}

export default About