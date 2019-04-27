import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { NgxLoadingModule } from 'ngx-loading';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { NgxTimelineModule } from 'ngx-timeline';

// ---------- Custom Components  ----------------//

import { AboutOverviewComponent } from './Components/About/about-overview/about-overview.component';
import { AboutActivitiesComponent } from './Components/About/about-activities/about-activities.component';
import { AboutAntiRaggingCommitteeComponent } from './Components/About/about-anti-ragging-committee/about-anti-ragging-committee.component';
import { DepartmentsComponent } from './Components/Academics/departments/departments.component';
import { NewsViewComponent } from './Components/News/news-view/news-view.component';
import { EventViewComponent } from './Components/Events/event-view/event-view.component';
import { AboutPlacementComponent } from './Components/Placements/about-placement/about-placement.component';
import { OurRecruitersComponent } from './Components/Placements/our-recruiters/our-recruiters.component';
import { ExaminationViewComponent } from './Components/Examinations/examination-view/examination-view.component';
import { EligibilityCriteriaComponent } from './Components/Admissions/eligibility-criteria/eligibility-criteria.component';
import { GalleryComponent } from './Components/Gallery/gallery/gallery.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { ContactComponent } from './Components/Contact/contact/contact.component';
import { HeaderComponent } from './Components/Common-Components/header/header.component';
import { FooterComponent } from './Components/Common-Components/footer/footer.component';
import { DepartmentViewComponent } from './Components/Academics/department-view/department-view.component';
import { NewsComponent } from './Components/News/news/news.component';
import { EventComponent } from './Components/Events/event/event.component';
import { VisionMissionComponent } from './Components/About/vision-mission/vision-mission.component';
import { ManagementComponent } from './Components/About/management/management.component';
import { NiaInstitutionsComponent } from './Components/About/nia-institutions/nia-institutions.component';
import { ApprovalsComponent } from './Components/About/approvals/approvals.component';
import { InstitutionOrganogramComponent } from './Components/About/institution-organogram/institution-organogram.component';
import { StaffComponent } from './Components/life-at-nptc/staff/staff.component';
import { StudentComponent } from './Components/life-at-nptc/student/student.component';
import { CareersComponent } from './Components/life-at-nptc/careers/careers.component';
import { CoursesComponent } from './Components/Admissions/courses/courses.component';
import { StudentLoginComponent } from './Components/Student/student-login/student-login.component';
import { ScholarshipsComponent } from './Components/Admissions/scholarships/scholarships.component';
import { EbrochureComponent } from './Components/Admissions/ebrochure/ebrochure.component';
import { StudentFacilitiesComponent } from './Components/Admissions/student-facilities/student-facilities.component';
import { FacilitiesComponent } from './Components/facilities/facilities.component';
import { PlacementRecordComponent } from './Components/Admissions/placement-record/placement-record.component';
import { MilestonesComponent } from './Components/About/milestones/milestones.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutOverviewComponent,
    AboutActivitiesComponent,
    AboutAntiRaggingCommitteeComponent,
    DepartmentsComponent,
    NewsViewComponent,
    EventViewComponent,
    AboutPlacementComponent,
    OurRecruitersComponent,
    ExaminationViewComponent,
    EligibilityCriteriaComponent,
    GalleryComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    DepartmentViewComponent,
    NewsComponent,
    EventComponent,
    VisionMissionComponent,
    ManagementComponent,
    NiaInstitutionsComponent,
    ApprovalsComponent,
    InstitutionOrganogramComponent,
    StaffComponent,
    StudentComponent,
    CareersComponent,
    CoursesComponent,
    StudentLoginComponent,
    ScholarshipsComponent,
    EbrochureComponent,
    StudentFacilitiesComponent,
    FacilitiesComponent,
    PlacementRecordComponent,
    MilestonesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    NgxTimelineModule,
    CarouselModule.forRoot(),
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
