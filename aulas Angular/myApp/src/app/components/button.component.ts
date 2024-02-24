import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
    selector: "button-component",
    templateUrl: './button.component.html' ,
    styleUrls: ['./button.component.css'] 
})

export class ButtonComponent {
    @Input() label:string = '';
    buttonText:string = 'ACESSARoo';
    buttonLabel:string = 'Carrinho';
    buttonObj = {
        label :"add to cart",
    }
    getAlert(){
        alert('button clicked');
    }
}