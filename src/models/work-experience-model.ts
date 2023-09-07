import IFromToModel from "./from-to-model";

export default interface IWorkExperienceModel extends IFromToModel {
    role: string, 
    company: string,
    city: string, 
    country: string,
    jobDescription: string,
    webpage: string
}

