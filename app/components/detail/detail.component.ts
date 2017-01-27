import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';

@Component({
    moduleId: module.id,
    selector: 'detail',
    templateUrl: 'detail.component.html',
    styles: [`
        .odd{background-color: paleturquoise;width: 100%}
        .even{background-color: aliceblue;width: 100%}
        
     `]
})
export class DetailComponent {

    public items: any[] = [
        { title: 'NativeScript' },
        { title: 'Angular' },
        { title: 'TypeScript' },
        { title: 'JavaScript' }
    ];

    constructor(private router: RouterExtensions, private params: ModalDialogParams) {
        console.log(params.context.msg);
    }

    public onItemTap(e) {
        for (let key in e) {
            console.log(`${key}: ${e[key]}`);
        }
    }

    public goBack() {
        this.router.back();
    }

    public close() {
        this.params.closeCallback('closed the ModalDialogOptions.');
    }
}