import React from 'react';
import dos from "../assests/clinicas/clinica2.jpeg"
import tres from "../assests/clinicas/clinica3.png"
import cuatro from "../assests/clinicas/clinica4.png"
import seis from "../assests/clinicas/clinica6.png"
import siete from "../assests/clinicas/clinica7.png"
import ocho from "../assests/clinicas/clinica8.png"
import Map from './Map';


const DondeRealizarse = () => {
    

    return (
        <div className='container'>
            <div className='mb-5'>
            <h3>¿Dónde puedes realizarte la Vasectomía en Chile?</h3>
            </div>
            <div className='d-flex flex-row justify-content-around mb-5'>
                    <div className='d-flex flex-column col-3 lugares rounded'>
                        <h4>Fonasa</h4>
                        <p>Si eres Fonasa tenemos la solución perfecta para ti… por tan solo $351.400.</p>
                        <a href='https://www.fonasa.cl/sites/fonasa/beneficiarios/bonos-pad' className='btn btn-outline-light'>Mas Info</a>
                </div>
                <div className='d-flex flex-column justify-content-around col-3 lugares rounded'>
                        <h4>Isapre</h4>
                        <p>Paga un precio reducido con cualquier ISAPRE</p>
                        <a href='https://www.cotizarisapreonline.cl/index.html?gclid=EAIaIQobChMI-Ym78pvM9wIVmhitBh2utQLGEAAYASAAEgIPkPD_BwE' className='btn btn-outline-light'>Más info</a>
                </div>
            </div>
            <div>
                <Map/>
            </div>
           
        </div>
    );
}

export default DondeRealizarse;
