// CREATE YOUR ContactCard COMPONENT HERE
const ContactCard = ({ name, position, email }) => {
  return (
    <>
      <ul>
        <li className="contact-card">
          <h2>{name}</h2>
          <dl>
            <dt>Job</dt>
            <dd>{position}</dd>
            <dt>Email</dt>
            <dd>{email}</dd>
          </dl>
        </li>
      </ul>
    </>
  );
};
function App() {
  return (
    // REPLACE THIS WITH COMPONENTS
    // <ul>
    //   <li className="contact-card">
    //     <h2>John Doe</h2>
    //     <dl>
    //       <dt>Job</dt>
    //       <dd>Electrical Engineer</dd>
    //       <dt>Email</dt>
    //       <dd>john.doe@acme.co</dd>
    //     </dl>
    //   </li>
    //   <li className="contact-card">
    //     <h2>Pedro Penduko II</h2>
    //     <dl>
    //       <dt>Job</dt>
    //       <dd>Receptionist</dd>
    //       <dt>Email</dt>
    //       <dd>ppenduko@acme.co</dd>
    //     </dl>
    //   </li>
    //   <li className="contact-card">
    //     <h2>Billy Boy Magnaye</h2>
    //     <dl>
    //       <dt>Job</dt>
    //       <dd>President</dd>
    //       <dt>Email</dt>
    //       <dd>bbm@acme.co</dd>
    //     </dl>
    //   </li>
    // </ul>
    <>
      <ContactCard
        name="John Doe"
        position="Electrical Engineer"
        email="john.doe@acme.co"
      />
      <ContactCard
        name="Pedro Penduko II"
        position="Receptionist"
        email="ppenduko@acme.co"
      />
      <ContactCard
        name="Billy Boy Magnaye"
        position="President"
        email="bbm@acme.co"
      />
    </>
  );
}

export default App;
