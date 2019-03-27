import {frQuestion} from './frQuestion';
import {mcQuestion} from './mcQuestion';

export class feedback {
    category: string;
    associatedFRQuestions: frQuestion[];
    associatedMCQuestions: mcQuestion[];
    city: String;
    state: string;
    dateToBeCreated: string;
}