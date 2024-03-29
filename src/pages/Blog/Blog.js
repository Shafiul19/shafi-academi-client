import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 space-y-2 max-w-screen-xl mx-auto'>
            <div>
                <p className='text-xl'>What is CORS?</p>
                <p>CORS stands for Cross-Origin Resource Sharing. It is a security mechanism controlled and enforced by the web browser.The role of a CORS policy is to maintain the integrity of a website and secure it from unauthorized access. It allows a service (API) to indicate any origin other than its own from which the client can request resources. CORS is used to explicitly allow some cross-origin requests while rejecting others. CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.</p>
               
            </div>
            <div>
            <p className='text-xl'>Why are you using firebase? What other options do you have to implement authentication?</p>
            <p>I am using firebase to implement authentication and hosting the client side of my website. Though it has a lot more other features. The reason behind choosing firebase as it has  reliable & extensive databases, fast & safe hosting service,  free multi-platform  authentication system, and many other tools for maintaining modern web application. It also provides a free start to the new developers. Other than that, creating a all new authentication system is time consuming and hard to apply the latest security features for a entry level company. So using firebase is the best solution. There are some other providers like firebase for implementing authentication like Auth0, Amazon Cognito, Clerk, KeyCloak, SuperTokens, Nhost etc.</p>
            </div>
            <div>
            <p className='text-xl'>How does the private route work?</p>
            <p>The Private route or Protected route of react router is used to provide access to some specific routes only for the authenticated users. There is a Private route component that acts as a security guard for the components that has been set as child of the private route component in the router element. This PrivateRoute component is the blueprint for all private routes in the application. It uses context api for checking if the user is logged in or not. If logged in, then it returns the protected component otherwise it returns a navigation that leads to the log in route.</p>
            </div>
            <div>
            <p className='text-xl'>What is Node? How does Node work?</p>
            <p>Node or Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. It uses JavaScript on the server. It is designed to build scalable network applications. The V8 Engine is like the heart of node.js. Node.js basically works on two concepts. Asynchronous and Non-blocking I/O. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>

            </div>
           
        </div>
    );
};

export default Blog;