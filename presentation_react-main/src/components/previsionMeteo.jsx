import React, { Fragment, useState } from 'react'
import { AjoutVille } from './formulaireMeteo'


export const Prevision = (props) => {

    const [temperature, setTemperature] = useState({ temperature: "" })
    const handleChangeTemeperature = (event) => {
        setTemperature({ ...temperature, temperature: event.target.value })
    }

    const [min, setMin] = useState({ min: "" })
    const handleChangeMin = (event) => {
        setMin({ ...min, min: event.target.value })
    }

    const [max, setMax] = useState({ max: "" })
    const handleChangeMax = (event) => {
        setMax({ ...max, max: event.target.value })
    }

    const [humiditer, setHumiditer] = useState({ humiditer: "" })
    const handleChangeHumiditer = (event) => {
        setHumiditer({ ...humiditer, humiditer: event.target.value })
    }

    
    return (
        <Fragment>
            <form onSubmit={(event) => { event.preventDefault(); props() }}>
                <div>
                    <label >Température :
                        <input name="temperature" onChange={(event) => handleChangeTemeperature(event)} defaultValue={""} />
                    </label>
                </div>
                <div>
                    <label >Min :
                    <input name="min" onChange={(event) => handleChangeMin(event)} defaultValue={""} />
                    </label>
                </div>
                <div>
                    <label >Max :
                    <input name="max" onChange={(event) => handleChangeMax(event)} defaultValue={""} />
                    </label>
                </div>
                <div>
                <label >Humidité :
                        <input name="humiditer" onChange={(event) => handleChangeHumiditer(event)} defaultValue={""} />
                    </label>
                </div>
                
            </form>
        </Fragment>
    )
}