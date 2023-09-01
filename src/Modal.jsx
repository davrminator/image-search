import "./Modal.css";

const Modal = ({toggleModal, detail}) => {
    return (
    <>
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <h2>Image Details</h2>
                <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
                    <img src={detail.userImageURL ? detail.userImageURL : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_150.png"} alt="this is the user image"/>
                    <p style={{marginBottom: "0px", textAlign: "center"}}><strong>Posted by:</strong> {detail.user}</p>
                    <p style={{textAlign: "center"}}><strong>Relevant tags:</strong> {detail.tags}</p>
                    <button onClick={() => {window.open(detail.largeImageURL, "_blank")}} style={{marginBottom: "10px"}}>See original image</button>
                </div>
                <button className="close-modal" onClick={toggleModal}>
                    Close
                </button>
            </div>
        </div>
    </>
    );
}

export default Modal