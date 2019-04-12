import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { HomeComponent} from './Components/Home/home/home.component';
import { AboutActivitiesComponent } from './Components/About/about-activities/about-activities.component';
import { AboutAntiRaggingCommitteeComponent } from './Components/About/about-anti-ragging-committee/about-anti-ragging-committee.component';
import { AboutOverviewComponent } from './Components/About/about-overview/about-overview.component';
import { StudentAdmissionComponent } from './Components/Admissions/student-admission/student-admission.component';
import { EligibilityCriteriaComponent } from './Components/Admissions/eligibility-criteria/eligibility-criteria.component';
import { PlacementRecordComponent } from './Components/Admissions/placement-record/placement-record.component';
import { TrainingDivisionComponent } from './Components/Admissions/training-division/training-division.component';
import { AmenitiesComponent } from './Components/Admissions/amenities/amenities.component';
import { SalientFeaturesComponent } from './Components/Admissions/salient-features/salient-features.component';
import { DepartmentsComponent } from './Components/Academics/departments/departments.component';
import { CoursesOfferedComponent } from './Components/Academics/courses-offered/courses-offered.component';
import { FacilitiesComponent } from './Components/Facilities/facilities/facilities.component';
import { ExaminationViewComponent } from './Components/Examinations/examination-view/examination-view.component';
import { NewsComponent } from './Components/News/news/news.component';
import { NewsViewComponent } from './Components/News/news-view/news-view.component';
import { StudentLoginComponent } from './Components/Student/student-login/student-login.component';
import { StaffViewComponent } from './Components/Staff/staff-view/staff-view.component';
import { EventComponent } from './Components/Events/event/event.component';
import { EventViewComponent } from './Components/Events/event-view/event-view.component';
import { AboutPlacementComponent } from './Components/Placements/about-placement/about-placement.component';
import { OurRecruitersComponent } from './Components/Placements/our-recruiters/our-recruiters.component';
import { GalleryComponent } from './Components/Gallery/gallery/gallery.component';
import { ContactComponent } from './Components/Contact/contact/contact.component';
import { CourseViewComponent } from './Components/Academics/course-view/course-view.component';
import { DepartmentViewComponent } from './Components/Academics/department-view/department-view.component';
import { ApprovalsComponent } from './Components/About/approvals/approvals.component';
import { InstitutionOrganogramComponent } from './Components/About/institution-organogram/institution-organogram.component';
import { ManagementComponent } from './Components/About/management/management.component';
import { NiaInstitutionsComponent } from './Components/About/nia-institutions/nia-institutions.component';
import { VisionMissionComponent } from './Components/About/vision-mission/vision-mission.component';
import { AidedProgrammesComponent } from './Components/Academics/aided-programmes/aided-programmes.component';
import { PostDiplomaProgrammesComponent } from './Components/Academics/post-diploma-programmes/post-diploma-programmes.component';
import { SelfSupportingProgrammesComponent } from './Components/Academics/self-supporting-programmes/self-supporting-programmes.component';
// import { from } from 'rxjs';

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
      path: 'nia-institution',
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
      path: 'aided-diploma',
      component: AidedProgrammesComponent,
    },
    {
      path: 'self-supporting-diploma',
      component: SelfSupportingProgrammesComponent,
    },
    {
      path: 'post-diploma' ,
      component: PostDiplomaProgrammesComponent,
    },
    {
      path: 'about-activities',
      component: AboutActivitiesComponent,
    },
    {
      path: 'departments',
      component: DepartmentsComponent,
    },
    {
      path: 'courses-offered',
      component: CoursesOfferedComponent,
    },
    {
      path: 'department-view',
      component: DepartmentViewComponent,
    },
    {
      path: 'course-view',
      component: CourseViewComponent,
    },
    {
      path: 'student-admission',
      component: StudentAdmissionComponent,
    },
    {
      path: 'eligibility-criteria',
      component: EligibilityCriteriaComponent,
    },
    {
      path: 'training-division',
      component: TrainingDivisionComponent,
    },
    {
      path: 'amenities',
      component: AmenitiesComponent,
    },
    {
      path: 'salient-features',
      component: SalientFeaturesComponent,
    },
    {
      path: 'placement-record',
      component: PlacementRecordComponent,
    },
    {
      path: 'facilities',
      component: FacilitiesComponent,
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
      path: 'news-view',
      component: NewsViewComponent,
    },
    {
      path: 'staff-view',
      component: StaffViewComponent,
    },
    {
      path: 'student-login',
      component: StudentLoginComponent,
    },
    {
      path: 'event',
      component: EventComponent,
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
