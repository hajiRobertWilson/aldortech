"use client"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reviews() {
    return (
        <>
            <div className="reviewCont">
                <h1>What people Think About Us</h1>
                <div className="reviewCardCont">
                    <div className="reviewCard">
                        <div className="time">
                            <div className="stars">
                                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <h2>10th Jul, 2023</h2>
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corporis omnis facilis minima dolorem est, nobis modi odit cum nulla, accusamus aliquam. Est, enim distinctio? Earum ab omnis illo sunt.
                        </div>
                        <div className="avatar">
                            <img src="/avatar1.webp" alt="Avatar" />
                            <div>
                                <h3>Ray Robertson</h3>
                                <p>CEO Company</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviewCard">
                        <div className="time">
                            <div className="stars">
                                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <h2>10th Aug, 1876</h2>
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corporis omnis facilis minima dolorem est, nobis modi odit cum nulla, accusamus aliquam. Est, enim distinctio? Earum ab omnis illo sunt.
                        </div>
                        <div className="avatar">
                            <img src="/avatar2.webp" alt="Avatar" />
                            <div>
                                <h3>John Doe</h3>
                                <p>CEO Company</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}