import React from 'react';
import firebase from 'firebase';
import {users} from '../../../config/firebaseCredentials';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from "react-simple-card";


class CollectionEntry extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    return(
      <div>
        <Card>
          <div className="card-size-images">
            <ImageHeader imageSrc={this.props.collection.photoUrl} />
          </div>
          {/* <img src={this.props.collection.photoUrl}/> */}
          <h4>{this.props.collection.name}</h4>
        </Card>
      </div>
    )
  }
}
export default CollectionEntry;