import React from 'react';
import {
  FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon,
  LinkedinShareButton, LinkedinIcon,
} from 'react-share';

/*
 * Component rendering social media icons rendered on the read article page
 */
const Icon = () => (
  <div className="icons">
    // icon for sending an article via email
    <div className="email" title="Email article" href="#">
      <EmailShareButton className="email-button" url="127.0.0.1:3000/article">
        <EmailIcon className="email-icon" size={34} round />
      </EmailShareButton>
    </div>
    // icon for sharing an article on Facebook
    <div className="facebook" title="Share on Facebook" href="#">
      <FacebookShareButton className="facebook-button" quote="Test article" url="127.0.0.1:3000/article">
        <FacebookIcon className="facebook-icon" size={34} round />
      </FacebookShareButton>
    </div>
    // icon for sharing an article on Twitter
    <div className="twitter" title="Share on Twitter" href="#">
      <TwitterShareButton className="twitter-button" url="http://127.0.0.1:3000/article">
        <TwitterIcon className="twitter-icon" size={34} round />
      </TwitterShareButton>
    </div>
    // icon for sharing an article on Linkedin
    <div className="linkedin" title="Share on Linkedin" href="#">
      <LinkedinShareButton className="linkedin-button" url="http://127.0.0.1:3000/article">
        <LinkedinIcon className="linkedin-icon" size={34} round />
      </LinkedinShareButton>
    </div>
  </div>
);

export default Icon;
