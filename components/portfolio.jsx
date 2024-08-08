"use client"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { PortCard } from "./Cards";


export default function PortComponent() {
    let filterBtn = ['All', 'Web', 'SPAs', 'Marketing', 'Wordpress', 'Apps'];
    let cards = [
        { path: 'poster1.webp', id: 1, title: 'Lorem', value: 'Web' },
        { path: 'poster2.webp', id: 2, title: 'Ipsum', value: 'SPAs' },
        { path: 'poster3.webp', id: 3, title: 'SOme', value: 'Apps' },
        { path: 'poster4.webp', id: 4, title: 'Hello', value: 'Marketing' },
        { path: 'poster2.webp', id: 5, title: 'pagi', value: 'Web' },
        { path: 'poster1.webp', id: 6, title: 'jhjdsg', value: 'Apps' },
        { path: 'poster2.webp', id: 7, title: 'kjvfd', value: 'Wordpress' },
        { path: 'poster4.webp', id: 8, title: 'djfds', value: 'Web' },
        { path: 'poster3.webp', id: 9, title: 'jfkds', value: 'SPAs' },
        { path: 'poster1.webp', id: 10, title: 'dfjl', value: 'Marketing' },
        { path: 'poster4.webp', id: 11, title: 'kfld', value: 'Wordpress' }
    ]
    const [cardArr, setCardArr] = useState();
    const [btnArr, setBtnArr] = useState();
    const handleFilter = (btn) => {
        btnArr.forEach(btnEle => {
            btnEle.style.backgroundColor = 'none';
            if (btn === btnEle.textContent) {
                btnEle.style.backgroundColor = '#1679AB'
            }
            else {
                btnEle.removeAttribute('style')
            }
        })

        cardArr.forEach(card => {
            card.style.display = 'none';
            if (btn === card.dataset.value) {
                card.style.display = 'block'
            } else if (btn === 'All') {
                card.style.display = 'block'
            }
        });
    }
    useEffect(() => {
        const cards = document.querySelectorAll('.projectCard')
        let btns = document.querySelectorAll('.filterBtn')
        setCardArr(cards)
        setBtnArr(btns)
        btns.forEach(btnEle => {
            if (btnEle.textContent === 'All') {
                btnEle.style.backgroundColor = '#1679AB'
            }
        })
    }, [])
    return (
        <>
            <div className="headingCont">
                <h1>Projects we have done so far</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ducimus ipsam tenetur doloribus quaerat aliquid ali</p>
            </div>
            <div className="projectCont globalBG">
                <div className="filterCont">
                    <span><FontAwesomeIcon className="filterIcon" icon={faFilter} /> Filter</span>
                    <ul>
                        {
                            filterBtn.map(btn => <li
                                className="filterBtn"
                                onClick={() => handleFilter(btn)}
                                title={btn}
                                key={btn}>{btn}
                            </li>)
                        }
                    </ul>
                </div>
                <div className="projectCardCont">
                    {
                        cards.map(card => <PortCard
                            key={card.id}
                            imgPath={card.path}
                            dataValue={card.value}
                            slector={'projectCard'}
                            title={card.title}
                        />)
                    }
                </div>
            </div>
        </>
    )
}