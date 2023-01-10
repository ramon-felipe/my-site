import React from "react";
import { useTranslation } from "react-i18next";

export interface IMotherTongueProps {
    languageName: string
}

const MotherTongue = (props: IMotherTongueProps) => {
    const { t } = useTranslation();

    return (
        <div className='py-2'>
            {t('mother-tongue').UpperCaseFirstLetter(true)}:
            <div>
                <h3>{t(props.languageName)}</h3>
            </div>
        </div>
    );
};

export default MotherTongue;