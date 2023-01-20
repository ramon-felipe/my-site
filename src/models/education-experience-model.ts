import IFromToModel from "./from-to-model";

export default interface IEducationExperienceModel extends IFromToModel {
    school: string;
    course: string;
    address: string;
    webPage: string;
}
