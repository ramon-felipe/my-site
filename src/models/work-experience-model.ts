import IFromToModel from "./from-to-model";

export default interface IWorkExperienceModel extends IFromToModel {
    role: string, 
    company: string,
    city: string, 
    country: string,
    job_description_i18n: string,
    webpage: string
}

