import { Option } from 'app/model/option.model';

export class Poll {
    displayName: string;
    uid: string;
    email: string;

    constructor(
        public title: string,
        public options: Option[],
    ) { }
}
