import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

interface BaseModalProps {
  open: boolean;
  title?: string;
  content?: string;
  onClose: () => void;
}

function BaseModal(props: BaseModalProps) {
  const { open, onClose, title, content } = props;

  return (
    <Modal
      open={open}
      keepMounted
      onClose={onClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box
        sx={{
          p: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h6"
          color="#000"
          component="h2"
          textAlign="center"
          id="keep-mounted-modal-title"
        >
          {title || "Notification"}
        </Typography>
        <Typography
          id="keep-mounted-modal-description"
          sx={{
            mt: 1,
            color: "#000",
            textAlign: "center",
            wordWrap: "break-word",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Modal>
  );
}

export default BaseModal;
