import React from "react";

export interface IMotherTongueProps {
    languageName: string
}

const MotherTongue = (props: IMotherTongueProps) => {
    return (
        <div className='py-2'>
            Mother Tongue:
            <div>
                <h3>{props.languageName}</h3>
            </div>
        </div>
    );
};

export default MotherTongue;