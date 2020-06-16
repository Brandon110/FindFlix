import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleComponent } from './single.component';
import { InfoComponent } from './info/info.component';
import { ImageComponent } from './image/image.component';
import { MetaComponent } from './meta/meta.component';
import { DetailsComponent } from './details/details.component';
import { TitleComponent } from './title/title.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { ReleaseDateComponent } from './release-date/release-date.component';
import { StatusComponent } from './status/status.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';
import { AirDatesComponent } from './air-dates/air-dates.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { OverviewComponent } from './overview/overview.component';
import { PosterComponent } from './poster/poster.component';
import { BackdropComponent } from './backdrop/backdrop.component';

@NgModule({
  declarations: [
    SingleComponent,
    InfoComponent,
    ImageComponent,
    MetaComponent,
    DetailsComponent,
    TitleComponent,
    BackgroundImageComponent,
    ReleaseDateComponent,
    StatusComponent,
    MetaComponent,
    LinkComponent,
    AirDatesComponent,
    SeasonsComponent,
    OverviewComponent,
    PosterComponent,
    BackdropComponent
  ],
  exports: [
    SingleComponent,
    InfoComponent,
    ImageComponent,
    DetailsComponent,
    TitleComponent,
    BackgroundImageComponent,
    ReleaseDateComponent,
    StatusComponent,
    MetaComponent,
    LinkComponent,
    AirDatesComponent,
    SeasonsComponent,
    OverviewComponent,
    PosterComponent,
    BackdropComponent
  ],
  imports: [CommonModule, RouterModule]
})
export class SingleModule {}
