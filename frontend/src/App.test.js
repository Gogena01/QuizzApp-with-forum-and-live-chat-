import React from 'react';
import Forum from './pages/forum';
import { render, fireEvent } from '@testing-library/react';
import ForumTemplate from './pages/forum';

describe('API connection', () => {
  it('returns a successful response from the server', async () => {
    const response = await fetch('http://localhost:9000/Forum/forum');
    expect(response.ok).toBe(true);
  });

  it('returns a post when a new post is created', async () => {
    const newPost = {
      title: 'Test post',
      description: 'Test description',
    };

    const response = await fetch('http://localhost:9000/Forum/forum', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(response.ok).toBe(true);
    const responseData = await response.json();
    expect(responseData.title).toEqual(newPost.title);
    expect(responseData.description).toEqual(newPost.description);
  });
});



describe('ForumTemplate', () => {
  it('shows the create post form when the "Add post" button is clicked', () => {
    const { getByTestId } = render(<ForumTemplate />);

    const addButton = getByTestId('add');
    const hiddenForm = getByTestId('hidden-post');

    expect(hiddenForm).toHaveStyle('display: none');

    fireEvent.click(addButton);

    expect(hiddenForm).toHaveStyle('display: block');
  });
});


