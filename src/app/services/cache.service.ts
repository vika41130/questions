import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CacheService {

	constructor() { }

	set(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	add(key: string, value: any) {
		const data = this.get(key) || [];
		data.push(value);
		localStorage.setItem(key, JSON.stringify(data));
	}

	get(key: string): any {
		try {
			if (localStorage.getItem(key)) {
				return JSON.parse(localStorage.getItem(key) || '[]');
			}
		} catch (error) {
			return [];
		}
	}
}
