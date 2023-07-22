import { useEffect } from "react";
import Header from "../../common/header";
import ResultScreen from "../Results/ResultScreen";
import { fetchCandidateScores } from "../../features/candidateSlice";
import { useDispatch, useSelector } from "react-redux";

const BreuScore = () => {
  const { auth, candidateSlice } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Breu.ai - Breu Score";
  }, []);

  useEffect(() => {
    if (auth?.isAuthenticated) {
      dispatch(fetchCandidateScores(auth?.user?._id));
    }
  }, [auth?.isAuthenticated]);

  return (
    <>
      <Header
        name="Breu Score"
        caption={"Exploring your Emotional dimension"}
      />
      {candidateSlice?.candidateScore ? (
        <ResultScreen />
      ) : (
        <h3 style={{ margin: "auto" }}>
          {" "}
          You did it !! Your breu score will be available in 24 hours
        </h3>
      )}
    </>
  );
};

export default BreuScore;
