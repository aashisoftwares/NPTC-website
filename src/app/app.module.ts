import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { AboutOverviewComponent } from './Components/About/about-overview/about-overview.component';
import { AboutActivitiesComponent } from './Components/About/about-activities/about-activities.component';
import { AboutAntiRaggingCommitteeComponent } from './Components/About/about-anti-ragging-committee/about-anti-ragging-committee.component';
import { DepartmentsComponent } from './Components/Academics/departments/departments.component';
import { CoursesOfferedComponent } from './Components/Academics/courses-offered/courses-offered.component';
import { NewsViewComponent } from './Components/News/news-view/news-view.component';
import { StudentLoginComponent } from './Components/Student/student-login/student-login.component';
import { StaffViewComponent } from './Components/Staff/staff-view/staff-view.component';
import { EventViewComponent } from './Components/Events/event-view/event-view.component';
import { AboutPlacementComponent } from './Components/Placements/about-placement/about-placement.component';
import { OurRecruitersComponent } from './Components/Placements/our-recruiters/our-recruiters.component';
import { ExaminationViewComponent } from './Components/Examinations/examination-view/examination-view.component';
import { StudentAdmissionComponent } from './Components/Admissions/student-admission/student-admission.component';
import { EligibilityCriteriaComponent } from './Components/Admissions/eligibility-criteria/eligibility-criteria.component';
import { PlacementRecordComponent } from './Components/Admissions/placement-record/placement-record.component';
import { SalientFeaturesComponent } from './Components/Admissions/salient-features/salient-features.component';
import { AmenitiesComponent } from './Components/Admissions/amenities/amenities.component';
import { TrainingDivisionComponent } from './Components/Admissions/training-division/training-division.component';
import { GalleryComponent } from './Components/Gallery/gallery/gallery.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { ContactComponent } from './Components/Contact/contact/contact.component';
import { FacilitiesComponent } from './Components/Facilities/facilities/facilities.component';
import { HeaderComponent } from './Components/Common-Components/header/header.component';
import { FooterComponent } from './Components/Common-Components/footer/footer.component';
import { DepartmentViewComponent } from './Components/Academics/department-view/department-view.component';
import { CourseViewComponent } from './Components/Academics/course-view/course-view.component';
import { NewsComponent } from './Components/News/news/news.component';
import { EventComponent } from './Components/Events/event/event.component';
import { VisionMissionComponent } from './Components/About/vision-mission/vision-mission.component';
import { ManagementComponent } from './Components/About/management/management.component';
import { NiaInstitutionsComponent } from './Components/About/nia-institutions/nia-institutions.component';
import { ApprovalsComponent } from './Components/About/approvals/approvals.component';
import { InstitutionOrganogramComponent } from './Components/About/institution-organogram/institution-organogram.component';
import { AidedProgrammesComponent } from './Components/Academics/aided-programmes/aided-programmes.component';
import { SelfSupportingProgrammesComponent } from './Components/Academics/self-supporting-programmes/self-supporting-programmes.component';
import { PostDiplomaProgrammesComponent } from './Components/Academics/post-diploma-programmes/post-diploma-programmes.component';
import { LifeAtNPTCComponent } from './Components/life-at-nptc/life-at-nptc.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutOverviewComponent,
    AboutActivitiesComponent,
    AboutAntiRaggingCommitteeComponent,
    DepartmentsComponent,
    CoursesOfferedComponent,
    NewsViewComponent,
    StudentLoginComponent,
    StaffViewComponent,
    EventViewComponent,
    AboutPlacementComponent,
    OurRecruitersComponent,
    ExaminationViewComponent,
    StudentAdmissionComponent,
    EligibilityCriteriaComponent,
    PlacementRecordComponent,
    SalientFeaturesComponent,
    AmenitiesComponent,
    TrainingDivisionComponent,
    GalleryComponent,
    HomeComponent,
    ContactComponent,
    FacilitiesComponent,
    HeaderComponent,
    FooterComponent,
    DepartmentViewComponent,
    CourseViewComponent,
    NewsComponent,
    EventComponent,
    VisionMissionComponent,
    ManagementComponent,
    NiaInstitutionsComponent,
    ApprovalsComponent,
    InstitutionOrganogramComponent,
    AidedProgrammesComponent,
    SelfSupportingProgrammesComponent,
    PostDiplomaProgrammesComponent,
    LifeAtNPTCComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
