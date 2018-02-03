import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HotspringsIndexComponent } from './hotsprings-index/hotsprings-index.component';
import { CreateHotspringComponent } from './create-hotspring/create-hotspring.component';
import { AddIndexContainerComponent } from './add-index-container/add-index-container.component';

import { HotspringService } from './services/hotspring.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: { title: 'Colorado Hotsprings' }
  },
  {
    path: 'hotsprings',
    component: AddIndexContainerComponent,
    data: { title: 'Colorado Hotsprings' }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HotspringsIndexComponent,
    CreateHotspringComponent,
    AddIndexContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HotspringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
