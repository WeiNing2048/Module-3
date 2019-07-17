import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-place",
  templateUrl: "./place.page.html",
  styleUrls: ["./place.page.scss"]
})
export class PlacePage implements OnInit {
  places = [
    {
      id: 1,
      name: "Legoland",
      stars: 3,
      description:
        "Themed rooms in a colourful lodging with 2 restaurants, an outdoor pool & kids' play areas.",
      logo: "assets/Legoland-Malaysia.jpg"
    },

    {
      id: 2,
      name: "Sanrio Hello Kitty Town",
      rating: "",
      description:
        "Hello Kitty amusement park with a playground, a Kitty House, craft activities & live entertainment",
      logo: "assets/hello-kitty-land.jpg"
    },

    {
      id: 3,
      name: "The Old Temple Of Johor Bahru",
      rating: "",
      description: "Vibrant temple built in the 19th century",
      logo: "assets/Old-Temple.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
