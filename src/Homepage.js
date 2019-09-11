import React, { Component } from 'react';
import Navbar from "./Navbar";
import './index.css'
import banner from "./Pics/Banner.jpg";
import Clip from './Clip';
import { translate, Trans, withTranslation } from "react-i18next";
import Video from './Video';
import i18n from './i18n';
import facebook from './Pics/facebook.png';
import email from './Pics/email.png';
import linked from './Pics/linked.png';
import phone from './Pics/phone.png';
import pinterest from './Pics/pinterest.png';
import twitter from './Pics/twitter.png';
import website from './Pics/website.png'
import youtube from './Pics/youtube.png'



const options = [
  { value: 'en', label: 'english' },
  { value: 'jap', label: 'japanese' },
  { value: 'hin', label: 'hindi' },
  { value: 'ger', label: 'germany' },
  { value: 'fre', label: 'french' },
];

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      clickCheck: false,
      clicked: [
        false,
        false,
        false,
        false,
      ],

      value: "en"
    }
  }

resize() {
    this.setState({hideNav: window.innerWidth <= 760});
    console.log("the window is",window.innerWidth, window.innerHeight );
}
  componentDidMount() {
    this.props.i18n.changeLanguage(this.state.value);
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  handleClickCheck = () => {
    const clicked = [false, false, false, false];
    this.setState({
      clicked: false
    })

  }
  handleClick = clickedId => {
    // console.log("hiii", this)
    const clicked = [false, false, false, false];
    clicked[clickedId] = true;
    this.setState({
      clicked,
    })
  }
  handleLangChange = (e) => {
    // console.log("=====", e)
    // this.setState({ value: e }, () => {
    this.props.i18n.changeLanguage(e);
    // }
    // );

  }
  render() {
    const { clicked } = this.state
    const { t, i18n } = this.props;
    // console.log("from render of areeeeee this.props is", this.props)
    return (
      // <I18nextProvider i18n={i18n}>

      <div className="parent" onClick={() => { this.handleClickCheck() }}>
        <div className="sub-parent">
          <div className="child1">
            <Navbar
              options={options}
              handleLangChange={this.handleLangChange}
            />
          </div>
          <div className="child2">
            <img src={banner} alt={"banner"} />
          </div>
        </div>
        <div className="child3">
          <div> Popular Items</div>
          <div className="btn2"><button >View all Items</button></div>
        </div>

        <div className="clip-container">
          <Clip handleClick={() => this.handleClick(0)} clicked={clicked[0]} />
          <Clip handleClick={() => this.handleClick(1)} clicked={clicked[1]} />
          <Clip handleClick={() => this.handleClick(2)} clicked={clicked[2]} />
          <Clip handleClick={() => this.handleClick(3)} clicked={clicked[3]} />
        </div>
        <div className="video-container">
          <div className="child3">
            <div>Latest Videos </div>
            <div className="btn2"><button >View More Videos</button></div>
          </div>
          <div className="video">
            <div className="dsktp-vid"><Video videoId="" /></div>
            <div className="dsktp-vid"><Video videoId="" /></div>
          </div>
        </div>
        <div className="info">
          <div className="info1">
            <div>LOGO</div>
            <div>
              <img src={phone} />
              <span className="sp">1234567899</span>
                </div>
            <div><img src={email} className="img1"/><span className="sp">abc@gmail.com</span></div>
            <div><img src={website} className="img1" /><span className="sp">Website.com</span></div>
          </div>
          <div className="info2">
            <div>Company</div>
            <div>About Us</div>
            <div>Contact</div>
            <div>Join Us</div>
            <div>Become Our Content Partner</div>
          </div>
          <div className="info3">
            <div>Links</div>
            <div>Courses</div>
            <div>Blog/News</div>
          </div>
          <div className="info4">
            <div>Others</div>
            <div>Terms and Conditions</div>
            <div>SiteMap</div>
          </div>
          <div className="info5">
            <div className="mk">
              <div className="mk1">Connect with us</div>
              <div className="logos">
                <div><img src={facebook} /></div>
                <div><img src={twitter} /></div>
                <div><img src={pinterest} /></div>
                <div><img src={linked} /></div>
                <div><img src={youtube} /></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default (withTranslation("translations")(Homepage));
