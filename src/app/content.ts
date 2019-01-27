import {mcQuestion} from './mcQuestion';
import {frQuestion} from './frQuestion';

export class Content {
    title: String;
    text: String;
    contentTags: String[];
    associatedMCQuestions: mcQuestion[];
    associatedFRQuestions: frQuestion[];
}