import moment from 'moment';
import { useTranslation } from 'react-i18next'
import '../../extensions/string-extensions'
import useDateHelper from '../../hooks/useDateHelper';
import IFromToModel from '../../models/from-to-model';

const FromToDetails = (props: IFromToModel): JSX.Element => {
    const { t } = useTranslation();
    const dateHelper = useDateHelper();
    const { from, to } = props;   

    return (
        <>
            {t('from').UpperCaseFirstLetter()}
            : <h6 className='d-inline'>
                { moment(from).format('DD/MMMM/YYYY') }  
            </h6> {t('to').UpperCaseFirstLetter()}

            <h6 className='d-inline'>
                : { !to ? t('current').UpperCaseFirstLetter() : moment(to).format('DD/MMMM/YYYY') }
            </h6> ({ dateHelper.writeDateDiff(from, to) })
        </>
    )
}

export default FromToDetails;