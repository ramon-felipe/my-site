import ILanguageSkillsModel from "../models/language-skills-models";

const languageData: ILanguageSkillsModel[] = [
    {
        languageName: 'portuguese',
        motherTongue: true,
        listeningRate: 5,
        readingRate: 5,
        speakingRate: 5,
        writingRate: 5
    },
    {
        languageName: 'english',
        motherTongue: false,
        listeningRate: 4,
        readingRate: 4,
        speakingRate: 4,
        writingRate: 4
    }
]

export default languageData;