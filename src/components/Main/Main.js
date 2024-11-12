import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context'; 

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className="main container-fluid">
            <div className="nav d-flex justify-content-between align-items-center p-3">
                <p className="m-0">Gemini</p>
                <img src={assets.user_icon} alt="User Icon" className="rounded-circle" width={40} />
            </div>
            <div className="main-container d-flex flex-column align-items-center">
                {!showResult ? (
                    <>
                        <div className="greet text-center py-3">
                            <p className="fs-1 text-muted">
                                <span className="gradient-text">Hello, Lazy.</span>
                            </p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards d-flex flex-wrap justify-content-center gap-3 py-3">
                            <div className="card p-3 border-0 shadow-sm">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass Icon" className="img-fluid" />
                            </div>
                            <div className="card p-3 border-0 shadow-sm">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="Bulb Icon" className="img-fluid" />
                            </div>
                            <div className="card p-3 border-0 shadow-sm">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="Message Icon" className="img-fluid" />
                            </div>
                            <div className="card p-3 border-0 shadow-sm">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="Code Icon" className="img-fluid" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result w-100 py-3">
                        <div className="result-title d-flex align-items-center mb-4">
                            <img src={assets.user_icon} alt="User Icon" className="rounded-circle me-3" width={40} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="Gemini Icon" className="mb-3" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <div dangerouslySetInnerHTML={{ __html: resultData }}></div>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom w-100 d-flex flex-column align-items-center py-3">
                    <div className="search-box d-flex align-items-center justify-content-between p-3 w-100 border rounded-pillshadow-sm">
                        <input
                            type="text"
                            placeholder="Enter a prompt here"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <div className="search-icons d-flex align-items-center gap-3">
                            <img src={assets.gallery_icon} alt="Gallery Icon" />
                            <img src={assets.mic_icon} alt="Mic Icon" />
                            {input && <img src={assets.send_icon} onClick={onSent} alt="Send Icon" />}
                        </div>
                    </div>
                    <p className="bottom-info text-center mt-3 text-muted fs-6">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
