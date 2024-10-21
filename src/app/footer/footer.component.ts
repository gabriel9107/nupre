
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer.component.html'
})
export class FooterComponet implements OnInit {

  public yearCopyright: number = new Date().getFullYear();


  ngOnInit(): void { 
  }


}

