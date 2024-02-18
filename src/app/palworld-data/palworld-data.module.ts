import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalsService } from './pals.service';
import { PalworldVersionService } from './palworld-version.service';
import { PalwordEnumsService } from './palword-enums.service';

@NgModule({
  imports: [CommonModule],
  providers: [PalworldVersionService, PalwordEnumsService, PalsService],
})
export class PalworldDataModule {}
