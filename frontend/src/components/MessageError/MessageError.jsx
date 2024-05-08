//styles
import { MessageStyles } from "./styles";

const MessageError = ({ message }) => {
  return (
    <MessageStyles className="error-message">
      <p>{message}</p>
    </MessageStyles>
  );
};

export default MessageError;
