import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const errorPage = code => {
    const errorCode = code.substr(0, 3);
    const errorFamily = code.substr(0, 2);
    const errorObj = {
        statusCode: errorCode,
        content: 'Something went wrong',
    };
    console.warn(code)
    switch (errorFamily) {
        case '40':
            if (errorCode === '403') {
                errorObj.content = `The requested resource is Forbidden`;
            } else {
                errorObj.content = `La ressource requise est actuellement indisponible.`;
                errorObj.statusCode = "03";
            }
            break;
        case '50':
            errorObj.content = `Une condition inattendue a été rencontrée. Notre équipe tente de remettre le service en ligne.`;
            break;
        default:
            break;
    }
    return errorObj;
};

const Page = ({ match: { params: { error = '404' } } }) => {
    const { statusCode, content } = errorPage(error);
    return (
        <div className="cover">
            <h1>
                Une erreur vient d'arriver <small>Erreur {statusCode}</small>
            </h1>
            <p className="lead">{content}</p>
            <p>
                <Link href="/" to="/">
                    Home
        </Link>
            </p>

        </div>
    );
};

Page.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            error: PropTypes.string,
        }),
    }),
};

Page.defaultProps = {
    match: {
        params: {
            error: '404',
        },
    },
};

export default Page;