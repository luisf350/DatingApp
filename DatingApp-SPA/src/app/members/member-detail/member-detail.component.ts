import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { ActivatedRoute } from "@angular/router";
import { User } from '../../models/user';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: "app-member-detail",
  templateUrl: "./member-detail.component.html",
  styleUrls: ["./member-detail.component.scss"],
})
export class MemberDetailComponent implements OnInit {
  user: User;
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        this.user = data["user"];
      });
      // this.galleryOptions = [
      //   {
      //     width: "500px",
      //     height: "500px",
      //     imagePercent: 100,
      //     thumbnailsColumns: 4,
      //     imageAnimation: NgxGalleryAnimation.Slide,
      //     preview: false
      //   }
      // ];
      // this.galleryImages = this.getImages();
  }

  getImages() {
    const imagesUrl = [];
    this.user.photos.forEach(photo => {
      imagesUrl.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    });
    return imagesUrl;
  }
}
