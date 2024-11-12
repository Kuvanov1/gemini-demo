import React, { useState, useContext } from "react";
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from "../../context/Context";

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { prevPrompts, setRecentPrompt, setResultData, setShowResult, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        const selectedPrompt = prevPrompts.find(item => item.prompt === prompt);
        if (selectedPrompt) {
            setRecentPrompt(prompt);
            setResultData(selectedPrompt.result);
            setShowResult(true);
        }
    };

    return (
        <div className={`sidebar ${extended ? 'extended' : ''} d-flex flex-column`}>
            <div className="top align-items-center">
                <img 
                    className="menu" 
                    src={assets.menu_icon} 
                    alt="Menu Icon" 
                    onClick={() => setExtended(!extended)} 
                    aria-label="Toggle Sidebar"
                />
                <div onClick={() => newChat()} className="new-chat d-flex align-items-center gap-2 p-3 rounded-3 bg-light shadow-sm">
                    <img src={assets.plus_icon} alt="New Chat Icon" />
                    {extended && <p>New Chat</p>}
                </div>
                {extended && (
                    <div className="recent mt-3">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => (
                            <div 
                                onClick={() => loadPrompt(item.prompt)} 
                                className="recent-entry d-flex align-items-center gap-3 p-2 rounded-pill cursor-pointer" 
                                key={index}
                            >
                                <img src={assets.message_icon} alt="Message Icon" />
                                <p>{item.prompt.slice(0, 18)}...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="bottom mt-4">
                <div className="bottom-item d-flex align-items-center gap-3 p-2">
                    <img src={assets.question_icon} alt="Help Icon" />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottom-item d-flex align-items-center gap-3 p-2">
                    <img src={assets.history_icon} alt="Activity Icon" />
                    {extended && <p>Activity</p>}
                </div>
                <div className="bottom-item d-flex align-items-center gap-3 p-2">
                    <img src={assets.setting_icon} alt="Settings Icon" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
