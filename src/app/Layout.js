import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

export class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: <p><Content /></p>
        }
    }

    render() {
        return (
            <>
                <header className="text-center border-bottom mb-4" >
                    <Navbar />
                </header>
                <main className="container-fluid">
                    <Content />
                </main>
                <Footer />
            </>
        )
    }
};