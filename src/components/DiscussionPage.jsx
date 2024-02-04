// DiscussionPage.jsx
import { useState } from 'react';
import '../css/DiscussionPage.css';

const DiscussionPage = () => {
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState({
    title: '',
    comment: '',
  });
  const [showAddCommentForm, setShowAddCommentForm] = useState(null);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDiscussion((prevDiscussion) => ({
      ...prevDiscussion,
      [name]: value,
    }));
  };

  const handleAddDiscussion = () => {
    if (newDiscussion.title && newDiscussion.comment) {
      setDiscussions((prevDiscussions) => [...prevDiscussions, { ...newDiscussion, comments: [] }]);
      setNewDiscussion({ title: '', comment: '' });
    }
  };

  const handleAddComment = (discussionIndex) => {
    setShowAddCommentForm(discussionIndex);
  };

  const handleCommentInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = (discussionIndex) => {
    if (newComment) {
      setDiscussions((prevDiscussions) => {
        const updatedDiscussions = [...prevDiscussions];
        updatedDiscussions[discussionIndex].comments.push(newComment);
        return updatedDiscussions;
      });
      setShowAddCommentForm(null);
      setNewComment('');
    }
  };

  return (
    <div className="discussion-page-container">
      <div className="new-discussion-form">
        <h2>Create a New Discussion</h2>
        <div className="form-section">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newDiscussion.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-section">
          <label>Comment:</label>
          <textarea
            name="comment"
            value={newDiscussion.comment}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleAddDiscussion}>Add Discussion</button>
      </div>

      <div className="discussion-cards">
        <h2>Discussions</h2>
        {discussions.map((discussion, index) => (
          <div key={index} className="discussion-card">
            <h3>{discussion.title}</h3>
            <p>{discussion.comment}</p>
            <button onClick={() => handleAddComment(index)}>Add Comment</button>
            {showAddCommentForm === index && (
              <div className="comment-form">
                <textarea
                  placeholder="Type your comment here..."
                  value={newComment}
                  onChange={handleCommentInputChange}
                />
                <button onClick={() => handleSubmitComment(index)}>Submit Comment</button>
              </div>
            )}
            <div className="comments-section">
              <h4>Comments:</h4>
              {discussion.comments && discussion.comments.length > 0 ? (
                discussion.comments.map((comment, commentIndex) => (
                  <div key={commentIndex} className="comment">
                    <p>{comment}</p>
                  </div>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionPage;
