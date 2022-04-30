import React from 'react';
import Menu from '../menus/menu';
import { Document, Page } from 'react-pdf';

function Resume() {
    return (
        <React.Fragment>
            <Menu></Menu>
            <div>
                <div>MY SUMMARY</div>
                <div>Currently living in Boise, Idaho I am experienced digital designer and iOS developer producing digital content, creating
    websites using React, HTML, CSS and wordpress, as well as designing and developing iOS applications for the App Store in
    native swift. Transitioning from designer to developer has given me a unique insight at the intersection of design and
    development, being a fan of Apple I believe that both must work together correctly to make a truly special product.</div>

            </div>

            
            <div>
            <div>WORK EXPERIENCE</div>
            <div>FREELANCE iOS APP DESIGNER & DEVELOPER</div>
            <div>Crypto Stand Released in January 2022, Crypto Stand is a game simulation where users start with a set amount of game
money, trading coins to try and become the best crypto trader. This app uses a MVVM design pattern, taking advantage of
Swift’s Combine and CoreData frameworks. API calls are made to CoinGecko to update crypto coin pricing and information.
Custom Animations: Custom animations to improve user UI experience
Combine: Custom publishers and subscribers to populate data from API</div>
            </div>
            
            <Document file="adam_resume.pdf">
                <Page pageNumber={1} />
            </Document>
        </React.Fragment>
        
    )
 }

 export default Resume;