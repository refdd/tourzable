import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
} from "next-share";
function ShareBlog({ blogSlug }) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center space-x-4">
          <span className="font-medium text-[16px] text-[#051036] font-sans capitalize">
            Share
          </span>
          <ul className="flex items-center space-x-5">
            <li className="text-2xl text-mainColor">
              <FacebookShareButton
                quote={
                  "next-share is a social share buttons for your next React apps."
                }
                hashtag={"#nextshare"}
                title={
                  "next-share is a social share buttons for your next React apps."
                }
                url={`https://www.nilecruisez.com/blog/${blogSlug}`}
              >
                <FaFacebook className="text-[#3b5998]" />
              </FacebookShareButton>
            </li>
            <li className="text-2xl text-mainColor">
              <FacebookShareButton
                url={`https://www.nilecruisez.com/blog/${blogSlug}`}
              >
                <FaTwitter className="text-[#1DA1F2]" />
              </FacebookShareButton>
            </li>
            <li className="text-2xl text-mainColor">
              <PinterestShareButton
                url={`https://www.nilecruisez.com/blog/${blogSlug}`}
              >
                <FaPinterest className="text-[#c8232c]" />
              </PinterestShareButton>
            </li>
            <li className="text-2xl text-mainColor">
              <LinkedinShareButton
                url={`https://www.nilecruisez.com/blog/${blogSlug}`}
              >
                <FaLinkedin className="text-[#0072b1]" />
              </LinkedinShareButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShareBlog;
