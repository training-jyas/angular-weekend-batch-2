import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdownDirective]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false;

    ngOnInit() {
    }

    @HostListener('click') onclick() {
        this.isOpen = this.isOpen ? false : true;
    }
}
