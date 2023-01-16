export default interface IWorkExperienceModel {
    role: string, 
    company: string, 
    from: Date, 
    to?: Date, 
    city: string, 
    country: string,
    job_description_i18n: string,
    webpage: string
}

