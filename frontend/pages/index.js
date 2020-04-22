import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const serverUrl = 'http://localhost:8000';

// setup cookies
const cookie = new Cookies();


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
    }


    hello = async (e) => {
        const token = cookie.get('token');
        try {
            const res = await axios.get(`${serverUrl}/api/v1/`, {headers: {'Authorization': `Bearer ${token}`} })
            const msg = res.data.msg;
            this.setState({message: msg})
        } catch (err) {
            console.log(err.response.data.msg)
        }
    };

    render() {
        return (
            <div>
                <Link href='/login'>
                    <a>Login</a>
                </Link>
                <hr/>
                <div>
                    <button onClick={() => this.hello()}>message</button>
                    <p>Message: {this.state.message}</p>
                </div>
            </div>
        )
    }
}


export default Index;
