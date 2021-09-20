import React from 'react';
import styled from 'styled-components';
import SiteWidthWrapper from './siteWidthWrapper';

const PageFooter = styled.footer`
    background: var(--accent-color);
    margin-top: 4rem;
    padding: 2rem 0;
`;

const Footer = () => (
    <PageFooter>
        <SiteWidthWrapper>
            <h4>Footer</h4>
        </SiteWidthWrapper>
    </PageFooter>
);

export default Footer;
