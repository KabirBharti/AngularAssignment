import { Component } from '@angular/core';

@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css']
})
export class StudentRecordComponent {


  studentName: string;
  studentAge:number;
  studentGrade: string

  studentRecord:Array<{studentName: string, studentAge:number, studentGrade:string}> = [];

  showRecord:boolean = false;

  constructor() { }

  addStudentRecord() {
      this.studentRecord.push({studentName: this.studentName,studentAge: this.studentAge, studentGrade: this.studentGrade});
      this.studentAge=null;
      this.studentGrade=null;
      this.studentName=null;
  }

  onShow(){
    this.showRecord=true;
  }

  onAdd(){
    this.showRecord=false;
  }
}
