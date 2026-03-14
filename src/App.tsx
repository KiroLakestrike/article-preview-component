import './css/style.css'
import ShareButton from "./components/ShareButton.tsx";
import ProfileAndDate from "./components/ProfileAndDate.tsx";
import ShareToast from "./components/ShareToast.tsx";
import {ToastProvider} from "./components/context/ToastContext.tsx";

function App() {

    return (
        <>
            <ToastProvider>
                <main>
                    <div className="card-container">
                        <img src="/images/drawers.jpg" alt="Green Drawers" />
                        <div className="card-content">
                            <h1 className={"manrope-Bold text-color-grey-900 text-size-20 letter-spacing-025"}>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
                            <p className={"manrope-Medium text-color-grey-500 text-size-13 letter-spacing-012"}>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
                            <div className="share-section">
                                <div className="author-info">
                                    <ProfileAndDate image={"/images/avatar-michelle.jpg"} name={"Michelle Appleton"} date={"28 Jun 2020"} />
                                    <div className="share-anchor">
                                        <ShareButton />
                                        <ShareToast />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </ToastProvider>
        </>
    )
}
export default App