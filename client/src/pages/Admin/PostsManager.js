import React, { Component } from "react";
import { connect } from "react-redux";
import ContentContainer from "../../components/containers/ContentContainer";
import { Redirect } from "react-router-dom";
import {
  AppBar,
  MenuItem,
  Drawer,
  RaisedButton,
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
  TableRowColumn
} from "material-ui";
import moment from "moment";
import AdminContainer from "../../components/containers/AdminContainer";
import "./styles/adminPage.css";

class PostsManager extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, redirectTo: "" };
  }

  static isPrivate = true;

  handleToggle = () => this.setState({ open: !this.state.open });

  _redirectTo = path => this.setState({ redirectTo: path });

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    return (
      <AdminContainer title="Posts">
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Author</TableHeaderColumn>
                <TableHeaderColumn>Date</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.posts.posts.map(post => {
                return (
                  <TableRow key={post._id}>
                    <TableRowColumn>
                      <p>
                        {post.title}
                      </p>
                    </TableRowColumn>
                    <TableRowColumn>
                      <p>
                        {post.author.name}
                      </p>
                    </TableRowColumn>
                    <TableRowColumn>
                      <p>
                        {moment(post.createdAt).format("lll")}
                      </p>
                    </TableRowColumn>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </AdminContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
});

export default connect(mapStateToProps)(PostsManager);
