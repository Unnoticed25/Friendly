import React from 'react';

interface Friend {
    id: number;
    name: string;
}

interface FriendListProps {
    friends: Friend[];
    onSelectFriend: (friend: Friend) => void;
}

const FriendList: React.FC<FriendListProps> = ({ friends, onSelectFriend }) => {
    return (
        <div className="friend-list">
            {friends.map(friend => (
                <div key={friend.id} onClick={() => onSelectFriend(friend)}>
                    {friend.name}
                </div>
            ))}
        </div>
    );
};

export default FriendList;