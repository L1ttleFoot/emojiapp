import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { emoji, emojiLike, emojiDtLike } from '../emoji-list/data';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-emoji-like-list',
  templateUrl: './emoji-like-list.component.html',
  styleUrls: ['./emoji-like-list.component.css']
})

export class EmojiLikeListComponent implements AfterViewInit {

  emoji = emoji;
  emojiLike = emojiLike;
  emojiDnLike = emojiDtLike;

  displayedColumns: string[] = ['name', 'Url', 'Prew', 'Action2'];
  
  dataSource = new MatTableDataSource(emojiLike);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatTable) table: MatTable<any>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  addToFavorite (ind){

    console.log(ind);
    const index= ind;

    if (this.emoji[index].LikeState=='none') {
      this.emoji[index].LikeState='like';
      emojiLike.push(this.emoji[index]);
    } 

    else {
      this.emoji[index].LikeState='none';
      console.log(emojiLike.indexOf(emoji[index]));
      const indl = emojiLike.indexOf(emoji[index]);
      emojiLike.splice(indl,1);
    }
  
    console.log(emoji[index].LikeState);
    console.log(emojiLike)
  }

  deleteItem(row){

    const index = this.emojiLike.indexOf(row, 0);
    this.emojiLike[index].LikeState='none';
    this.emoji[index].LikeState='none';
    this.emojiLike.splice(index,1);
    this.table.renderRows();
  }
}