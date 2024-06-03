import Information from "./Information";
import PaySistems from "./PaySistems";
import Contacts from "./Contacts";

const FooterComponent = () => {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <Information />
        <PaySistems />
        <Contacts />
      </div>
    </footer>
  );
};

export default FooterComponent;
