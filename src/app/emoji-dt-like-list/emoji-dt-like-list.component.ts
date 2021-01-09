import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { emoji, emojiLike, emojiDtLike } from '../emoji-list/data';

@Component({
  selector: 'app-emoji-dt-like-list',
  templateUrl: './emoji-dt-like-list.component.html',
  styleUrls: ['./emoji-dt-like-list.component.css']
})
export class EmojiDtLikeListComponent implements AfterViewInit {

  emoji = emoji;
  emojiLike = emojiLike;
  emojiDtLike = emojiDtLike;

  displayedColumns: string[] = ['name', 'Url', 'Prew', 'Action1'];
  
  dataSource = new MatTableDataSource(emojiDtLike);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatTable) table: MatTable<any>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  objectState(i){
    //console.log(emoji[i].LikeState);
    return emoji[i].LikeState;
  }

  addToFavorite (ind,row){

    console.log(ind);

    const index1 = this.emoji.indexOf(row, 0);

    console.log(index1);

    const index= ind;
    
    if (this.emoji[index].LikeState=='none') {
      //this.icon = 'favorite';
      this.emoji[index].LikeState='like';
      emojiLike.push(this.emoji[index]);
    } 

    else {
      //this.icon = 'favorite_border'
      this.emoji[index].LikeState='none';
      console.log(emojiLike.indexOf(emoji[index]));
      const indl = emojiLike.indexOf(emoji[index]);
      emojiLike.splice(indl,1);
    }
  
    //console.log(emoji[index].LikeState);
    //console.log(emojiLike)

  }

  deleteItem(row){

    const index = this.emojiDtLike.indexOf(row);
    
    console.log(row);
    console.log(index);
    console.log(this.emojiDtLike[index].id);
    this.emoji.splice(this.emojiDtLike[index].id, 0, this.emojiDtLike[index]);
    this.emojiDtLike.splice(index,1);
    this.table.renderRows();
  }
}
