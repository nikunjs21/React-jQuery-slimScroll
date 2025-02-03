# What is React-slimScroll?

slimScroll is a small jQuery plugin that transforms any div into a scrollable area with a nice scrollbar - similar to the one Facebook and Google started using in their products recently. slimScroll doesn't occupy any visual space as it only appears on a user initiated mouse-over. User can drag the scrollbar or use mouse-wheel to change the scroll value.

This library is made for React.js. It can be used by adding jQuery during initialization.

## Usage Example

You can check the usage in `MessageDiv.jsx`:

```jsx
import $ from "jquery";
import SlimScroll from "react-jquery-slimscroll";
import React, { useEffect } from 'react';
import styled from 'styled-components';

SlimScroll($);

const ScrollableDiv = styled.div`
    font-size: 12px;
    resize: vertical;
    overflow: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1rem;
    height: 150px;
`;

const MessageDiv = ({ html }) => {
    useEffect(() => {
        $(".scrollable-div").slimScroll();
        return () => {
            $(".scrollable-div").slimScroll({ destroy: true });
        }
    });
    return (
        <ScrollableDiv className="scrollable-div" dangerouslySetInnerHTML={{ __html: html }} />
    )
}

export default MessageDiv;
```

Copyright (c) 2011 Piotr Rochala (http://rocha.la)
Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.