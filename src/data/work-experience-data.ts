import IWorkExperienceModel from "../models/work-experience-model";

const workingExperienceData: IWorkExperienceModel[] = [
    {
        role: "fullstack_developer",
        company: "BTG Pactual",
        from: new Date("06/01/2021"),
        to: undefined,
        city: "são paulo",
        country: "brazil",
        jobDescription: "btg",
        webpage: "https://www.btgpactual.com/"
    },
    {
        role: "backend_developer",
        company: "Santander",
        from: new Date("01/01/2020"),
        to: new Date("05/01/2021"),
        city: "são paulo",
        country: "brazil",
        jobDescription: "emdia",
        webpage: "https://euemdia.com.br/"
    },
    {
        role: "test_engineer",
        company: "Bizapp",
        from: new Date("10/01/2018"),
        to: new Date("12/01/2019"),
        city: "são paulo",
        country: "brazil",
        jobDescription: "bizzap",
        webpage: "https://bizapp.com.br/"
    },
    {
        role: "test_engineer",
        company: "HDI Group",
        from: new Date("04/01/2018"),
        to: new Date("10/01/2018"),
        city: "são paulo",
        country: "brazil",
        jobDescription: "hdi",
        webpage: "https://grupohdi.com/"
    },
    {
        role: "oracle-retail-consultant",
        company: "Logic Informations Systems",
        from: new Date("07/01/2014"),
        to: new Date("03/01/2018"),
        city: "são paulo",
        country: "brazil",
        jobDescription: "logic-info",
        webpage: "https://logicinfo.com/"
    },
    {
        role: "sap-crm-consultant",
        company: "Accenture",
        from: new Date("08/01/2012"),
        to: new Date("07/01/2014"),
        city: "são paulo",
        country: "brazil",
        jobDescription: "accenture",
        webpage: "https://www.accenture.com/gb-en"
    },
    {
        role: "software_developer",
        company: "eDok",
        from: new Date("01/01/2012"),
        to: new Date("07/31/2012"),
        city: "são paulo",
        country: "brazil",
        jobDescription: "edok",
        webpage: "https://www.edok.com.br/#/"
    },
    {
        role: "software_developer",
        company: "seme",
        from: new Date("01/01/2009"),
        to: new Date("07/01/2010"),
        city: "são paulo",
        country: "brazil",
        jobDescription: "sec_sports",
        webpage: "https://www.prefeitura.sp.gov.br/cidade/secretarias/esportes/"
    }
]

export default workingExperienceData;