import { Component, OnInit } from '@angular/core';
import{Location}  from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-companies',
  templateUrl: './other-companies.component.html',
  styleUrls: ['./other-companies.component.css']
})
export class OtherCompaniesComponent implements OnInit {

  constructor(private location: Location, private router:Router) { }

  ngOnInit() {
  }

  othercomapnyEmploes(){
  this.router.navigate(['othercompanies/othercompanyemployes']);
  // this.router.navigate(['othercompanyemployes'], {relativeTo: this.router});

  }

  goBack(){
 this.location.back();
  }

}
