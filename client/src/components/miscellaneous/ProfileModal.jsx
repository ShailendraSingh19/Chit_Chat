import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}

      {/* Profile Modal */}
      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />

        <ModalContent h="410px">
          <ModalHeader
            display="flex"
            justifyContent="center"
            fontSize="40px"
            fontFamily="Work sans"
          >
            {user?.name || "No Name"}
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Profile Picture */}
            {user?.pic ? (
              <Image
                borderRadius="full"
                boxSize="150px"
                src={user.pic}
                alt={user?.name || "User"}
              />
            ) : (
              <Text>No Picture</Text>
            )}

            {/* Email Address */}
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user?.email || "No Email"}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
