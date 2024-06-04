import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './modal.module.css';

const ModalDynamic = ({ show, active }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
        age: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        dni: ''
    });

    const [errors, setErrors] = useState({});
    const [title, setTitle] = useState('HOLA');
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        if (!active) {
            setFormData({
                fullName: '',
                email: '',
                password: '',
                repeatPassword: '',
                age: '',
                phone: '',
                address: '',
                city: '',
                postalCode: '',
                dni: ''
            })
            setErrors({});
        }
    }, [active])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === 'fullName') {
            setTitle(`HOLA ${value}`);
        }
    };

    const validateField = (name, value) => {
        let error = '';

        switch (name) {
            case 'fullName':
                if (value.length <= 6 || !/\s/.test(value)) {
                    error = 'Nombre completo debe tener más de 6 letras y al menos un espacio.';
                }
                break;
            case 'email':
                if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
                    error = 'Email no tiene un formato válido.';
                }
                break;
            case 'password':
                if (value.length < 8 || !/[a-zA-Z]/.test(value) || !/\d/.test(value)) {
                    error = 'Contraseña debe tener al menos 8 caracteres, con letras y números.';
                }
                break;
            case 'repeatPassword':
                if (value !== formData.password) {
                    error = 'Las contraseñas no coinciden.';
                }
                break;
            case 'age':
                if (!Number.isInteger(Number(value)) || Number(value) < 18) {
                    error = 'Edad debe ser un número entero mayor o igual a 18.';
                }
                break;
            case 'phone':
                if (!/^\d{7,}$/.test(value)) {
                    error = 'Teléfono debe ser un número de al menos 7 dígitos, sin espacios ni símbolos.';
                }
                break;
            case 'address':
                if (value.length < 5 || !/\s/.test(value)) {
                    error = 'Dirección debe tener al menos 5 caracteres, con letras, números y un espacio.';
                }
                break;
            case 'city':
                if (value.length < 3) {
                    error = 'Ciudad debe tener al menos 3 caracteres.';
                }
                break;
            case 'postalCode':
                if (value.length < 3) {
                    error = 'Código Postal debe tener al menos 3 caracteres.';
                }
                break;
            case 'dni':
                if (!/^\d{7,8}$/.test(value)) {
                    error = 'DNI debe ser un número de 7 u 8 dígitos.';
                }
                break;
            default:
                break;
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error
        }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleFocus = (e) => {
        const { name } = e.target;
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            validateField(key, formData[key]);
            if (errors[key]) {
                newErrors[key] = errors[key];
            }
        });

        if (Object.keys(newErrors).length === 0) {
            setShowSuccessModal(true);
        } else {
            setShowErrorModal(true);
        }
    };

    return (
        <React.Fragment>
            <Modal show={active} onHide={() => {
                show(!active);
            }} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className={`${styles['modal-custom']}`} onSubmit={handleSubmit}>
                        <div className='col-12 col-lg-6'>
                            <div className={`container-fluid ${styles.fields}`}>
                                <label className={styles['label-custom']}>Nombre Completo:</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    className='form-control'
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                                {errors.fullName && <span className={styles['error-text']}>{errors.fullName}</span>}
                            </div>
                            <div className={`container-fluid ${styles.fields}`}>
                                <label className={styles['label-custom']}>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className='form-control'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                                {errors.email && <span className={styles['error-text']}>{errors.email}</span>}
                            </div>
                            <div className={`container-fluid ${styles.fields}`}>
                                <label className={styles['label-custom']}>Contraseña:</label>
                                <input
                                    type="password"
                                    name="password"
                                    className='form-control'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                                {errors.password && <span className={styles['error-text']}>{errors.password}</span>}
                            </div>
                            <div className={`container-fluid ${styles.fields}`}>
                                <label className={styles['label-custom']}>Repetir Contraseña:</label>
                                <input
                                    type="password"
                                    name="repeatPassword"
                                    className='form-control'
                                    value={formData.repeatPassword}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                                {errors.repeatPassword && <span className={styles['error-text']}>{errors.repeatPassword}</span>}
                            </div>
                            <div className={`container-fluid ${styles.fields}`}>
                                <label className={styles['label-custom']}>Edad:</label>
                                <input
                                    type="number"
                                    name="age"
                                    className='form-control'
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                                {errors.age && <span className={styles['error-text']}>{errors.age}</span>}
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className={`container-fluid ${styles.fields}`}>
                                <label className={styles['label-custom']}>Teléfono:</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className='form-control'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                                {errors.phone && <span className={styles['error-text']}>{errors.phone}</span>}
                            </div>
                            <div className={`container-fluid ${styles.fields}`}>
                                <label className={styles['label-custom']}>Dirección:</label>
                                <input
                                    type="text"
                                    name="address"
                                    className='form-control'
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                                {errors.address && <span className={styles['error-text']}>{errors.address}</span>}
                            </div>
                            <div className={`container-fluid ${styles.fields}`}>
                                <label className={styles['label-custom']}>Ciudad:</label>
                                <input
                                    type="text"
                                    name="city"
                                    className='form-control'
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                                {errors.city && <span className={styles['error-text']}>{errors.city}</span>}
                            </div>
                            <div className={`container-fluid ${styles.fields}`}>
                                <label className={styles['label-custom']}>Código Postal:</label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    className='form-control'
                                    value={formData.postalCode}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                                {errors.postalCode && <span className={styles['error-text']}>{errors.postalCode}</span>}
                            </div>
                            <div className={`container-fluid ${styles.fields}`}>
                                <label className={styles['label-custom']}>DNI:</label>
                                <input
                                    type="text"
                                    name="dni"
                                    className='form-control'
                                    value={formData.dni}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                />
                                {errors.dni && <span className={styles['error-text']}>{errors.dni}</span>}
                            </div>
                        </div>
                        <div className={styles.submitContainer}>
                            <Button type="submit" variant="primary">Enviar</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Errores de Validación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {Object.entries(errors).map(([field, error]) => (
                            error && <li key={field}>{error}</li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Formulario Completado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    El formulario fue completado y enviado exitosamente.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default ModalDynamic;
