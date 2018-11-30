import { TestBed, ComponentFixture } from "@angular/core/testing";
import { ParentComponent } from '../components/parent/parent.component';
import { ChildComponent } from '../components/child/child.component';
import { ChildDirective } from '../directives/child.directive';
import { ComponentFactoryResolver, Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
    template: 'Testing child component'
})
class ChildComp {

}

describe('Parent/child dynamic', () => {

    let fixture: ComponentFixture<ParentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ParentComponent, ChildComp, ChildDirective],
        });
        TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [ChildComp]
            }
        });

        fixture = TestBed.createComponent(ParentComponent);
    });


    it('should test', () => {
        let comp = fixture.componentInstance;
        expect(comp).toBeDefined();

        fixture.componentInstance.comp = ChildComp;
        fixture.detectChanges();

        expect(fixture.componentInstance.childDir.viewContainerRef.length).toEqual(1);

    });
})