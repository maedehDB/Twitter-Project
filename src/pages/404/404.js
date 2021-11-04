import React from 'react'
import { useTranslation } from 'react-i18next'

const ErrorPage = () => {

    const {t} = useTranslation()

    return (
        <div>
            <h1>404</h1>
            <p>{t("404_desc")}</p>
        </div>
    )
}

export default ErrorPage
