import React from 'react'

const Projects = () => {
    const projects = [
        {
            name: "Online Game Store",
            description: "I have developed a simple online game store web application developed with HTML, CSS Javascript with a PHP running on backend a Apache Tomcat server with phpMyAdmin. Me and my team (of 5 colleagues) had analyzed UX cases and developed UI, color schemes, databases and roles. Deadlines and weekly reports with client supervisors were met timely."
        },
        {
            name: "Hotel Reservation System",
            description: "Developed hotel reservations system with reservation tracking, room reservation management, payment management with role based signing in. The tools used were Java Servelets along with MS SQL Server as the DBMS. We had used software requirement engineering concepts to map out the project and come up with use cases. UI/UX were developed along with ER database diagrams. Deadlines and monthly reports were met and project concluded within 5 months."
        },
        {
            name: "Tourism Management System",
            description: "With a group of 7 more colleagues, we had developed a tourism management system including reservation booking, third-party payment processing, customer-staff roles, transportation tracking and much more. We had developed proporsals, requirement analysis reports, agile reports and finalized documentation for clients. We used MERN stack technologies, for implemetation. Backend development used many object-oriented concepts, design patterns."
        },
    ]

    return (
        <>
            <h4 className='display-6'>My Projects</h4>
            <hr />
            <div className='row'>
                {projects.map(project => {
                    return (
                        <div className='col-md border rounded p-3 m-1'>
                            <h6 className='text-center display-6 fs-3'>{project.name}</h6>
                            <p>{project.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Projects