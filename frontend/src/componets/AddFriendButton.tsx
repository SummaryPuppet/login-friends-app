import { Link } from "react-router-dom";

function AddFriendButton() {
  return (
    <Link to="/add-friends" className="px-4 py-3 text-center bg-emerald-500 rounded-md">
      Add Friend
    </Link>
  );
}

export default AddFriendButton;
