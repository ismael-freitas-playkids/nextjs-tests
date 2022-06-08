import React from 'react';

const StyledLink = React.forwardRef(({ onClick, href, children }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} style={{ color: 'red' }}>
            {children}
        </a>
    );
});

StyledLink.displayName = "StyledLink";

export default StyledLink;