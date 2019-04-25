import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// -------- service ----------//
import { ExaminstionsService } from '../../../services/examinations/examinstions.service';

@Component({
  selector: 'app-examination-view',
  templateUrl: './examination-view.component.html',
  styleUrls: ['./examination-view.component.css']
})
export class ExaminationViewComponent implements OnInit {
   panelOpenState: boolean;
   examdata : any
   syllabusdata : any;
   syllabusfileUrl : any;
   regulationdata : any;
   regulationsfileUrl : any;
   circulardata : any;
   circularsfileUrl : any;
   downloadsdata : any;
   downloadsfileUrl : any;
   resultsdata : any;
   resultsfileUrl : any;

  constructor(private examinationService: ExaminstionsService) {
     this.service();
   }

  ngOnInit() {
    this.panelOpenState = false;
  }
  service(){
     const Data = {type:'test'};
     this.examinationService.examinationsList(Data).subscribe(response => {      
        console.log(response);
      if(response['status'] === 200){
         this.examdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
     this.examinationService.curriculumAndSyllabusList(Data).subscribe(response => {      
        if(response['status'] === 200){
           this.syllabusdata = response['info']
           this.syllabusfileUrl = this.syllabusdata.fileUrl
        }
        else{
           alert('Something went wrong!. Please refresh the page')
        }
     });
     this.examinationService.regulationsList(Data).subscribe(response => {      
        if(response['status'] === 200){
           this.regulationdata = response['info']
           this.regulationsfileUrl = this.regulationdata.fileUrl
        }
        else{
           alert('Something went wrong!. Please refresh the page')
        }
     });
     this.examinationService.circularsList(Data).subscribe(response => {      
        if(response['status'] === 200){
           this.circulardata = response['info']
           this.circularsfileUrl = this.circulardata.fileUrl
        }
        else{
           alert('Something went wrong!. Please refresh the page')
        }
     });
     this.examinationService.downloadsList(Data).subscribe(response => {      
        if(response['status'] === 200){
           this.downloadsdata = response['info']
           this.downloadsfileUrl = this.downloadsdata.fileUrl
        }
        else{
           alert('Something went wrong!. Please refresh the page')
        }
     });
     this.examinationService.resultsList(Data).subscribe(response => {      
        if(response['status'] === 200){
           this.resultsdata = response['info']
           this.resultsfileUrl = this.resultsdata.fileUrl
        }
        else{
           alert('Something went wrong!. Please refresh the page')
        }
     });
  }
}
