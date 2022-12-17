export interface IQuestion {
    question?: string;
    questionType?: string;
    paragraphAnswer?: string;
    checkboxAnswer?: Array<string>;
    isRequired?: boolean;
}