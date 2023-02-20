import moment from 'moment';
import { useTranslation } from 'react-i18next'
import '../extensions/string-extensions'
import workingExperienceData from '../data/work-experience-data'
import IWorkExperienceModel from '../models/work-experience-model';

const useDateHelper = () => {
    const { t } = useTranslation();
    const workingExperiences: IWorkExperienceModel[] = workingExperienceData;

    const writeTotalWorkExperienceTime = (): string => {
        let totalTime: number = 0;

        workingExperiences.forEach(w => {
            let diff = calcDiffDate(w.from, w.to);

            totalTime += diff.asMilliseconds();
        });

        let x = moment.duration(totalTime);

        return writeDuration(x);
    }

    const calcDiffDate = (start: Date, end: Date | undefined): moment.Duration => {
        let e = moment(end);
    
        if (! end)
            e = moment()
    
        let s = moment(start);
        let diff = moment.duration(e.diff(s))
        
        return diff
    }

    const writeDateDiff = (start: Date, end: Date | undefined): string => {
        let diff = calcDiffDate(start, end)
        return writeDuration(diff);
    }

    const writeDuration = (duration: moment.Duration): string => {
        let days = duration.get('days')
        let months = duration.get('months')
        let years = duration.get('years')
    
        if(days >= 30){
            days = 0;
            months+=1
        }
    
        let yearsPhrase = years > 0 ? `${years} ${t('date.years')} ` : ''
        let monthsPhrase = months > 0 ? `${months} ${t('date.months')}` : ''
        let daysPhrase = days > 0 ? ` ${days} ${t('date.days')}` : ''
    
        let result = `${yearsPhrase}${monthsPhrase}${daysPhrase}`;
    
        return result;
    }

    return {
        writeDateDiff, writeTotalWorkExperienceTime
    }
}



export default useDateHelper;