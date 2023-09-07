import axios from 'axios';
import IWorkExperienceModel from '../models/work-experience-model';

const useDomainService = () => {
    const getWorkExperience = (): Promise<Array<IWorkExperienceModel>> => {
        let endpointUri = 'https://localhost:7254/api/WorkExperience/pt-BR'
        let res = axios.get<Array<IWorkExperienceModel>>(endpointUri).then(response => {
            let result = response.data;

            return result;
        })

        return res;
    }

    return {
        getWorkExperience
    }
}

export default useDomainService;