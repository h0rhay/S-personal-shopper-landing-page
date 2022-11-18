import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import styled, { css } from 'styled-components';
import SiteWidthWrapper from '../SiteWidthWrapper';
import Button from '../Button';

const CookieBlock = styled.section`
  position: absolute;
  ${({ theme }) => css`
    @media ${theme.breakpoints.small} {
      position: fixed;
    }
  `}
  width: 100%;
  background: #ffe256;
  z-index: 999;
  bottom: 0;
  padding: 2rem 0;
  * {
    color: #212121;
  }
`;

const CookieHeadingWrap = styled(SiteWidthWrapper)`
  * {
    margin-bottom: 0.5rem;
  }
`;

const CookieWrap = styled(SiteWidthWrapper)`
  display: flex;
  align-items: center;
  .ck-info {
    width: 70%;
  }
  > div > div {
    margin-left: 1rem;
  }
  .mb-msg {
    display: none;
  }
  .dskt-msg {
    display: block;
  }
  a {
    font-family: 'DINNextLTPro-Medium';
    text-transform: none;
  }
  button {
    font-family: 'DINNextLTPro-Medium';
    text-transform: none;
    min-width: 10rem;
    background: #ffe256;
    outline-color: #212121;
    color: #212121;
    &:hover {
      background: #212121;
      outline-color: #ffe256;
      color: #ffe256;
    }
  }
  .accept {
    button {
      outline-color: transparent;
      background: #fff;
      &:hover {
        background: #212121;
        color: #fff;
      }
    }
  }
  ${({ theme }) => css`
    @media ${theme.breakpoints.small} {
      display: block;
      button {
        min-width: 100%;
      }
      p,
      a {
        font-size: 80%;
      }
      .ck-info {
        margin-bottom: 1rem;
        width: 100%;
      }
      .ck-btn {
        width: 50%;
        float: left;
        button {
          margin: 0 auto;
          display: block;
        }
      }
    } ;
  `};
`;

const isBrowser = () => typeof window !== 'undefined';

const getValue = (key, defaultValue) =>
  isBrowser() && window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : defaultValue;

const setValue = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const useStickyState = (defaultValue, key) => {
  const [value, setter] = useState(() => getValue(key, defaultValue));

  useEffect(() => {
    setValue(key, value);
  }, [key, value]);

  return [value, setter];
};

const CookieConsent = () => {
  const location = useLocation();
  if (isBrowser()) {
    initializeAndTrack(location);
  }

  const [bannerHidden, setBannerHidden] = useStickyState(false, 'consentCookieHidden');

  const enableAnalytics = () => {
    document.cookie = 'gatsby-gdpr-google-analytics=true';
    setBannerHidden(true);
  };

  const disableAnalytics = () => {
    setBannerHidden(true);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!bannerHidden && (
        <CookieBlock>
          <CookieHeadingWrap>
            <h3>Giving you the best experience</h3>
          </CookieHeadingWrap>
          <CookieWrap>
            <div className="ck-info">
              <p>
                We use cookies to personalize content and analyze our traffic. These cookies and similar technologies
                help to personalise content and analyse website performance. Learn exactly how we do this in our{' '}
                <a
                  href="https://www.selfridges.com/features/info/our-corporate-policies/privacy-cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie Policy
                </a>
              </p>
            </div>
            <div className="ck-btn">
              <Button onClick={disableAnalytics} type="button">
                No thanks
              </Button>
            </div>
            <div className="ck-btn accept">
              <Button onClick={enableAnalytics} type="button">
                Accept
              </Button>
            </div>
          </CookieWrap>
        </CookieBlock>
      )}
    </>
  );
};

export default CookieConsent;
