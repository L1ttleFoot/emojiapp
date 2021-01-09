import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiLikeListComponent } from './emoji-like-list.component';

describe('EmojiLikeListComponent', () => {
  let component: EmojiLikeListComponent;
  let fixture: ComponentFixture<EmojiLikeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiLikeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiLikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
