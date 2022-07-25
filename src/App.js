import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Modal from "./components/UI/Modal/Modal";
import BookingForm from "./components/BookingForm";
import { useState } from "react";
function App() {
  const [modal, setModal] = useState(false);
  return (
    <BrowserRouter>
      <Navbar setModalState={setModal} />
      <AppRouter />
      <Modal visible={modal} setVisible={setModal}>
        <BookingForm setModalState={setModal} />
      </Modal>
    </BrowserRouter>
  );
}
export default App;
