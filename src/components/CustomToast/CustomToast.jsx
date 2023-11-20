//React imports
import React, { useEffect, useRef } from 'react';

//Style imports
import { CustomToastStyled } from './CustomToast.style';

//Lib imports
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

const CustomToast = ({ message, type, onClose, index }) => {

    const toastRef = useRef(null);
    const toastClassName = `CustomToast ${type}`

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onClose]);

    useEffect(() => {
        const currentToast = toastRef.current;
        if (currentToast) {
            const topOffset = index * (currentToast.topOffset - 100);
            currentToast.style.top = `${topOffset}px`
        }
    }, [index]);


    return (

        <CustomToastStyled className={toastClassName} ref={toastRef}>

            {
                (type === 'error') ? (
                    <ExclamationCircleIcon width={20} className='errorIcon' />
                ) : (
                    <CheckCircleIcon width={20} className='sucessIcon' />
                )

            }

            <p>{message}</p>
        </CustomToastStyled>
    )
}

export default CustomToast