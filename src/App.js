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
function App() {
  const [modal, setModal] = useState(false);
  const [reviews, setRewiews] = useState([]);
  const [fetchReviews, isLoading, error] = useFetching(async () => {
    const response = await Service.getComments();
    setRewiews(response.data);
  });
  const addFeedback = (feedback) => {
    setRewiews([...reviews, feedback]);
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <Context.Provider
      value={{
        reviews,
        addFeedback,
        fetchReviews,
        isLoading,
        error,
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
