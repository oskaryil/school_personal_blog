import React, { Component } from "react";
import { connect } from "react-redux";
import ContentContainer from "../../components/containers/ContentContainer";
import PostsList from "./components/PostsList";
import { fetchUserProfile } from "./redux/actions/userProfileActions";
import "./styles/userProfile.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const username = this.props.match.params.username;
    this.props.fetchUserProfile(username);
    // this.props.fetchPostsByUser(this.props.profile.userProfile._id);
  }

  render() {
    const { userProfile } = this.props.profile;
    return (
      <ContentContainer loading={this.props.profile.fetching}>
        <div className="user-profile">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-12">
              <img
                className="img-responsive user-profile-img"
                src={userProfile.profileImg}
              />
            </div>
            <div className="col-md-7 col-sm-7 col-xs-12">
              <h2 className="text-center user-profile-name">
                {userProfile.name}
              </h2>
            </div>
          </div>
        </div>
        {/* <PostsList posts={} /> */}
      </ContentContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.userProfile
});

export default connect(mapStateToProps, { fetchUserProfile })(UserProfile);
