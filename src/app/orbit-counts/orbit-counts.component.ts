import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit(): void {
  }

  countType(satellites: Satellite[], countType: string): number {
    let numOfType: number = 0;

    for(let i = 0; i < satellites.length; i++){
      if (satellites[i].type === countType ) {
        numOfType++
      }
    }
    
    return numOfType;
  }

}
