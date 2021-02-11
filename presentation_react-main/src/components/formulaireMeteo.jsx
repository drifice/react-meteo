import React, { Fragment, useState } from 'react'

export const AjoutVille = (props) => {
    const [ville, setVille] = useState({ ville: "" })

    const handleChangeVille = (event) => {
        setVille({ ...ville, ville: event.target.value })
    }

    
    return (
        <Fragment>
            <form onSubmit={(event) => { event.preventDefault(); props.AjoutVille(ville) }}>
                <div>
                    <label >Rechercher une ville :
                        <input name="nom" onChange={(event) => handleChangeVille(event)} defaultValue={""} />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </Fragment>
    )
}