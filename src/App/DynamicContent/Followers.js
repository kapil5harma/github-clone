import React, { Component } from 'react';

class Followers extends Component {
  state = {
    page: null
  };

  componentDidMount = () => {
    if (this.props.followers) {
      this.setState({ page: 'Followers' });
    }
    if (this.props.following) {
      this.setState({ page: 'Following' });
    }
  };

  render() {
    const { followers, following } = this.props;
    let followerList = null;

    if (followers || following) {
      const data = followers ? followers : following;
      followerList = data.edges.map(user => {
        const { id, avatarUrl, viewerIsFollowing, name, login } = user.node;

        return (
          <div
            className="Card flex pv3 bt bb b--light-gray br2 w-100 mh2 justify-between items-start"
            key={id}
          >
            <div className="flex">
              <img
                className="br2"
                src={avatarUrl}
                alt={id}
                width="50px"
                height="50px"
              />
              <span className="pl3 b">{name}</span>
              <span className="pl3">{login}</span>
            </div>
            <span className="ba b--gray bg-light-gray pointer br2 pa2">
              {viewerIsFollowing ? 'Unfollow' : 'Follow'}
            </span>
          </div>
        );
      });
    }

    return (
      <div className="Followers flex flex-column">
        <span className="mt3 mb2 b">{this.state.page}: </span>
        <div className="follower-list flex flex-column">{followerList}</div>
      </div>
    );
  }
}

export default Followers;
