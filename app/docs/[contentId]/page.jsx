import ContentDisplay from '@/components/ContentDisplay';
import React from 'react';

const Content = ({params:{contentId}}) => {
    return (
        <div>
        <ContentDisplay id={contentId}></ContentDisplay>
        </div>
    );
};

export default Content;