import React from 'react';
import { Link } from 'react-router-dom';

const Est = () => {
    return (
        <div className='container'>
            <h3>Enfermedades de Transmisión sexual</h3>
            <div className='d-flex flex-row justify-content-center'>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8eDBlaS67Jk?playlist=8eDBlaS67Jk&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='m-4'>
                    <p>Las enfermedades de transmisión sexual -ETS- (que anteriormente se conocían como enfermedades venéreas), son infecciones que se contagian de una persona a otra usualmente durante el sexo vaginal, anal u oral. Son muy comunes y muchas personas con ETS no tienen síntomas. Por eso, es importante hacerte exámenes sin importar si tienes síntomas de las ETS o no. Sin tratamiento, las enfermedades de transmisión sexual pueden causar serios problemas de salud. La buena noticia es que hacerte los  exámenes no es complicado y la mayoría de estas infecciones son fáciles de tratar.</p>
                </div>
            </div>
            <div className='d-flex flex-row m-4 justify-content-around'>
                <div className='box'>
                <a href="https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets/que-es-la-clamidia">Clamidia</a>
                <p>¿Qué es la clamidia? Es una enfermedad de transmisión sexual muy común causada por una infección bacteriana. A menudo no tiene síntomas, pero una vez diagnosticada es fácil de tratar.</p>
                </div>
                <div className='box'>
                <a href="https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets/verrugas-genitales">Verrugas Genitales</a>
                <p>Son bultos que salen en la piel del área genital y alrededor del ano. Son causadas por ciertos tipos de virus del papiloma humano (VPH).</p>
                </div>  
                <div className='box'>            
                <a href='https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets/gonorrea'>Gonorrea</a>
                <p>¿Qué es la gonorrea? Es una enfermedad de transmisión sexual común causada por una infección bacteriana. A menudo no tiene síntomas, pero es fácil de tratar una vez diagnosticada.</p>
                </div>
            </div>
            <div className='d-flex flex-row m-4 justify-content-around'>
                <div className='box'>
                <a href="https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets/que-es-la-hepatitis-b">Hepatitis B</a>
                <p>¿Qué es la hepatitis B? Es una enfermedad de transmisión sexual causada por un virus que puede producir enfermedad hepática (en el hígado) y que se transmite durante el sexo o por compartir objetos de higiene personal como máquinas de afeitar o cepillos de dientes.</p>
                </div>
                <div className='box'>
                <a href="https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets/vph">Herpes genital y oral</a>
                <p>¿Qué es el herpes? Es una enfermedad de transmisión sexual común que infecta  los genitales y la boca. Causa llagas o ampollas. No existe una cura, pero se pueden tratar los síntomas.</p>
                </div>  
                <div className='box'>            
                <a href='https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets/vih-sida'>VIH Y SIDA</a>
                <p>El VIH es el virus que causa el sida. Es una infección que destruye el sistema inmunológico y que puede causar el SIDA. No existe cura, pero hay tratamientos que pueden ayudarte a mantenerte saludable.</p>
                </div>
            </div>
            <div className='d-flex flex-row m-4 justify-content-around'>
                <div className='box'>
                <a href="https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets/vph">Papiloma Humano</a>
                <p>El papiloma humano o virus del papiloma humano (VPH), es una enfermedad de transmisión sexual muy común, generalmente inofensiva y que desaparece por sí sola. Algunos tipos pueden llevar al cáncer.</p>
                </div>
                <div className='box'>
                <a href="https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets/molluscum-contagiosum">Molluscum contagiosum</a>
                <p>Es una enfermedad de transmisión sexual que produce pequeños bultos en la piel. Desaparece por sí sola y, generalmente, no es peligrosa.</p>
                </div>  
                <div className='box'>            
                <a href='https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets/sifilis'>Sífilis</a>
                <p>La sífilis es una infección bacteriana común. Se cura fácilmente con medicamentos, pero puede ser peligrosa si no se trata.</p>
                </div>
                
            </div>
            <a href='https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets'>Más información</a>


            
  
        </div>
    );
}

export default Est;
