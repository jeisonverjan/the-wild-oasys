import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: grid;
  place-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. get the current user
  const { isLoading, isAuthenticated } = useUser();

  //2. If there NO user authenticated redirect to /login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. if is loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
