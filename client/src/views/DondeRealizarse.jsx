import React from 'react';

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
        <div className='container'>
            <div className='col'></div>
            <div className='col'></div>
            <div className='w-100'></div>
            <div className='col'></div>
            <div className='col'></div>            
        </div>

        </div>
    );
}

export default DondeRealizarse;
