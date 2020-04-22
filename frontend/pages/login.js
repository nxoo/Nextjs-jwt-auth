import React from 'react';
import Link from 'next/link.js';
import axios from 'axios';
import { Cookies } from 'react-cookie';


const serverUrl = 'http://localhost:8000';

// setup cookies
const cookies = new Cookies();
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: cookies.get('token') || null
        }
    }

    login = async () => {
        console.log('login called');
        const data = {
            username: 'admin',
            password: 'snapchat',
        };
        const response = await axios.post(`${serverUrl}/api/v1/token/`, data);
        const token = response.data.access;
        cookies.set('token', token);
        this.setState({
            token: token
        })
    };

    render() {
        return (
            <div>
                <Link href="/">
                    <a>Index</a>
                </Link>
                <hr/>
                <button onClick={() => this.login()}>Login</button>
                <p>Access Token: {this.state.token}</p>
            </div>
        )
    }

}



export default Index;