import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiDtLikeListComponent } from './emoji-dt-like-list.component';

describe('EmojiDtLikeListComponent', () => {
  let component: EmojiDtLikeListComponent;
  let fixture: ComponentFixture<EmojiDtLikeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiDtLikeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiDtLikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
