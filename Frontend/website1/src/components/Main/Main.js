import React, { Component } from 'react'
import Main_style from "./Main.scss";
var slideIndex = 1;
class Main extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }   
      showSlides=(n)=> {
        var i;
        // var slides = document.getElementsByClassName("my-slide");
        // let slides = document.getElementsByClassName("my-slide");
        var dots = document.getElementsByClassName("dot");
        // console.log(slides);
        // console.log(slides.length);
        document.getElementsByClassName('my-slide')[0].style.display = 'block';
        // document.getElementsByClassName('my-slide')[0].style.setProperty("display", "block")
        //  if (n > slides.length) {slideIndex = 1} ;   
        //  if (n < 1) {slideIndex = slides.length};
        //  for (i = 0; i < slides.length; i++) {   
        //      slides[i].style.display = "none";  
        //    }
        //    for (i = 0; i < dots.length; i++) {
        //       dots[i].className = dots[i].className.replace(" active", "");
        //   }
        //    slides[slideIndex-1].style.display = "block";
        //    dots[slideIndex-1].className += " active";
      }
    //   plusSlides = (n) => {
    //     this.showSlides(slideIndex += n);
    //   }
    //   currentSlide = (n) => {
    //     this.showSlides(slideIndex = n);
    //   }
    render() {
    this.showSlides(slideIndex);
        return (
            <div className="main-content">
                <div className="slide-show1 container-fluid">  
                    <div className="my-slide">
                        <div className="numbertext">1/3</div>
                        <img src="https://www.the-ascott.com/content/dam/tal/media/images/homepage-banner/homepage-banner/2ascott_always_our_best_banner_1902x782.jpg.transform/ascott-highres/image.jpg" width="100%" />
                        <div class="text">caption text</div>
                    </div>
                    {/* <div className="my-slide">
                        <div className="numbertext">2/3</div>
                        <img src="https://www.the-ascott.com/content/dam/tal/media/images/campaigns/work-in-residence/work-in-residence-homepage-2.jpg.transform/ascott-highres/image.jpg" width="100%" />
                        <div class="text">caption text</div>
                    </div>
                    <div className="my-slide">
                        <div className="numbertext">3/3</div>
                        <img src="https://www.the-ascott.com/content/dam/tal/media/images/brands/The-Ascott/Ascott-Cares/1920x782_v3.png.transform/ascott-highres/image.png" width="100%" />
                        <div class="text">caption text</div>
                    </div> */}
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
                <div className="dot-button-group">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                </div>
            </div>
        )
    }
}
export default Main;