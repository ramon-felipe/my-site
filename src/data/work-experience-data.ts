import IWorkExperienceModel from "../models/work-experience-model";

const workingExperienceData: IWorkExperienceModel[] = [
    {
        role: "fullstack_developer",
        company: "BTG Pactual",
        from: new Date("06/01/2021"),
        to: undefined,
        city: "são paulo",
        country: "brazil",
        job_description_i18n: "btg",
        webpage: "https://www.btgpactual.com/"
    },
    {
        role: "backend_developer",
        company: "Santander",
        from: new Date("01/01/2020"),
        to: new Date("05/01/2021"),
        city: "são paulo",
        country: "brazil",
        job_description_i18n: "emdia",
        webpage: "https://euemdia.com.br/"
    },
    {
        role: "test_engineer",
        company: "Bizapp",
        from: new Date("10/01/2018"),
        to: new Date("12/01/2019"),
        city: "são paulo",
        country: "brazil",
        job_description_i18n: "bizzap",
        webpage: "https://bizapp.com.br/"
    },
    {
        role: "test_engineer",
        company: "HDI Group",
        from: new Date("04/01/2018"),
        to: new Date("10/01/2018"),
        city: "são paulo",
        country: "brazil",
        job_description_i18n: "hdi",
        webpage: "https://grupohdi.com/"
    },
    {
        role: "software_developer",
        company: "eDok",
        from: new Date("01/01/2012"),
        to: new Date("07/01/2012"),
        city: "são paulo",
        country: "brazil",
        job_description_i18n: "edok",
        webpage: "https://www.edok.com.br/#/"
    },
    {
        role: "software_developer",
        company: "seme",
        from: new Date("01/01/2009"),
        to: new Date("12/01/2010"),
        city: "são paulo",
        country: "brazil",
        job_description_i18n: "sec_sports",
        webpage: "https://www.prefeitura.sp.gov.br/cidade/secretarias/esportes/"
    }
]

export default workingExperienceData;