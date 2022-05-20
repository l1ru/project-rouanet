import axios from 'axios'
import {useState, useEffect} from 'react'

import Project from '../components/Project'

export default function() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("api/projects");
                setProjects(res.data)
            } catch(err) {
                console.log(err)
            }
        })()
    }, [])
    return projects
}
