
import { Component } from '@angular/core';

@Component({
    //selector vc usa como o nome que vc usara para importar o componente
    selector: 'courses', 
    //template é o que irá aparecer na tela quando vc importar o componente
    template: '<h2>Title: {{ getTitle() }}</h2>' 
})

export class CoursesComponent {

    title = 'List of courses';

    getTitle(){
        return this.title;
    }

}