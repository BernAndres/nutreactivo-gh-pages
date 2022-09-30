import '../App.css';
import NutriAlvaro from '../imgs/img_nutricionista_alvaro_1.png'
import NutriDiego from '../imgs/img_nutricionista_diego_1.png'
import Naranja from '../imgs/img_naranja.png'
import Pera from '../imgs/img_pera.png'

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CuerpoInicio(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        // ASESORÍAS
        <div className="container-fluid my-5">
            <div className='row pb-3 pb-lg-0'> 
                <div className='col-1'></div>
                <div className='col-10 d-flex justify-content-start'><h2 data-aos="fade-up" className='text-tertiary fw-bold display-4'>Nutricionistas</h2></div>
                <div className='col-1'></div>
            </div>

        {/* Sección 3 - Álvaro */}
            <div className="row pb-5">
                <div className='col-1'></div>
                <div className='d-flex flex-column col-10 flex-lg-row'>
                    <div className="d-flex flex-column pe-lg-5 col-12 col-lg-6 align-items-start justify-content-center" data-aos="fade-up">
                        <h2 className='text-tertiary fw-bold d-flex align-items-center h2'>
                            Nutricionista Álvaro Cañete
                            <img  src={Pera} style={{height: '30px'}}></img>
                        </h2>
                        <p style={{textAlign: 'justify'}} className="psty">
                        Nutricionista titulado con distinción de la Universidad de Valparaíso. Diplomado en Nutrición
                        Deportiva y Fitness Universidad de los Andes, certificado en Nutrición, Ejercicio y Rendimiento Deportivo, 
                        certificado en Alimentación y Nutrición Vegetariana Instituto Universitario Vive Sano.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end" data-aos="fade-up">
                        <img src={NutriAlvaro} className="d-block rounded imgsty" alt="..."/>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

        {/* Sección 4 - Diego */}
            <div className="row pb-5">
                <div className='col-1'></div>
                <div className='d-flex flex-column-reverse col-10 flex-lg-row'>
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start" data-aos="fade-up">
                        <img src={NutriDiego} className="d-block rounded imgsty" alt="..."/>
                    </div>
                    <div className="d-flex flex-column col-12 col-lg-6 align-items-start justify-content-center" data-aos="fade-up">
                        <h2 className='text-tertiary fw-bold d-flex align-items-center h2'>
                            Nutricionista Diego Hernandez
                            <img  src={Naranja} style={{height: '30px'}}></img>
                        </h2>
                        <p style={{textAlign: 'justify'}} className="psty">
                        Nutricionista titulado con distinción de la Universidad de Valparaíso, antropometrista
                        ISAK nivel I, estudiante de Pedagogía en Educación Física.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            <div style={{height: '50px'}}/>

        </div>
    )
} 

export default CuerpoInicio;