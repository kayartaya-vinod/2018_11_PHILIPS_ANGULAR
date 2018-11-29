import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'nested-forms',
  templateUrl: './nested-forms.component.html',
  styleUrls: ['./nested-forms.component.css']
})
export class NestedFormsComponent implements OnInit {

  employee: FormGroup;
  skills = this.fb.array([this.addSkillControl()]);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employee = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      skills: this.skills
    });
  }

  addSkillControl() {
    return new FormControl('', [Validators.required]);
  }

  addSkill() {
    this.skills.push(this.addSkillControl());
  }
  showData() {
    console.log(this.employee)
  }
}
