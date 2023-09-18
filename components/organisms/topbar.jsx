import Gravatar from '../helpers/gravatar';

export default function TopBar({ starturl, user }) {

    return (
        <header>
            <div className="header_nav">
                <div className="leftmenu">
                        <button className="backbutton" onClick={() => 
                                {
                                    if (typeof window === "undefined") {window.history.back}
                                }
                            }>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill="currentColor" d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"/></svg>
                        </button>
                </div>
                <a href={starturl} className="nav_brand">
                    <img width="80px" height="80px" src="../icons/ExperienceLogger-Symbol.svg" alt="Logo of Experience Logger"/>
                </a>
                <div className="userimage" data-behaviour="open_personalnav">
                    <div className="avatar_image">
                        <Gravatar email={user.email} img="true" />
                    </div>
                </div>
            </div>
        </header>
    )
}
