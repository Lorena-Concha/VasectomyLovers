import React from 'react';
import dos from "../assests/clinicas/clinica2.jpeg"
import tres from "../assests/clinicas/clinica3.png"
import cuatro from "../assests/clinicas/clinica4.png"
import seis from "../assests/clinicas/clinica6.png"
import siete from "../assests/clinicas/clinica7.png"
import ocho from "../assests/clinicas/clinica8.png"

const DondeRealizarse = () => {
    return (
        <div>
            <h1>¿Dónde puedes realizarte la Vasectomía en Chile?</h1>

            <div className='d-flex flex-row justify-content-around'>
                <div className='d-flex flex-column w-50'>
                <h4>Fonasa</h4>
                <p>Si eres Fonasa tenemos la solución perfecta para ti… por tan solo $351.400.</p>
                <a href='https://www.fonasa.cl/sites/fonasa/beneficiarios/bonos-pad'>Mas Info</a>
                </div>
                <div className='d-flex flex-column justify-content-around w-50'>
                <h4>Isapre</h4>
                <p>Paga un precio reducido con cualquier ISAPRE</p>
                <a href='https://www.cotizarisapreonline.cl/index.html?gclid=EAIaIQobChMI-Ym78pvM9wIVmhitBh2utQLGEAAYASAAEgIPkPD_BwE'>Para más info, pregunta direto en tu Isapre</a>
                </div>
            </div>
        <div className='d-flex flex-column'>
            <div className='d-flex flex-row justify-content-around'>
                <a href='https://www.istclinicalocurro.cl/' ><img width="200" height="100" src={dos}></img></a>
                <a href='#' ><img width="200" height="100" src={tres}></img></a>
                <a href='#' ><img width="200" height="100" src={cuatro}></img></a>
            </div>
            <div className='d-flex flex-row justify-content-around'>
                <a href='#' ><img width="200" height="100" src={seis}></img></a>
                <a href='#' ><img width="200" height="100" src={siete}></img></a>
                <a href='#' ><img width="200" height="100" src={ocho}></img></a>
            </div>
            
             
        </div>

        </div>
    );
}

export default DondeRealizarse;
