import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { HomeComponent} from './Components/Home/home/home.component';
import { AboutActivitiesComponent } from './Components/About/about-activities/about-activities.component';
import { AboutAntiRaggingCommitteeComponent } from './Components/About/about-anti-ragging-committee/about-anti-ragging-committee.component';
import { AboutOverviewComponent } from './Components/About/about-overview/about-overview.component';
import { EligibilityCriteriaComponent } from './Components/Admissions/eligibility-criteria/eligibility-criteria.component';
import { DepartmentsComponent } from './Components/Academics/departments/departments.component';
import { ExaminationViewComponent } from './Components/Examinations/examination-view/examination-view.component';
import { NewsComponent } from './Components/News/news/news.component';
import { NewsViewComponent } from './Components/News/news-view/news-view.component';
import { EventComponent } from './Components/Events/event/event.component';
import { EventViewComponent } from './Components/Events/event-view/event-view.component';
import { AboutPlacementComponent } from './Components/Placements/about-placement/about-placement.component';
import { OurRecruitersComponent } from './Components/Placements/our-recruiters/our-recruiters.component';
import { GalleryComponent } from './Components/Gallery/gallery/gallery.component';
import { ContactComponent } from './Components/Contact/contact/contact.component';
import { DepartmentViewComponent } from './Components/Academics/department-view/department-view.component';
import { ApprovalsComponent } from './Components/About/approvals/approvals.component';
import { InstitutionOrganogramComponent } from './Components/About/institution-organogram/institution-organogram.component';
import { ManagementComponent } from './Components/About/management/management.component';
import { NiaInstitutionsComponent } from './Components/About/nia-institutions/nia-institutions.component';
import { VisionMissionComponent } from './Components/About/vision-mission/vision-mission.component';
// import { from } from 'rxjs';
import { StaffComponent } from './Components/life-at-nptc/staff/staff.component';
import { StudentComponent } from './Components/life-at-nptc/student/student.component';
import { CareersComponent } from './Components/life-at-nptc/careers/careers.component';
import { StudentLoginComponent } from './Components/Student/student-login/student-login.component';
import { CoursesComponent } from './Components/Admissions/courses/courses.component';
import { ScholarshipsComponent } from './Components/Admissions/scholarships/scholarships.component';
import { EbrochureComponent } from './Components/Admissions/ebrochure/ebrochure.component';
import { StudentFacilitiesComponent } from './Components/Admissions/student-facilities/student-facilities.component';
import { FacilitiesComponent } from './Components/facilities/facilities.component';

const appRoutes: Routes = [
    {
       path: '',
       component: HomeComponent,
    },
    {
       path: 'home',
       component: HomeComponent,
    },
    {
      path: 'about-overview',
      component: AboutOverviewComponent,
    },
    {
      path: 'management',
      component: ManagementComponent,
    },
    {
      path: 'nia-institutions',
      component: NiaInstitutionsComponent,
    },
    {
      path: 'approvals',
      component: ApprovalsComponent,
    },
    {
      path: 'institution-organogram',
      component: InstitutionOrganogramComponent,
    },
    {
      path: 'vision-mission',
      component: VisionMissionComponent,
    },
    {
      path: 'about-activities',
      component: AboutActivitiesComponent,
    },
    {
      path: 'facilities',
      component: FacilitiesComponent,
    },
    {
      path: 'facilities/Hostel',
      component: FacilitiesComponent,
    },
    {
      path: 'facilities/PhysicalEducation',
      component: FacilitiesComponent,
    },
    {
      path: 'departments',
      component: DepartmentsComponent,
    },
    {
      path: 'department-view',
      component: DepartmentViewComponent,
    },
    {
      path: 'eligibility-criteria',
      component: EligibilityCriteriaComponent,
    },
    {
      path: 'examination-view',
      component: ExaminationViewComponent,
    },
    {
      path: 'news',
      component: NewsComponent,
    },
    {
      path: 'student-login',
      component: StudentLoginComponent,
    },
    {
      path: 'news-view',
      component: NewsViewComponent,
    },
    {
      path: 'courses',
      component: CoursesComponent,
    },
    {
      path: 'staff',
      component: StaffComponent,
    },
    {
      path: 'student',
      component: StudentComponent,
    },
    {
      path: 'student-facilities',
      component: StudentFacilitiesComponent,
    },
    {
      path: 'careers',
      component: CareersComponent,
    },
    {
      path: 'event',
      component: EventComponent,
    },
    {
      path: 'scholarships',
      component: ScholarshipsComponent,
    },
    {
      path: 'e-brochure',
      component: EbrochureComponent,
    },
    {
      path: 'event-view',
      component: EventViewComponent,
    },
    {
      path: 'about-placement',
      component: AboutPlacementComponent,
    },
    {
      path: 'our-recruiters',
      component: OurRecruitersComponent,
    },
    {
      path: 'gallery',
      component: GalleryComponent,
    },
    {
      path: 'contact',
      component: ContactComponent,
    }
];
@NgModule({
    declarations: [ ],
    imports: [ RouterModule.forRoot(appRoutes,
        { enableTracing: true }
      )],
    providers: [],
    bootstrap: []
  })
  export class AppRoutingModule { }
