import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmojiListComponent } from './emoji-list/emoji-list.component';
import { EmojiLikeListComponent } from './emoji-like-list/emoji-like-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmojiDtLikeListComponent } from './emoji-dt-like-list/emoji-dt-like-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmojiListComponent,
    EmojiLikeListComponent,
    EmojiDtLikeListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }