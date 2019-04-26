/* eslint-disable react/destructuring-assignment,class-methods-use-this */

import React from 'react';
// import { SocialIcon } from 'react-social-icons';
import {
  FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon,
  LinkedinShareButton, LinkedinIcon,
} from 'react-share';

const Icon = () => (
  <div className="icons">
    <div className="email" title="Email article" href="#">
      <EmailShareButton className="email-button" url="127.0.0.1:3000/article">
        <EmailIcon className="email-icon" size={34} round />
      </EmailShareButton>
    </div>
    <div className="facebook" title="Share on Facebook" href="#">
      <FacebookShareButton className="facebook-button" quote="Test article" url="127.0.0.1:3000/article">
        <FacebookIcon className="facebook-icon" size={34} round />
      </FacebookShareButton>
    </div>
    <div className="twitter" title="Share on Twitter" href="#">
      <TwitterShareButton className="twitter-button" url="http://127.0.0.1:3000/article">
        <TwitterIcon className="twitter-icon" size={34} round />
      </TwitterShareButton>
    </div>
    <div className="linkedin" title="Share on Linkedin" href="#">
      <LinkedinShareButton className="linkedin-button" url="http://127.0.0.1:3000/article">
        <LinkedinIcon className="linkedin-icon" size={34} round />
      </LinkedinShareButton>
    </div>
  </div>
);

export default Icon;
