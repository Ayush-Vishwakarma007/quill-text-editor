import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillTextComponent } from './quill-text.component';

describe('QuillTextComponent', () => {
  let component: QuillTextComponent;
  let fixture: ComponentFixture<QuillTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuillTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuillTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
