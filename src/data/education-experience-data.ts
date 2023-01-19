import IEducationExperienceModel from "../models/education-experience-model";

const educationExperienceData: IEducationExperienceModel[] = [
    {
        school: "uninove",
        course: "science_computer",
        from: new Date("06/01/2008"),
        to: new Date("06/01/2012"),
        address: "Rua Guaranésia, 425 - Vila Maria, São Paulo - SP, São Paulo, Brazil",
        webPage: 'https://www.uninove.br/'
    },
    {
        school: "etec professor horácio augusto da silveira",
        course: "information_technician",
        from: new Date("01/01/2007"),
        to: new Date("06/01/2008"),
        address: "R. Alcântara, 113 - Vila Guilherme, São Paulo - SP, São Paulo, Brazil",
        webPage: 'https://etechoracio.com.br/has/'
    }
]

export default educationExperienceData;