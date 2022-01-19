import React from 'react';

import html from '../../svg/html.svg';
import css3 from '../../svg/css3.svg';
import javascript from '../../svg/javascript.svg';
import typescript from '../../svg/typescript.svg';
import vue from '../../svg/vue.svg';
import nuxt from '../../svg/nuxt.svg';
import react from '../../svg/react.svg';
import next from '../../svg/next.svg';
import expo from '../../svg/expo.svg';
import laravel from '../../svg/laravel.svg';
import git from '../../svg/git.svg';
import gulp from '../../svg/gulp.svg';
import webpack from '../../svg/webpack.svg';

const AppSkills = () => {
    return (
        <div className='skill-items'>
            <div className='skill-item'>
                <img src={html} alt="html"/>
                <span>HTML</span>
            </div>
            <div className='skill-item'>
                <img src={css3} alt="css3"/>
                <span>CSS</span>
            </div>
            <div className='skill-item'>
                <img src={javascript} alt="javascript"/>
                <span>javascript</span>
            </div>
            <div className='skill-item'>
                <img src={typescript} alt="html"/>
                <span>typescript</span>
            </div>

            <div className='skill-item'>
                <img src={vue} alt="html"/>
                <span>vue</span>
            </div>
            <div className='skill-item'>
                <img src={nuxt} alt="html"/>
                <span>nuxt</span>
            </div>
            <div className='skill-item'>
                <img src={react} alt="html"/>
                <span>react</span>
            </div>
            <div className='skill-item'>
                <img src={next} alt="html"/>
                <span>next</span>
            </div>
            <div className='skill-item'>
                <img src={expo} alt="html"/>
                <span>expo</span>
            </div>
            <div className='skill-item'>
                <img src={laravel} alt="html"/>
                <span>laravel</span>
            </div>
            <div className='skill-item'>
                <img src={git} alt="html"/>
                <span>git</span>
            </div>
            <div className='skill-item'>
                <img src={gulp} alt="html"/>
                <span>gulp</span>
            </div>
            <div className='skill-item'>
                <img src={webpack} alt="html"/>
                <span>webpack</span>
            </div>
        </div>
    );
};

export default AppSkills;