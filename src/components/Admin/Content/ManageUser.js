import Example from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Mange User</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          table users
          <Example />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
