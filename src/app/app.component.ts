import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  onClick(): void {
    console.log('button click');
  }
}

/*
原本的目的是要重現工作上遇到ngFor內產生的div無法trigger click事件
如下面連結談的應該re-ren der加上在template call function有關
但目前的範例component組成不複雜無法重現結果
https://stackoverflow.com/questions/71011494/angular-8-click-event-not-firing-inside-ngfor-when-iterating-over-object-array

所以就用這個範例來研究一下為什麼在template內call function不好
結論是change detect會導致function 每一次都會被call
參考資料
https://blog.kevinyang.net/2020/02/14/angular-dont-use-function-in-template-expression/

https://medium.com/showpad-engineering/why-you-should-never-use-function-calls-in-angular-template-expressions-e1a50f9c0496
*/