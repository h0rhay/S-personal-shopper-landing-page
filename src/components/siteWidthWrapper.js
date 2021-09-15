import React from 'react';
import styled from 'styled-components';

const SiteWidthContainer = styled.div`
    margin: 0 auto;
    max-width: 90vw;
    width: 78.5rem;
`

const SiteWidthWrapper = ({ children }) => (
    <SiteWidthContainer className='site_width_wrap'>
        {children}
    </SiteWidthContainer>
)

export default SiteWidthWrapper