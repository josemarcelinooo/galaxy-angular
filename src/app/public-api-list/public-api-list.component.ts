import { Component } from '@angular/core';
import { PublicApiListService } from '../services/public-api-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-public-api-list',
  templateUrl: './public-api-list.component.html',
  styleUrls: ['./public-api-list.component.scss']
})
export class PublicApiListComponent {
	apiList$: Observable<any>;

	constructor(private publicApiListService: PublicApiListService) { }

	ngOnInit(): void {
		this.apiList$ = this.publicApiListService.getPublicApiList();
		this.apiList$.subscribe(data => {
			console.log(data);
		})
	}
}
