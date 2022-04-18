import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        Authentication and authorisation are two independent processes in the login process,
                        despite their similar sounding names.<br />
                        The use of a key for authentication. In the same way that a system only permits access
                        to users who have the necessary credentials, the lock on the door only allows entrance
                        to those who have the correct key.<br />
                        Permissions are a type of authorization. Once inside, the individual has the authority
                        to enter the kitchen and open the pet food cabinet. It's possible that the individual
                        does not have authorization to enter the bedroom for a little snooze.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        For authentication, I'm using Firebase. Because Firebase Authentication intends to make creating safe authentication
                        systems simple while also enhancing end-user sign-in and onboarding. I have a lot of alternatives to firebase that I can use.
                        Such as:<br />
                        <ul>
                            <li>Back4App</li>
                            <li>Parse</li>
                            <li>AWS Amplify</li>
                            <li>Backendless</li>
                            <li>Kuzzle</li>
                            <li>Supabase</li>
                            <li>Appwrite</li>
                            <li>Hasura</li>
                            <li>Nhost</li>
                            <li>Deployd</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        <p>Services firebase provide other than authenticaiton are as follows:</p>
                        <ul>
                            <li>Realtime Database</li>
                            <li>Remote Config</li>
                            <li>Firebase ML</li>
                            <li>Cloud Functions</li>
                            <li>Cloud Messaging</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;