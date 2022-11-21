import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  listCourses(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'Front-End' }
    ]
  }
}
