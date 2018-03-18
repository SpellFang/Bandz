import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

/** Material IO imports */
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
/** !Material IO imports */
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {DataService} from './data.service';
import { ExtraComponent } from './extra/extra.component';
import { BandSliderComponent } from './band-slider/band-slider.component';
import { VenueSliderComponent } from './venue-slider/venue-slider.component';
import { SlideShowWithSearchBarComponent } from './slide-show-with-search-bar/slide-show-with-search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SuggestionsComponent} from './suggestions/suggestions.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExtraComponent,
    BandSliderComponent,
    VenueSliderComponent,
    SlideShowWithSearchBarComponent,
    FooterComponent,
    HeaderComponent,
    SuggestionsComponent,
    SubmitFormComponent,
    LoginFormComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ],
  entryComponents: [
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})



export class AppModule {

}
export class MaterialModule {}