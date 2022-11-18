import React, { useState, useEffect } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import styled from 'styled-components';
import ShareBadge from '../ShareBadge';
import Modal from '../Modal';
import CopyIconSVG from '../../images/copy_icon.svg';
import CopiedIconSVG from '../../images/tick_icon.svg';

const SocialNetworkingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SocialNetworkingButtonWrapper = styled.div`
  margin: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  span {
    color: #212121;
    font-size: 0.7rem;
  }
`;

const CopyIcon = styled(CopyIconSVG)`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
`;

const CopiedIcon = styled(CopiedIconSVG)`
  height: 3.2rem;
  width: 3.2rem;
`;

const CopyUrlbutton = styled.button`
  background: transparent;
  border: none;
`;

const ShareHeader = styled.h3`
  color: #212121;
  text-align: center;
  margin-top: 2rem;
  letter-spacing: 2px;
`;

const Share = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (copyStatus) setCopyStatus(false);
    }, 5000);
  }, [copyStatus]);

  const shareDetails = {
    title: 'Selfridges Personal Shopper',
    subject: 'Personal shopping at Selfridges',
    body: 'Check out my favourite Selfridges pieces!',
    url: document.location.href,
    hashtag: ['personalshopping', 'selfridges'],
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareDetails.url);
    setCopyStatus(true);
  };

  const openSharePopup = () => {
    if (navigator.share) {
      navigator
        .share({
          title: shareDetails.title,
          text: shareDetails.body,
          url: shareDetails.url,
        })
        .then(() => {})
        .catch(() => {});
    } else {
      setCopyStatus(false);
      setShowDialog(true);
    }
    return null;
  };

  const closePopup = () => setShowDialog(false);

  return (
    <div>
      <ShareBadge clickHandler={openSharePopup} />

      <Modal isOpen={showDialog} onDismiss={closePopup}>
        <ShareHeader>Share this page</ShareHeader>
        <SocialNetworkingWrapper>
          <SocialNetworkingButtonWrapper>
            <WhatsappShareButton
              title={shareDetails.title}
              url={shareDetails.url}
              summary={shareDetails.body}
              source={shareDetails.url}
            >
              <WhatsappIcon size={50} round />
            </WhatsappShareButton>
            <span>Whatsapp</span>
          </SocialNetworkingButtonWrapper>
          <SocialNetworkingButtonWrapper>
            <FacebookShareButton
              url={shareDetails.url}
              quote={shareDetails.subject}
              hashtag={`#${shareDetails.hashtag[0]}`}
              description={shareDetails.body}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>
            <span>Facebook</span>
          </SocialNetworkingButtonWrapper>
          <SocialNetworkingButtonWrapper>
            <TwitterShareButton title={shareDetails.body} url={shareDetails.url} hashtags={shareDetails.hashtag}>
              <TwitterIcon size={50} round />
            </TwitterShareButton>
            <span>Twitter</span>
          </SocialNetworkingButtonWrapper>
          <SocialNetworkingButtonWrapper>
            <LinkedinShareButton
              title={shareDetails.title}
              url={shareDetails.url}
              summary={shareDetails.body}
              source={shareDetails.url}
            >
              <LinkedinIcon size={50} round />
            </LinkedinShareButton>
            <span>Linkedin</span>
          </SocialNetworkingButtonWrapper>
          <SocialNetworkingButtonWrapper>
            <CopyUrlbutton data-testid="copy-link-button" onClick={copyToClipboard}>
              {copyStatus ? <CopiedIcon /> : <CopyIcon />}
            </CopyUrlbutton>
            <span>{copyStatus ? 'Link copied' : 'Copy link'}</span>
          </SocialNetworkingButtonWrapper>
        </SocialNetworkingWrapper>
      </Modal>
    </div>
  );
};

export default Share;
