import React from 'react';
import './Banner.css';

function Banner() {
        return(
                <div class="banner">
                    <div class="left">
                        <div class="top">
                            <div class="logo">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Emoji">
                                    <path id="circle" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="#945C16"/>
                                    <path id="circle_2" d="M18 32.5C26.0081 32.5 32.5 26.0081 32.5 18C32.5 9.99187 26.0081 3.5 18 3.5C9.99187 3.5 3.5 9.99187 3.5 18C3.5 26.0081 9.99187 32.5 18 32.5Z" fill="#E3B272"/>
                                    <path id="circle_3" d="M18 31C25.1797 31 31 25.1797 31 18C31 10.8203 25.1797 5 18 5C10.8203 5 5 10.8203 5 18C5 25.1797 10.8203 31 18 31Z" fill="#F5F8FA"/>
                                    <path id="star" d="M18 8L19.531 14.304L25.071 10.929L21.696 16.469L28 18L21.696 19.531L25.071 25.071L19.531 21.696L18 28L16.469 21.696L10.929 25.071L14.304 19.531L8 18L14.304 16.469L10.929 10.929L16.469 14.304L18 8Z" fill="#CCD6DD"/>
                                    <g id="arrow">
                                    <path id="sul" d="M17.343 20.748L26.12 26.129L20.741 17.351L17.343 20.748Z" fill="#292F33"/>
                                    <path id="norte" d="M18.657 15.267L9.879 9.886L15.259 18.665L18.657 15.267Z" fill="#DD2E44"/>
                                    </g>
                                    <path id="circle_4" d="M18 21.063C19.6872 21.063 21.055 19.6952 21.055 18.008C21.055 16.3208 19.6872 14.953 18 14.953C16.3128 14.953 14.945 16.3208 14.945 18.008C14.945 19.6952 16.3128 21.063 18 21.063Z" fill="#8899A6"/>
                                    <path id="circle_5" d="M18 19.656C18.9102 19.656 19.648 18.9182 19.648 18.008C19.648 17.0978 18.9102 16.36 18 16.36C17.0898 16.36 16.352 17.0978 16.352 18.008C16.352 18.9182 17.0898 19.656 18 19.656Z" fill="#F5F8FA"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="mid">
                            <h1>Viagens para você<br></br> e sua família!</h1>
                            <div class="emojis"></div>
                        </div>
                        <div class="bot">
                            <div class="box">
                                <div class="line1">
                                    <h1>Vamos lá!</h1>
                                    <a href="#">
                                        <svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.7814 12.3734C32.3672 11.7876 32.3672 10.8379 31.7814 10.2521L22.2355 0.706142C21.6497 0.120356 20.6999 0.120356 20.1141 0.706142C19.5284 1.29193 19.5284 2.24168 20.1141 2.82746L28.5994 11.3127L20.1141 19.798C19.5284 20.3838 19.5284 21.3336 20.1141 21.9193C20.6999 22.5051 21.6497 22.5051 22.2355 21.9193L31.7814 12.3734ZM0.122559 12.8127H30.7207V9.81274H0.122559V12.8127Z" fill="#945C16"/>
                                        </svg>                                    
                                    </a>

                                </div>
                                <div class="line2">
                                    <p>Escolha a melhor passagem para o seu bolso, e desfrute de inúmeros lugares.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="menu">
                            <svg width="36" height="26" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="17.5" x2="32" y2="17.5" stroke="white" stroke-width="3"/>
                                <line y1="9.5" x2="32" y2="9.5" stroke="white" stroke-width="3"/>
                                <line y1="1.5" x2="32" y2="1.5" stroke="white" stroke-width="3"/>
                            </svg>
                        </div>
                    </div>
                </div>
        );
}

export default Banner;