import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'select-country-list',
	templateUrl: './select_country_list.html'
})
export class SelectCountryList  {
	
	@Output() countryChanged: EventEmitter<string>;

	private m_country: string;

	constructor() {
		this.countryChanged = new EventEmitter<string>();
	}

	get country(): string {
		return this.m_country;
	}
	set country(value: string) {
		if (value == this.m_country)
			return;

		this.m_country = value;
		this.countryChanged.emit(value);
	}

}