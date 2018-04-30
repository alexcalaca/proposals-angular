import { Component } from '@angular/core';
import {  Document } from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My first doc",
      description: "Description doc",
      file_url: "http://google.com",
      updated_at: "date",
      image_url: "http://google.com",
    },
    {
      title: "My second doc",
      description: "Description doc",
      file_url: "http://google.com",
      updated_at: "date",
      image_url: "http://google.com",
    },
    {
      title: "My third doc",
      description: "Description doc",
      file_url: "http://google.com",
      updated_at: "date",
      image_url: "http://google.com",
    }
  ]
}