import { useNavigate } from "react-router-dom";
import Friend from "../componets/Friend";
import Layout from "../componets/Layout";
import Navbar from "../componets/Navbar";
import { useLogin } from "../context/LoginProvider";

function FriendsPage() {
  const { login, user } = useLogin();
  const navigate = useNavigate();

  if (!login) {
    navigate("/");
  }

  return (
    <Layout style="">
      <>
        <Navbar />
        <section className="px-2 py-2 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {user?.friends ? (
            user?.friends?.map((friend, index) => (
              <Friend
                key={index}
                nickname={friend.nickname}
                firstname={friend.firstname}
                lastname={friend.lastname}
              />
            ))
          ) : (
            <span className="text-3xl dark:text-neutral-200">No friends yet</span>
          )}
        </section>
      </>
    </Layout>
  );
}

export default FriendsPage;
