import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Notification = ({ title, action }) => {
    return (
        <div className="mt-16 md:mt-14 py-6 h-screen">
            <Container maxWidth="xs" className="shadow-xl rounded-md pb-5">
                <Box mt={4}>
                    <h3 className="text-2xl font-bold text-center text-dark-yellow">
                        {title}
                    </h3>
                    <p className="py-4">
                        A {action} link has been sent to your email. Click <Link to="/login" className="text-amber-500">
                            here
                        </Link> to login after {action}.
                    </p>
                </Box>
            </Container>
        </div>
    );
};

export default Notification;
