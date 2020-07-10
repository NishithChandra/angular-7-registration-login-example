import {Directive, ElementRef} from "@angular/core";

@Directive({
    selector: '[activationDir]'
})

export class ActivationDirective {
        constructor(private el: ElementRef) {
            console.log(el);
            el.nativeElement.innerText = ""
        }

}

