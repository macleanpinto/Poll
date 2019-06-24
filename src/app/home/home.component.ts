import { Component, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LookupService } from "../services/lookup.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  constructor(private lookupservice: LookupService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("searchKey") != null) {
      this.isSelected = true;
    }
  }


  private selected: FormControl = new FormControl('');
  isSelected: boolean = false;

  results: Lookup[];

  search(event) {
    this.lookupservice.lookup(event.query).then(data => {
      this.results = data;
    });
  }

  onSelect(event) {
    this.isSelected = true;
    sessionStorage.setItem("searchKey", JSON.stringify(this.selected.value));
    this.router.navigate(['/search']);
  }
}
