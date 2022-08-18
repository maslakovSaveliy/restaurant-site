import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Modal from "./components/UI/Modal/Modal";
import BookingForm from "./components/BookingForm";
import { useState, useEffect, useRef } from "react";
import Service from "./API/Service";
import { useFetching } from "./hooks/useFetching.js";
import { Context } from "./context/Context";
import { getPageCount } from "./utils/pages";
import ScrollToTop from "./components/UI/scrollToTop/ScrollToTop";
import { CSSTransition } from "react-transition-group";
function App() {
  const [toTopBtn, setToTopBtn] = useState(false);
  const firstElement = useRef();
  const observer = useRef();
  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    var cb = function (entries, observer) {
      if (entries[0].isIntersecting) {
        setToTopBtn(false);
      } else {
        setToTopBtn(true);
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(firstElement.current);
  }, []);

  const [isAuth, setIsAuth] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoadingAuth(false);
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
        <div ref={firstElement}></div>
        <Navbar setModalState={setModal} />
        <AppRouter setModalState={setModal} />
        <CSSTransition in={toTopBtn} timeout={500} mountOnEnter unmountOnExit>
          <ScrollToTop cl="ScrollToTop" />
        </CSSTransition>
        <Modal visible={modal} setVisible={setModal}>
          <BookingForm setModalState={setModal} />
        </Modal>
      </BrowserRouter>
    </Context.Provider>
  );
}
export default App;
