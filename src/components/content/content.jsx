// ContentComponent.jsx
import React from 'react';
import styles from './content.module.css';
import headerImg from '../../assets/logo.jpg';
import Pikachu from '../../assets/Pikachu-PNG-HD-Image.png';
import Landscape from '../../assets/landscape.jpg';
import { GiRamProfile } from "react-icons/gi";

const ContentComponent = ({ isSidebarOpen }) => {

    return (
        <div className={`${styles.content} ${isSidebarOpen ? styles['sidebar-open'] : ''}`}>
            <div className='container'>
                <div className='row'>
                    <div className={`${styles['header-container']}`}>
                        <h1 className={styles.color}>Titulo de Periodico</h1>
                        <div className={styles['img-container']}>
                            <img src={headerImg} alt='logo-alt' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className={`d-flex ${styles['date-row']}`}>
                            <div className={`col-6 ${styles['date-title']}`}>Date:</div>
                            <div className={`col-6 ${styles['date-title']}`}>Price:</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className={`${styles['head-container']}`}>
                            <h1>Encabezado</h1>
                        </div>
                    </div>
                    <div className={`row ${styles['main-container']}`}>
                        <div className='col'>
                            <div className={`col-12 ${styles['title-container']}`}>
                                <div className={`m-2 ${styles['color-white']}`}>Titulo</div>
                            </div>
                            <div className={`col-12 ${styles['article-container']}`}>
                                <div className='row'>
                                    <div className={`col ${styles['article']}`}>
                                        <div className='row'>
                                            <div className='col-12 col-md-6'>
                                                <div className={styles['news-block']}>
                                                    <p>Una de esas novedades que recibió en las últimas horas el fiscal <b>Gastón Larramendi</b>,
                                                        a cargo de la UFI Descentralizada de Vicente López Oeste, es una buena noticia entre tanto drama: dieron de alta al nene de 12 años que viajaba en el <i>Toyota Corolla</i> que fue aplastado por el container del camión que se desprendió por la violencia del siniestro.</p>
                                                </div>
                                            </div>
                                            <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
                                                <div className={styles['pika-container']}>
                                                    <img className={styles['pika']} src={Pikachu} alt='pikachu-img' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='col-12 col-md-6'>
                            <p className={`mb-1 ${styles['p-text']}`}>Una de esas novedades que recibió en las últimas horas el fiscal <b>Gastón Larramendi</b>,
                                a cargo de la UFI Descentralizada de Vicente López Oeste, es una buena noticia entre tanto drama: dieron de alta al nene de 12 años que viajaba en el <i>Toyota Corolla</i> que fue aplastado por el container del camión que se desprendió por la violencia del siniestro.</p>
                            <p className={`mb-1 ${styles['p-text']}`}>Una de esas novedades que recibió en las últimas horas el fiscal <b>Gastón Larramendi</b>,
                                a cargo de la UFI Descentralizada de Vicente López Oeste, es una buena noticia entre tanto drama: dieron de alta al nene de 12 años que viajaba en el <i>Toyota Corolla</i> que fue aplastado por el container del camión que se desprendió por la violencia del siniestro.</p>
                            <p className={`mb-1 ${styles['p-text']}`}>Una de esas novedades que recibió en las últimas horas el fiscal <b>Gastón Larramendi</b>,
                                a cargo de la UFI Descentralizada de Vicente López Oeste, es una buena noticia entre tanto drama: dieron de alta al nene de 12 años que viajaba en el <i>Toyota Corolla</i> que fue aplastado por el container del camión que se desprendió por la violencia del siniestro.</p>
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-md-10 col-xs-12'>
                            <div className='row'>
                                <p className={styles['bottom-article']}>
                                    La forma en la que estaba asegurado el container que termina matando a madre e hija era uno de los temas a determinar para conocer las responsabilidades del camionero en la tragedia. “El contenedor estaba vacío, quizá distinto hubiera sido todo si estaba con carga, ya que el peso podría haber impedido que se desplace o no y todo hubiera sido peor...”, detallaron las fuentes del caso consultadas por este medio.
                                </p>
                            </div>
                            <div className='row'>
                                <img className={styles['bottom-img']} src={Landscape} alt='landscape-im-here' />
                            </div>
                        </div>
                        <div className={`col-xs-12 col-md-2 d-flex ${styles['ram-container']}`}>
                            <div className={`${styles['final-block']}`}>
                                <div className={`${styles['icon-section']}`}>
                                    <div><GiRamProfile className={`d-flex ${styles['color-white']} ${styles['ram-icon']}`} /></div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ContentComponent;