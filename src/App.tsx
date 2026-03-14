import './css/style.css'
import ShareButton from "./components/ShareButton.tsx";
import ProfileAndDate from "./components/ProfileAndDate.tsx";
import ShareToast from "./components/ShareToast.tsx";


function App() {


  return (
    <>
      <div className="card-container">
        <img src="/images/drawers.jpg" alt="Green Drawers" />
        <div className="card-content">
          <h1>Green Drawers</h1>
          <p>A collection of handcrafted, eco-friendly drawers.</p>
          <div className="author-info">

            <ProfileAndDate image={"/images/avatar-michelle.jpg"} name={"Michelle Appleton"} date={"28 Jun 2020"} />
            <ShareButton />
          </div>
          <ShareToast></ShareToast>
        </div>
      </div>

    </>
  )
}

export default App
