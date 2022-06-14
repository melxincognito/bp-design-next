import LoginForm from "../components/forms/LoginForm";
import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

function login() {
  const cardStyles = {
    padding: 2,
    borderRadius: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  return (
    <motion.div
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoginForm />
      <div style={{ marginTop: "1rem" }}>
        <Card sx={cardStyles}>
          <CardContent>
            <Typography>
              {" "}
              Dont have an account?{" "}
              <Link href="/signup">
                <a style={{ color: "purple" }}>Click here to sign up! </a>
              </Link>{" "}
            </Typography>{" "}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

export default login;
