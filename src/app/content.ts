import {mcQuestion} from './mcQuestion';

export class Content {
    title: String;
    text: String;
    contentTags: String[];
    associatedMCQuestions: mcQuestion[];
    associatedFRQuestions: String[];
}