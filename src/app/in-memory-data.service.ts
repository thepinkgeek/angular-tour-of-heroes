import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const heroes = [
		{ id: 0,  name: 'Psylocke' },
		{ id: 11, name: 'Dr. Strange' },
		{ id: 12, name: 'Jean Grey' },
		{ id: 13, name: 'Domino' },
		{ id: 14, name: 'Cyclops' },
		{ id: 15, name: 'Magneto' },
		{ id: 16, name: 'Storm' },
		{ id: 17, name: 'Scarlet Witch' },
		{ id: 18, name: 'Wonderwoman' },
		{ id: 19, name: 'Superman' },
		{ id: 20, name: 'Flash' }
    ];
    return {heroes};
	}
}