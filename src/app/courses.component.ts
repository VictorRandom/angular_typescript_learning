import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    //selector vc usa como o nome que vc usara para importar o componente
    selector: 'courses', 
    //template é o que irá aparecer na tela quando vc importar o componente
    template: `
        <h2>Title: {{ getTitle() }}</h2>
        <ul>
            <!-- *ngfor é como um foreach -->
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        ` 
})

export class CoursesComponent {

    title = 'List of courses';
    getTitle(){
        return this.title;
    }
    courses;
   

    constructor(service: CoursesService){
    
        // let service = new CoursesService();
        // passou a variavel para o parametro do construtor
        
        this.courses = service.getCourses();
    }

    //passou para o service
    // courses = ['course1', 'course2', 'course3'];

    //Logic for calling an HTTP service
}