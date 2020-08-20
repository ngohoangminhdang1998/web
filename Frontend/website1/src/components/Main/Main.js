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
            index: this.state.index === lengthIamge ? lengthIamge : this.state.index + 1
        })
    }

    prev = () => {

        this.setState({
            index: this.state.index === 0 ? 0 : this.state.index - 1
        })
    }
    dot = (index) => {
        this.setState({
            index: index
        })
    }

    render() {

        return (
            <div className="main-content">
                <div className="slide-show1 container-fluid">
                    <div className="my-slide">
                        <div className="numbertext">1/3</div>
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
