import React from 'react';
import './forum.css';

const ForumPost = (props) => {
  return (
    <div className="forum-post">
      <h2>{props.title}</h2>
      <p className='forumP'>{props.description}</p>
      <p className='forumP'>{props.description2}</p>
      <hr />
    </div>
  );
};

const ForumTemplate = (props) => {
  const posts = [
    {
      title: 'Javascript',
      description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.',
      description2:'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).'    
    },
    {
      title: 'React.js',
      description: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with the user interface and rendering components to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.',
      description2:'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.'
    },
    {
      title:'Angular.js',
      description:'AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. It was maintained mainly by Google and a community of individuals and corporations. It aimed to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in web applications and progressive web applications.',
      description2:'AngularJS was used as the frontend of the MEAN stack, that consisted of MongoDB database, Express.js web application server framework, AngularJS itself (or Angular), and Node.js server runtime environment.As of January 1, 2022, Google no longer updates AngularJS to fix security, browser compatibility, or jQuery issues. The Angular team recommends upgrading to Angular (v2+) as the best path forward, but they also provided some other options'
    }
  ];

  return (
    <div className="forum">
      {posts.map((post, index) => (
        <ForumPost key={index} title={post.title} description={post.description} />
      ))}
    </div>
  );
};

export default ForumTemplate;
