import React, { Component } from 'react'
import about from '../../views/about';

class List extends Component {
    componentDidMount() {
        const awesomeEffect = dict => {
            let container = document.getElementById(dict.id);
            let randomChars = "";
            let text = dict.text;
            let possible = dict.possible
                ? dict.possible
                : 'ABCDEFASIRUWJFCKSJHYWRKJEsdfskdjfk-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';
            let delay = dict.delay ? dict.delay : 70;
            
            const generateRandomTitle = (i, randomChars) => {
                setTimeout(_ => {
                container.innerText = randomChars;
                }, i * delay);
            };
            
            for (let i = 0; i < text.length + 1; i++) {
                randomChars = text.substr(0, i);
                for (let j = i; j < text.length; j++) {
                randomChars += possible.charAt(
                    Math.floor(Math.random() * possible.length)
                );
                }
                generateRandomTitle(i, randomChars);
                randomChars = "";
            }
        };
          
        awesomeEffect({
            id: 'ani1',
            text: 'cocoyaku built in 2011'
        })
        awesomeEffect({
            id: 'ani2',
            text: 'prototype built with vue2 in 2017'
        })
        awesomeEffect({
            id: 'ani3',
            text: 'colorful prototype built with vue2 in 2017'
        })
        awesomeEffect({
            id: 'ani4',
            text: 'web-app built in 2016'
        })
        awesomeEffect({
            id: 'ani5',
            text: 'travel insurance built in 2017'
        })
        awesomeEffect({
            id: 'ani6',
            text: 'Insurance built in 2017'
        })
        awesomeEffect({
            id: 'ani7',
            text: 'Pet insurance built in 2017'
        })
    }
    render() {
        return(
            <div className="list">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-4 pb-5 col-xs-12">
                        <a href="https://www.cocoyaku.com.tw/" alt="cocoyaku" target="_blank">
                        <div id="ani1"></div>
                        </a>
                    </div>
                    <div className="col-4 pb-5 col-xs-12">
                        <a href="http://www.jungwei.com.tw/moto/" alt="cocoyaku" target="_blank">
                        <div id="ani2"></div>
                        </a>
                    </div>
                    <div className="col-4 pb-5 col-xs-12">
                        <a href="http://jungwei.com.tw/protoVersion1/" alt="cocoyaku" target="_blank">
                        <div id="ani3"></div>
                        </a>
                    </div>
                    <div className="col-4 pb-5 col-xs-12">
                        <a href="http://www.jungwei.com.tw/dream/" alt="cocoyaku" target="_blank">
                        <div id="ani4"></div>
                        </a>
                    </div>
                    <div className="col-4 pb-5 col-xs-12">
                        <a href="https://www.careline.com.tw/CareLineTravel/travel/index" alt="cocoyaku" target="_blank">
                        <div id="ani5"></div>
                        </a>
                    </div>
                    <div className="col-4 pb-5 col-xs-12">
                        <a href="https://www.careline.com.tw/" alt="cocoyaku" target="_blank">
                        <div id="ani6"></div>
                        </a>
                    </div>
                    <div className="col-4 pb-5 col-xs-12">
                        <a href="https://www.careline.com.tw/CareLinePet/Pet/" alt="cocoyaku" target="_blank">
                        <div id="ani7"></div>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default List