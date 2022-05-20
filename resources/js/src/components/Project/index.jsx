import React, { useState, memo } from 'react'

import * as Styles from './styles.js'

const Project = ({name, uf, city, description, aproved, captado}) => {
    let NumberFormat = new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format
    const [favorite, setFavorite] = useState(false)

    const addFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <Styles.Container>
            <Styles.Content>
                <div>
                    <Styles.ProjectCategory>ROUANET</Styles.ProjectCategory>

                    <Styles.ProjectName>{name}</Styles.ProjectName>

                    <Styles.ProjectLocation>{city} - {uf}</Styles.ProjectLocation>

                    <Styles.ProjectDescription>
                    {description}
                    </Styles.ProjectDescription>

                </div>

                <div>
                    <Styles.ProjectValues>
                        <div>
                            <p>Aprovado</p> <span>{ NumberFormat(aproved) }</span>
                        </div>
                        <div>
                            <p>Captado</p> <span>{ NumberFormat(captado) }</span>
                        </div>
                    </Styles.ProjectValues>
                    <Styles.PorjectActions>
                        <button>ADICIONAR</button>
                        <i className={`fa-solid fa-heart ${favorite ? "actived": ""}`} onClick={() => addFavorite()} ></i>
                    </Styles.PorjectActions>
                </div>
            </Styles.Content>
        </Styles.Container>
    )
}

export default memo(Project)
