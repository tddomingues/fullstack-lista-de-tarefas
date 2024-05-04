import { useEffect } from "react";

//styles
import { MessageStyles } from "./styles";

//redux
import { useDispatch } from "react-redux";
import { reset as resetUser } from "../../slices/userSlice";
import { reset as resetTask } from "../../slices/taskSlice";

const MessageError = ({ message, classType, sliceType }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliceType === "user") {
        dispatch(resetUser());
      } else if (sliceType === "task") {
        dispatch(resetTask());
      }

      return () => clearTimeout(timer);
    }, 2000);
  }, [dispatch, sliceType]);

  return (
    <MessageStyles className={classType}>
      <p>{message}</p>
    </MessageStyles>
  );
};

export default MessageError;
