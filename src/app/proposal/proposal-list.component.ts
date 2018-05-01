import { Component } from '@angular/core';
import {  Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company',
  'https://www.google.com.br', 'Angular', 150, 120, 15,
  'somebody@hotmail.com')
  
  proposalTwo: Proposal = new Proposal(15, 'XYZ Company',
  'https://www.google.com.br', 'JavaScript', 150, 120, 15,
  'somebody@hotmail.com')
  
  proposalThree: Proposal = new Proposal(21, 'DEF Company',
  'https://www.google.com.br', 'Ruby on Rails', 150, 120, 15,
  'somebody@hotmail.com')
  
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}

// 15, 'ABC Company', 'https://www.google.com.br', 'Angular', 150, 120, 15, 'https://www.google.com.br'