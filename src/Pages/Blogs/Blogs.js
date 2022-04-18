import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h1>1. Difference between authorization and authentication</h1>
            <p>Simply put, authentication is the process of verifying who someone is,
                whereas authorization is the process of verifying what specific applications,
                files, and data a user has access to.Authentication verifies who the user is.
                Authorization determines what resources a user can access. Authentication works
                through passwords, one-time pins, biometric information, and other information
                provided or entered by the user. Authorization works through settings that are
                implemented and maintained by the organization.</p>
            <h1>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>I am using firebase for authentication. There are many other optoins I have to
                implement authentication. Such as Parse, Back4App, AWS Amplify, Kuzzle, RxDB, etc.</p>
            <h1>3. What other services does firebase provide other than authentication</h1>
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
        </div>
    );
};

export default Blogs;