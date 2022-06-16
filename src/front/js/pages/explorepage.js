import React from 'react';
import "../../styles/explore.css";
import { Navbar } from '../component/navbar';
import { ExploreComponent } from './explorecomponent';

export const Explore = () => {
    return (
        <>
            <Navbar />
            <ExploreComponent />
        </>
    );
};