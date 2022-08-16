import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Modal from "./components/UI/Modal/Modal";
import BookingForm from "./components/BookingForm";
import { useState, useEffect } from "react";
import Service from "./API/Service";
import { useFetching } from "./hooks/useFetching.js";
import { Context } from "./context/Context";
import { getPageCount } from "./utils/pages";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoadingAuth(false);
    console.log(isAuth);
  }, [isAuth]);
  const [modal, setModal] = useState(false);
  const [reviews, setRewiews] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [fetchReviews, isLoading, error] = useFetching(async (page, limit) => {
    const response = await Service.getComments(page, limit);
    setRewiews([...reviews, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  const addFeedback = (feedback) => {
    setRewiews([...reviews, feedback]);
  };
  useEffect(() => {
    fetchReviews(page, limit);
  }, [page, limit]);
  return (
    <Context.Provider
      value={{
        reviews,
        addFeedback,
        fetchReviews,
        isLoading,
        error,
        page,
        totalPages,
        setPage,
        limit,
        setLimit,
        isAuth,
        setIsAuth,
        isLoadingAuth,
        setModal,
      }}
    >
      <BrowserRouter>
        <Navbar setModalState={setModal} />
        <AppRouter setModalState={setModal} />
        <Modal visible={modal} setVisible={setModal}>
          <BookingForm setModalState={setModal} />
        </Modal>
      </BrowserRouter>
    </Context.Provider>
  );
}
export default App;
