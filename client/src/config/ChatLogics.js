export const getSender = (loggedUser, users) => {
  if (!users || users.length < 2 || !loggedUser) return "";
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

export const getSenderFull = (loggedUser, users) => {
  if (!users || users.length < 2 || !loggedUser) return null;
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};

export const isSameSender = (
  messages,
  currentMessage,
  currentMessageIndex,
  loggedUserId
) => {
  if (
    !messages ||
    !currentMessage ||
    currentMessageIndex >= messages.length - 1 ||
    !loggedUserId
  ) {
    return false;
  }

  return (
    messages[currentMessageIndex + 1]?.sender?._id !==
      currentMessage.sender._id &&
    messages[currentMessageIndex].sender._id !== loggedUserId
  );
};

export const isLastMessage = (messages, currentMessageIndex, loggedUserId) => {
  if (
    !messages ||
    messages.length === 0 ||
    currentMessageIndex >= messages.length ||
    !loggedUserId
  ) {
    return false;
  }

  return (
    currentMessageIndex === messages.length - 1 &&
    messages[messages.length - 1]?.sender?._id !== loggedUserId
  );
};

export const isSameSenderMargin = (
  messages,
  currentMessage,
  currentMessageIndex,
  loggedUserId
) => {
  if (
    !messages ||
    !currentMessage ||
    currentMessageIndex >= messages.length ||
    !loggedUserId
  ) {
    return "auto";
  }

  if (
    currentMessageIndex < messages.length - 1 &&
    messages[currentMessageIndex + 1]?.sender?._id ===
      currentMessage.sender._id &&
    messages[currentMessageIndex].sender._id !== loggedUserId
  ) {
    return 33;
  } else if (
    (currentMessageIndex < messages.length - 1 &&
      messages[currentMessageIndex + 1]?.sender?._id !==
        currentMessage.sender._id &&
      messages[currentMessageIndex].sender._id !== loggedUserId) ||
    (currentMessageIndex === messages.length - 1 &&
      messages[currentMessageIndex].sender._id !== loggedUserId)
  ) {
    return 0;
  } else {
    return "auto";
  }
};

export const isSameUser = (messages, currentMessage, currentMessageIndex) => {
  if (!messages || currentMessageIndex <= 0) {
    return false;
  }

  return (
    messages[currentMessageIndex - 1]?.sender?._id ===
    currentMessage.sender._id
  );
};
