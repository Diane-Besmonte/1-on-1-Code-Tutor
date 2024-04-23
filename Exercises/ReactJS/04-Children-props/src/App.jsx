// PUT YOUR COMPONENT HERE OR MAKE A NEW COMPONENT FILE AND IMPORT HERE
const NewButton = ({
  bordercolor,
  textcolor,
  backgroundcolor,
  content,
  style,
}) => {
  return (
    <>
      <button
        style={{
          border: "2px solid",
          color: textcolor,
          borderColor: bordercolor,
          background: backgroundcolor,
          borderRadius: 4,
          padding: 16,
          margin: 8,
          ...style,
        }}
      >
        {content}
      </button>
    </>
  );
};

function App() {
  // REPLACE THIS WITH COMPONENTS
  return (
    // <div>
    //   <button
    //     style={{
    //       border: "2px solid",
    //       color: "white",
    //       borderColor: "red",
    //       background: "red",
    //       borderRadius: 4,
    //       padding: 16,
    //       margin: 8,
    //     }}
    //   >
    //     Cancel
    //   </button>
    //   <button
    //     style={{
    //       border: "2px solid",
    //       color: "black",
    //       borderColor: "skyblue",
    //       background: "skyblue",
    //       borderRadius: 4,
    //       padding: 16,
    //       margin: 8,
    //     }}
    //   >
    //     Confirm
    //   </button>
    // </div>
    <>
      <NewButton
        bordercolor="red"
        textcolor="white"
        backgroundcolor="red"
        content="Cancel"
        style={{ color: "green", backgroundColor: "yellow" }}
      />
      <NewButton
        bordercolor="skyblue"
        textcolor="black"
        backgroundcolor="skyblue"
        content="Confirm"
      />
    </>
  );
}

export default App;
