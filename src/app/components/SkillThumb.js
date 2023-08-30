import React from 'react'


const SkillThumb = ({ data }) => {
    const divClassName = `col-2 my-auto text-center text-secondary`
    const imgCSS = {
        minWidth: 50,
        maxHeight: 100,
        backgroundColor: data?.whitebg === false ? "white" : "",
        padding: data?.whitebg === false ? 3 : 0
    }

    return (
        <div className={divClassName} style={{ padding: "1em" }}>
            <img src={data.icon} className='img-fluid rounded ' style={imgCSS} alt={data.name} />
            <p className="text-center my-1" style={{ fontWeight: 300, fontSize: 10 }}>{data.name}</p>
        </div>
    )
}

export default SkillThumb