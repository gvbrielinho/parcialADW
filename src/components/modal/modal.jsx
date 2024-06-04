import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './modal.module.css';

const ModalDynamic = ({ show, active }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        age: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        dni: ''
    });

    const [errors, setErrors] = useState({});
    const [title, setTitle] = useState('HOLA');

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
            alert(JSON.stringify(formData, null, 2));
        } else {
            alert(JSON.stringify(newErrors, null, 2));
        }
    };

    return (
        <React.Fragment>
            <Modal show={active} onHide={() => show(!active)} centered>
                <Modal.Header>
                </Modal.Header>
                <Modal.Body>
                    <form className={styles['modal-custom']} onSubmit={handleSubmit}>
                        <div className={styles.fields}>
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
                            {errors.fullName && <span>{errors.fullName}</span>}
                        </div>
                        <div className={styles.fields}>
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
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className={styles.fields}>
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
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <div className={styles.fields}>
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
                            {errors.age && <span>{errors.age}</span>}
                        </div>
                        <div className={styles.fields}>
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
                            {errors.phone && <span>{errors.phone}</span>}
                        </div>
                        <div className={styles.fields}>
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
                            {errors.address && <span>{errors.address}</span>}
                        </div>
                        <div className={styles.fields}>
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
                            {errors.city && <span>{errors.city}</span>}
                        </div>
                        <div className={styles.fields}>
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
                            {errors.postalCode && <span>{errors.postalCode}</span>}
                        </div>
                        <div className={styles.fields}>
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
                            {errors.dni && <span>{errors.dni}</span>}
                        </div>
                        <Button type="submit">Enviar</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => show(!active)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default ModalDynamic;
