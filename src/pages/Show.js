import React, {useEffect} from "react"
import {Link, useHistory} from "react-router-dom"

function Show(props) {
    
    useEffect(() => props.getWorks(), [])

    const history = useHistory()
    const id = props.match.params.id
    const works = props.works
    const work = works?.find(w => {
        return w.id == id
    })

    const loaded = () => {
        return <div>
            <img src={work.image} alt="url goes here"/>
            <a href={work.link}><h1>{work.name}</h1></a>
            <h3>{work.tagline}</h3>
            <p>{work.description}</p>
            <h5>{work.techs}</h5>
        </div>
    }

    return works? loaded() : props.loading()
}

export default Show