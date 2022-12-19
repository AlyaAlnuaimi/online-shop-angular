import { AfterViewInit, Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-shopdetails',
  templateUrl: './shopdetails.component.html',
  styleUrls: ['./shopdetails.component.css']
})
export class ShopdetailsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
        // Related carousel
        $('.related-carousel').owlCarousel({
          loop: true,
          margin: 29,
          nav: false,
          autoplay: true,
          smartSpeed: 1000,
          responsive: {
              0:{
                  items:1
              },
              576:{
                  items:2
              },
              768:{
                  items:3
              },
              992:{
                  items:4
              }
          }
      });
  }

}
