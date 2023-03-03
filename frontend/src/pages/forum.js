// Frontend code
import React, { useState, useEffect, useRef } from 'react';
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

const ForumTemplate = () => {
  const [posts, setPosts] = useState([]);
  const [display, setDisplay] = useState('none')
  const ref = useRef();

  // Fetch forum posts from backend server
  useEffect(() => {
    fetch('http://localhost:9000/Forum/forum')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);


  const showHide = () => {
    if (ref.current.style.display == 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newPost = {
      title: formData.get('title'),
      description: formData.get('description')
    };
    fetch('http://localhost:9000/Forum/forum', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setPosts([...posts, data]);
        event.target.reset();
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };

  console.log(posts)
  return (
    <>
      <div className='createPost' ref={ref} style={{display:display}}>
        <div className="Add">
          <form  id='form' onSubmit={handleSubmit} style={{marginLeft:'330px'}}>
            <h1>Add post</h1>

            <textarea style={{marginLeft:'5px'}} type="text" id="title" name="title"  placeholder='Enter title for post'  required />

            <textarea id="description" name="description"  placeholder='Enter description for post'  required ></textarea>

            <button type="submit" id='btnAddPost'>Submit</button>
          </form>
        </div>
      </div>
      <div className="forum">
        <button className='btnAdd' onClick={showHide}>Add post</button>
        {posts.map((post, index) => (
          <ForumPost key={index} title={post.title} description={post.description} description2={post.description2} />
        ))}
      </div>
    </>
  );
};

export default ForumTemplate;
