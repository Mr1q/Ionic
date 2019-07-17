import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public lists:any=[];
  constructor() { }

  ngOnInit() {
    for(let i=0;i<10;i++)
    {
      this.lists.push('这是第'+i+'数据');
    }
  }
 
}
