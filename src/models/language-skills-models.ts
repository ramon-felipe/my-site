import ILanguageSkillRateModel from "./language-skill-rate-model";

export default interface ILanguageSkillsModel extends ILanguageSkillRateModel {
    languageName: string
    motherTongue: boolean    
    listeningRate: number
    readingRate: number
    writingRate: number
    speakingRate: number
}