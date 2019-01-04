import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Book {
    id: number;
    name: string;
}

@Injectable()
export class GoodReadService {

    public bookList: Book[] = [];

    constructor(private http: HttpClient) {
        this.bookList = [
            { id: 1, name: 'The Ambassadors' },
            { id: 2, name: 'An American Tragedy' },
            { id: 3, name: 'Brave New World' },
            { id: 4, name: 'Catch-22' },
            { id: 5, name: 'Catcher in the Rye' },
            { id: 6, name: 'A Clockwork Orange' },
            { id: 7, name: 'The Day of the Locust' },
            { id: 8, name: ' Finnegans Wake' },
            { id: 9, name: 'The Grapes of Wrath' },
            { id: 10, name: 'TThe Great Gatsby' },
            { id: 11, name: 'Heart of Darkness' },
            { id: 12, name: 'The House of Mirth' },
            { id: 13, name: ' Invisible Man' },
            { id: 14, name: ' Ironweed *' },
            { id: 15, name: 'Lolita' },
            { id: 16, name: ' Midnight Children' },
            { id: 17, name: 'The Naked and the Dead' },
            { id: 18, name: ' Native Son' },
            { id: 19, name: 'On the Road' },
            { id: 20, name: 'Pale Fire' },
            { id: 21, name: ' A Passage to India' },
            { id: 22, name: 'A Portrait of the Artist as a Young Man' },
            { id: 23, name: 'The Sheltering Sky' },
            { id: 24, name: 'Slaughterhouse - Five' },
            { id: 25, name: 'The Sound and the Fury' },
            { id: 26, name: ' The Sun Also Rises' },
            { id: 27, name: 'To the Lighthouse' },
            { id: 28, name: 'Tropic of Cancer' },
            { id: 29, name: 'Ulysses' },
            { id: 30, name: 'Under the Volcano' },
            { id: 31, name: ' The USA Trilogy' },
            { id: 32, name: 'Winesburg, Ohio' },
            { id: 33, name: 'Women in Love' },
            { id: 34, name: 'Brave Story' },
            { id: 35, name: 'Infinite Stratos' },
            { id: 36, name: 'Strike the Blood' },
            { id: 37, name: 'The Third' },
            { id: 38, name: 'No Game No Life' },
            { id: 39, name: 'Loveless' },
            { id: 40, name: 'Calling You' }
        ];
    }
}
