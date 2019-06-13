import { Component, ViewChild,
  AfterViewInit,
  ElementRef, HostListener, OnInit, EventEmitter, Output  } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
@Component({
  selector: 'app-sidebar',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  styles: [` `],
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
  darkmode = true;
  private entityId;
  routeParametertemp;
  routeParameter;
  searchText;

  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' }
  ];
  @Output() getMatchedLocationPath = new EventEmitter();
  constructor( private route: ActivatedRoute, private location: Location) {

  }


  @ViewChild('searchInput') searchInput: ElementRef;

  ngOnInit() {
  }

  clearSearchInput() {
      this.searchInput.nativeElement.value = '';
  }

  @HostListener('click', ['$event.target'])
  onClick(targetElement: string) {
    console.log(this.location.path());
    this.routeParametertemp = this.location.path();
    this.routeParameter = this.routeParametertemp.replace (/\//g, '');
    this.getMatchedLocationPath.emit(this.routeParameter);
  }

  menuSearch(event) {
    // tslint:disable-next-line:one-variable-per-declaration
    let filter, ul, li, a, i, j, listHeading;
    filter = event.target.value.toUpperCase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByClassName('sb-site-list-item');
    listHeading = ul.getElementsByClassName('sb-site-list-heading');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
        for (j = 0; j < listHeading.length; j++) {
          listHeading[j].style.display = 'block';
        }
      } else {
        li[i].style.display = 'none';
        for (j = 0; j < listHeading.length; j++) {
          listHeading[j].style.display = 'none';
        }
      }
    }
  }
}


