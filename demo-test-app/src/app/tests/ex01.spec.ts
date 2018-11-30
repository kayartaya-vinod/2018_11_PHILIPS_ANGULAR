import { AppComponent } from "../app.component";
import { ContactsComponent } from '../components/contacts/contacts.component';
import { ContactsService } from '../services/contacts.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

// test suite
xdescribe('Testing if "tests" work....', () => {

    let comp: ContactsComponent;
    let compFixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [ContactsComponent],
            providers: [ContactsService]
        });
        compFixture = TestBed.createComponent(ContactsComponent);
        compFixture.detectChanges();
        comp = compFixture.componentInstance;
        // comp.ngOnInit();
    });

    it('should instantiate ContactsCompnent', () => {
        expect(comp).toBeDefined();
        expect(comp['service']).toBeDefined();
        expect(comp['service']['getContactById']).toBeDefined();
    });

    it('should check ContactsComponet\'s model value', () => {
        let c = comp.contact;
        expect(c).toBeDefined();
        expect(c['name']).toEqual('Vinod');
        expect(c['email']).toEqual('vinod@vinod.co');
        expect(c['city']).toEqual('Bangalore');
    });

    xit('should check value of contact1 in ContactsComponent', async () => {
        let c = comp.contact1;
        expect(c).toBeDefined();
        expect(c['name']).toEqual('Vinod');
        expect(c['email']).toEqual('vinod@vinod.co');
        expect(c['city']).toEqual('Bangalore');
    });

    xit('should get value from rest endpoint', () => {
        let c = comp.contact2;
        expect(c).toBeDefined();
        expect(c['name']).toEqual('Ab Featherston');
        expect(c['email']).toEqual('afeatherstonb@odnoklassniki.ru');
        expect(c['city']).toEqual('Kokologo');
    });

    // test spec (test case)
    xit('should check if value of n is 100', () => {
        let n = 100;

        // a spec must contain one or more assertions (matchers)
        expect(n).toEqual(100)

    });

    it('should check the title of AppComponent', () => {
        const comp = new AppComponent();
        expect(comp).toBeDefined();
        expect(comp.title).toBeDefined();
        expect(comp.title).toBe('Hello Angular');
    });

});