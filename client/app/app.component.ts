import { Component } from '@angular/core';
import {TokhangService} from './services/tokhang.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TokhangService]
})

export class AppComponent { }