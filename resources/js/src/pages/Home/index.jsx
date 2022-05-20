import React, {useState} from 'react'
import * as Styles from './styles.js'

import GlobalStyles from '../../styles/Global'

import useProjects from '../../hooks/useProjects.js'
import Project from "../../components/Project";

const Home = () => {
    let projects = useProjects()
    let [actual, setActual] = useState(0)

    return (
        <Styles.Container>
            <GlobalStyles />
            <Styles.Content className={`projects`} >
                <Styles.Projects className={`projects`} >
                    {projects.map((data, index) => {
                        if(actual + 3 > index  && actual <= index) {
                            return (
                                <Project
                                    key={index}
                                    aproved={data["valor_aprovado"]}
                                    captado={data["valor_captado"]}
                                    uf={data["uf"]}
                                    city={data["municipio"]}
                                    description={data["resumo"]}
                                    name={data["nome"]}
                                />
                            )
                        }
                    })}
                </Styles.Projects>
                {actual >= 3 ? <Styles.Icon className="fa-solid fa-angle-left left" onClick={(e) => setActual(actual - 3)} ></Styles.Icon> : ""}
                <Styles.Icon className="fa-solid fa-angle-right" onClick={(e) => setActual(actual + 3 > projects.length ? 0 : actual + 3)}></Styles.Icon>
            </Styles.Content>
            <Styles.BottomContent>
                <Styles.ProjectsPages>
                    {projects.map((data, index) => {
                        if(index < projects.length /3) {
                            return (
                                <div 
                                key={index} 
                                className={index === actual / 3 ? "selected" : ""} 
                                onClick={(e) => setActual(index * 3)}
                                ></div>
                            )
                        }
                    })}
                </Styles.ProjectsPages>
            </Styles.BottomContent>
        </Styles.Container>
    )
}

export default Home
