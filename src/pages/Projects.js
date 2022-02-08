import React, {useEffect} from "react"
import {Link} from "react-router-dom"

function Projects(props) {
    
    useEffect(() => props.getWorks(), [])

    const works = props.works

    const loaded = () => {

        return <div>
            {works.map((w) => (
                <div>
                    <Link to={`/projects/${w.id}`}>
                        <h1>{w.name}</h1>
                    </Link>
                </div>
            ))}
        </div>
    }

    return works? loaded() : props.loading()
}

export default Projects