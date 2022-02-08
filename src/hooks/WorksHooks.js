import {useState} from "react"
import url from "./url"

function WorksHooks() {

    const [works, setWorks] = useState()

    const getWorks = async () => {
        console.log(url)
        const response = await fetch(url)
        const data = await response.json()
        setWorks(data)
    }

    return {
        works,
        getWorks
    }

}

export default WorksHooks