import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalworldDataModule } from '../palworld-data/palworld-data.module';

@NgModule({
  imports: [CommonModule, PalworldDataModule],
  exports: [CommonModule, PalworldDataModule],
})
export class SharedModule {}
