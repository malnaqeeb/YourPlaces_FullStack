import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/component/UIElements/Avatar";
import Card from "../../shared/component/UIElements/Card";
import "./UserItem.css";
import useHttpClient from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/component/UIElements/ErrorModal";
import Button from '@material-ui/core/Button'
import FriendshipLable from './FriendshipLable'

const UserItem = ({ user, userData, auth, sendFriendRequestHandler }) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { id, image, name, places } = user;
  const FriendButton = () => {
    const isFriend = userData.friends ? userData.friends.filter(friend => {
      return friend.id === id;
    }) : [];
    const hasRequest = userData.friendRequests ? userData.friendRequests.filter(req => req.user.id === id) : [];

    const sendFriendRequest = async (id) => {
      try {
        await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/user/friends`,
          'POST',
          JSON.stringify({
            friendId: id
          }),
          {
            Authorization: 'Bearer ' + auth.token,
            'Content-Type': 'application/json',
          },
        );
        sendFriendRequestHandler(id);
      } catch (error) { console.error(error) }
    };

    if (auth.isLoggedIn) {
      if (isFriend.length > 0) {
        return (
            <FriendshipLable variant="contained" color="secondary" >FRIEND</FriendshipLable>
        );
      }

      if (hasRequest.length > 0) {
        if (hasRequest[0].isSent) {
          return (
            <FriendshipLable>Wait for response</FriendshipLable>
          );
        } else {
          return (
            <FriendshipLable variant="contained" color="secondary" >Asked to be friend</FriendshipLable>
          );
        }
      }

      if (id === userData.userId) {
        return <></>;
      }

      return (
        <Button variant="contained" color="primary" onClick={() => sendFriendRequest(id)}>Add Friend</Button>
      );
    }
    return <></>;
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${id}/places`}>
            <div className="user-item__image">
              <Avatar image={image} alt={name} />
            </div>
            <div className="user-item__info">
              <h2>{name}</h2>
              <h3>
                {places.length} {places.length === 1 ? 'Place' : 'Places'}
              </h3>
            </div>
          </Link>
        </Card>
        {!isLoading && userData && id!==auth.userId && <FriendButton />}
      </li>
    </>
  );
};

export default UserItem;
