import { ResultsPage } from './../results/results';
import { TablePage } from './../table/table';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

    tableRoot = TablePage;
    resultsRoot = ResultsPage;
    profileRoot = ProfilePage;

  constructor(public navCtrl: NavController) {}

}
