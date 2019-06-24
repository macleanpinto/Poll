import { Component, OnInit } from '@angular/core';
import { LookupService } from '../services/lookup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  private results: Results[];
  constructor(private lookupservice: LookupService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("searchKey") == null) {
      this.router.navigate(['']);
    }
    const searchkey: Lookup = JSON.parse(sessionStorage.getItem("searchKey"));
    this.lookupservice.getResults(searchkey).then(data => {
      this.results = data;
    });
    sessionStorage.removeItem("searchKey");
  }
}
