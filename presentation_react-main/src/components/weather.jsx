import React, { Fragment } from 'react';
import { AjoutVille } from './formulaireMeteo'
import { Prevision } from './previsionMeteo'

const Weather = () =>{
    return(
        <Fragment>
            <div>
            <h1>Mon App Météo</h1>
            </div>
            <hr/>
            <div>                
                <AjoutVille/>
                <hr/>
                <Prevision/>                
            </div>
        </Fragment>        
    );
}

export default Weather;