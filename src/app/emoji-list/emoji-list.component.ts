import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { emoji, emojiLike, emojiDtLike } from './data';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-emoji-list',
  templateUrl: './emoji-list.component.html',
  styleUrls: ['./emoji-list.component.css']
})

export class EmojiListComponent implements AfterViewInit  {

  emoji = emoji;
  emojiLike = emojiLike;
  emojiDtLike = emojiDtLike;

  displayedColumns: string[] = ['name', 'Url', 'Prew', 'Action1', 'Action2'];
  
  dataSource = new MatTableDataSource(emoji);
  
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
    return this.emoji[i].LikeState;
  }

  addToFavorite (ind){
    /*
    console.log(ind);
    console.log(emoji[ind]);
    console.log(emoji[ind].id);

    //const index1 = this.emoji.indexOf(row, 0);

    //console.log(index1);

    //const index = emoji[ind].id;
    */

    const index = ind;

    if (this.emoji[index].LikeState=='none') {
      this.emoji[index].LikeState='like';
      emojiLike.push(this.emoji[index]);
    }

    else {
      this.emoji[index].LikeState='none';
      //console.log(emojiLike.indexOf(emoji[index]));
      const indl = emojiLike.indexOf(emoji[index]);
      emojiLike.splice(indl,1);
    }
    //console.log(emoji[ind]);
    //console.log(emoji[index].LikeState);
    //console.log(emojiLike)
  }

  deleteItem(row) {
    
    const index = this.emoji.indexOf(row);
    emojiDtLike.push(this.emoji[index]);
  
    this.emoji[index].LikeState='none';
  
    const indl = emojiLike.indexOf(emoji[index]);

    //console.log(emojiLike[indl])

    emojiLike.splice(indl,1);

    if (index > -1) {
      emoji.splice(index, 1);
    }
    
    this.table.renderRows();
  }

}