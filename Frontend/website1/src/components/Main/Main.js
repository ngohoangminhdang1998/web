// import React, { Component } from 'react'
// import Main_style from "./Main.scss";
// var slideIndex = 1;
// class Main extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }
//     showSlides = (n) => {
//         var i;
//          var slides = document.getElementsByClassName("my-slide");
//          var dots = document.getElementsByClassName("dot");
//          console.log(slides);
//          console.log(slides.length);
//         // document.getElementsByClassName('my-slide')[0].style.setProperty("display", "block")
//         //   document.getElementsByClassName('my-slide')[0].style.display = 'block';

//          if (n > slides.length) {slideIndex = 1} ;   
//          if (n < 1) {slideIndex = slides.length};
//          for (i = 0; i < slides.length; i++) {   
//             //  slides[i].style.display = "none";  
//            }
//            for (i = 0; i < dots.length; i++) {
//               dots[i].className = dots[i].className.replace(" active", "");
//           }
//         //   slides[slideIndex-1].style.display = "block";
//         //    dots[slideIndex-1].className += " active";
//     }
//       plusSlides = (n) => {
//         this.showSlides(slideIndex += n);
//       }
//       currentSlide = (n) => {
//         this.showSlides(slideIndex = n);
//       }
//     render() {
//         this.showSlides(slideIndex);
//         return (
//             <div className="main-content">
//                 <div className="slide-show1 container-fluid">
//                     <div className="my-slide">
//                         <div className="numbertext">1/3</div>
//                         <img src="https://www.the-ascott.com/content/dam/tal/media/images/homepage-banner/homepage-banner/2ascott_always_our_best_banner_1902x782.jpg.transform/ascott-highres/image.jpg" width="100%" />
//                         <div class="text">caption text</div>
//                     </div>
//                      <div className="my-slide">
//                         <div className="numbertext">2/3</div>
//                         <img src="https://www.the-ascott.com/content/dam/tal/media/images/campaigns/work-in-residence/work-in-residence-homepage-2.jpg.transform/ascott-highres/image.jpg" width="100%" />
//                         <div class="text">caption text</div>
//                     </div>
//                     <div className="my-slide">
//                         <div className="numbertext">3/3</div>
//                         <img src="https://www.the-ascott.com/content/dam/tal/media/images/brands/The-Ascott/Ascott-Cares/1920x782_v3.png.transform/ascott-highres/image.png" width="100%" />
//                         <div class="text">caption text</div>
//                     </div> 
//                     <a class="prev" onclick={()=>this.plusSlides(-1)}>&#10094;</a>
//                     <a class="next" onclick={()=>this.plusSlides(1)}>&#10095;</a>
//                 </div>
//                 <div className="dot-button-group">
//                     <span class="dot" onclick={()=>this.currentSlide(1)}></span>
//                     <span class="dot" onclick={()=>this.currentSlide(2)}></span>
//                     <span class="dot" onclick={()=>this.currentSlide(3)}></span>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Main;







//cach 1
// import React, { Component } from 'react'

// export default class Main extends Component {
//   render() {
//     return (
//       <div>
//         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//           <ol className="carousel-indicators">
//             <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
//             <li data-target="#carouselExampleIndicators" data-slide-to={1} />
//             <li data-target="#carouselExampleIndicators" data-slide-to={2} />
//           </ol>
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img className="d-block w-100" src="https://www.the-ascott.com/content/dam/tal/media/ascott-star-rewards-2018/buypoints/1902x782.jpg.transform/ascott-highres/image.jpg" alt="First slide" />
//               <div class="carousel-caption d-none d-md-block">
//                 <h5>...</h5>
//                 <p>...</p>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <img className="d-block w-100" src="https://www.the-ascott.com/content/dam/tal/media/images/campaigns/work-in-residence/work-in-residence-homepage-2.jpg.transform/ascott-highres/image.jpg" alt="Second slide" />

//               <div class="carousel-caption d-none d-md-block">
//                 <h5>...</h5>
//                 <p>...</p>
//               </div></div>
//             <div className="carousel-item">
//               <img className="d-block w-100" src="https://www.the-ascott.com/content/dam/tal/media/images/brands/The-Ascott/Ascott-Cares/1920x782_v3.png.transform/ascott-highres/image.png" alt="Third slide" />
//               <div class="carousel-caption d-none d-md-block">
//                 <h5>...</h5>
//                 <p>...</p>
//               </div>
//             </div>
//           </div>
//           <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true" />
//             <span className="sr-only">Previous</span>
//           </a>
//           <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true" />
//             <span className="sr-only">Next</span>
//           </a>
//         </div>
//       </div>
//     )
//   }
// }





// cach 2
import React, { Component } from 'react'
import "./Main.scss";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            mang: [
                {
                    image: 'https://www.the-ascott.com/content/dam/tal/media/images/homepage-banner/homepage-banner/2ascott_always_our_best_banner_1902x782.jpg.transform/ascott-highres/image.jpg'
                },
                {
                    image: 'https://www.the-ascott.com/content/dam/tal/media/images/campaigns/work-in-residence/work-in-residence-homepage-2.jpg.transform/ascott-highres/image.jpg'
                },
                {
                    image: 'https://www.the-ascott.com/content/dam/tal/media/images/brands/The-Ascott/Ascott-Cares/1920x782_v3.png.transform/ascott-highres/image.png'
                }
            ]
        }
    }
    next = () => {
        var lengthIamge = this.state.mang.length - 1;
        console.log('lengthIamge', lengthIamge)
        this.setState({
            index: this.state.index === lengthIamge ? 0 : this.state.index + 1
        })
    }

    prev = () => {
      var lengthIamge = this.state.mang.length - 1;
        this.setState({
            index: this.state.index === 0 ? lengthIamge : this.state.index - 1
        })
    }

    dot = (index) => {
        this.setState({
            index: index
        })
    }

    showImageBySetInterval = () =>{
        var lengthIamge = this.state.mang.length - 1;
      setInterval(() => {
        this.setState({
          index : this.state.index === lengthIamge ? 0 : this.state.index + 1
        })

      }, 5000);
      
    }

    render() {

        return (
            <div className="main-content">
                <div className="slide-show1 container-fluid">
                    <div className="my-slide">
                        <div className="numbertext">1/3</div>
                        {this.showImageBySetInterval()}
                         <img src={this.state.mang[this.state.index].image} width="100%" />
                        
                        <div className="text">caption text</div>
                    </div>
                    <a className="prev" onClick={() => { this.prev() }}>&#10094;</a>
                    <a className="next" onClick={() => { this.next() }}>&#10095;</a>
                </div>
                <div className="dot-button-group">
                    {
                        this.state.mang.map((mang, index) => {
                            return (
                                <span className="dot" onClick={() => { this.dot(index) }}></span>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default Main;
