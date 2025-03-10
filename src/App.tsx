import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#204160", height: "auto", width: "auto" }}>
      <img src="images/logo.png" alt="HomeSync" style={{ position: "absolute", top: 15, left: 35, width: "8vw", height: "auto" }}  />

      <h1 className="homesync"> HomeSync </h1>

      <button className="signup-button">Sign Up</button>
      <button className="login-button">Log In</button>
      <button className="whatis-button">What's HomeSync?</button>

      <img src="images/background.png" alt="Description" style={{ width: "100%", height: "100%", marginTop: "100px", opacity: "0.8" }}  />
      {/* Your content here gggggg */}
    </div>
  );
}

export default App;
