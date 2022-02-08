import React from "react"
import {Link} from "react-router-dom"

function RenderHooks() {

    const loading = () => {
        return <h2 className="render">Loading...</h2>
    }

    return {
        loading
    }

}

export default RenderHooks