import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalsService } from './pals.service';
import { PalworldVersionService } from './palworld-version.service';

@NgModule({
  imports: [CommonModule],
  providers: [PalworldVersionService, PalsService],
})
export class PalworldDataModule {}
