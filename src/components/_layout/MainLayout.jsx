import { ChatBot, Footer, Header } from "../_common";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ChatBot />
      <Footer />
    </>
  );
};

export default MainLayout;
