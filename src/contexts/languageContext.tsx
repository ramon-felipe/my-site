import { Dispatch, SetStateAction, createContext } from "react";

interface ILanguageContext {
    lang: string,
    setLang: Dispatch<SetStateAction<string>>
}

export const LanguageContext = createContext({} as ILanguageContext);