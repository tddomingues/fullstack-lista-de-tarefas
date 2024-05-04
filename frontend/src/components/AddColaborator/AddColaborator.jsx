//styles
import { MdOutlineGroupAdd } from "react-icons/md";

//components
import { Button } from "../ui/Button";

const AddColaborator = ({
  user,
  users,
  setCollaborators,
  collaborators,
  collaborator,
}) => {
  const addCollaborator = (e) => {
    e.preventDefault();

    const userExists = collaborators.filter((_collaborator) => {
      return _collaborator.email === collaborator;
    });

    if (userExists.length !== 0) return;

    const _collaborator = users.filter((_user) => {
      return _user.email === collaborator && user.userId !== _user._id;
    });

    if (_collaborator.length === 0) return;

    setCollaborators((prev) => [...prev, ..._collaborator]);
  };

  return (
    <Button type="neutral950" onClick={addCollaborator}>
      <MdOutlineGroupAdd />
    </Button>
  );
};

export default AddColaborator;
