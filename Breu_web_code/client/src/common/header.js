import * as React from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useSelector, useDispatch } from "react-redux";
import { removeCandidateDetails } from "../features/authSlice";
import { removeCorporateDetails } from "../features/corporateAuthSlice";
import { removeRecruiterDetails } from "../features/recruiterAuthSlice";
import { removeAdminDetails } from "../features/adminAuthSlice";
import ConfirmationDialog from "./ConfirmationDialog";

const Header = ({ name, caption, page }) => {
  const navigate = useNavigate();
  const { auth, corporateAuth, recruiterAuth, adminAuthSlice } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    if (auth?.isAuthenticated) {
      dispatch(removeCandidateDetails());
    } else if (corporateAuth?.isAuthenticated) {
      dispatch(removeCorporateDetails());
    } else if (recruiterAuth?.isAuthenticated) {
      dispatch(removeRecruiterDetails());
    } else if (adminAuthSlice?.isAuthenticated) {
      dispatch(removeAdminDetails());
    }
    localStorage.removeItem("breuai");
    navigate("/");
  };

  return (
    <Grid container>
      {isOpen && (
        <ConfirmationDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={"Logout"}
          content={{
            mainContent: "Are you sure you want to logout?",
          }}
          handleSubmit={() => handleClick()}
        />
      )}
      {page ? (
        <Grid item className="headerGridItem" xs={12} md={12} align="center">
          <p className="headerPara">
            {name || "Believability"} {caption ? `- ${caption}` : " "}
          </p>
          {/* <p  className="headerCaption"></p > */}
        </Grid>
      ) : (
        <>
          <Grid item className="headerGridItem" xs={11} md={11} align="center">
            <p className="headerPara">
              {name || "Believability"} {caption ? `- ${caption}` : " "}
            </p>
            {/* <p  className="headerCaption"></p > */}
          </Grid>
          <Grid item className="headerGridItem" xs={1} md={1} align="right">
            <ExitToAppIcon
              onClick={() => setIsOpen(true)}
              sx={{ color: "white", fontSize: 36, cursor: "pointer" }}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default Header;
