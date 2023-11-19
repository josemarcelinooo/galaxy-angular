import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicApiListComponent } from './public-api-list.component';

@NgModule({
  declarations: [PublicApiListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PublicApiListComponent }
    ])
  ],
  exports: [PublicApiListComponent]
})
export class PublicApiListModule {}