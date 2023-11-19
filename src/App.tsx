import React from 'react';
import './App.css';
import {Card} from "./components/Card.styled";
import {Header} from './components/Header.styled';
import picture from "./images/Rectangle 1.svg"
import {Headline} from "./components/Headline.styled";
import {Faucibus} from "./components/Faucibus.styled";
import {Photo} from './components/Photo.styled';
import {Button1} from "./components/Button1.styled";
import {Button2} from "./components/Button2.styled";

function App() {
    return (
        <div className="App">
            <Header>
                <Card>
                    <Photo src={picture} alt={"desert"}/>
                    <Headline>Headline</Headline>
                    <Faucibus>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.</Faucibus>
                    <Button1>See more</Button1>
                    <Button2>Save</Button2>
                </Card>
            </Header>
        </div>
    );
}

export default App;
