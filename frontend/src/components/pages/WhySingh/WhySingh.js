import React from 'react'
import { whySinghObjOne, whySinghObjThree, whySinghObjTwo, whySinghObjFour, whySinghObjFive } from './Data';
import './WhySingh.css';

function WhySingh() {
    return (
        <>
            <div className="whysingh-outer-container">
                <div className="h1-container">
                    <h1 className="whysingh-h1">Why Choose Singh Realty?</h1>
                </div>
                <div className="row-container">
                    <div className="top-row">
                        <div className="whysingh-div1">
                            <div className="whysingh-img-container">
                                <img src={whySinghObjOne.img} alt={whySinghObjOne.alt} />
                            </div>
                            <div className="top-line-container">
                                <p className="top-line">
                                    {whySinghObjOne.topLine}
                                </p>
                            </div>
                            <div className="headline-container">
                                <p className="headline">
                                    {whySinghObjOne.headline}
                                </p>
                            </div>
                            <div className="desc-container">
                                <p className="description">
                                    {whySinghObjOne.description}
                                </p>
                            </div>
                        </div>
                        <div className="whysingh-div2">
                            <div className="whysingh-img-container">
                                <img src={whySinghObjTwo.img} alt={whySinghObjTwo.alt} />
                            </div>
                            <div className="top-line-container">
                                <p className="top-line">
                                    {whySinghObjTwo.topLine}
                                </p>
                            </div>
                            <div className="headline-container">
                                <p className="headline">
                                    {whySinghObjTwo.headline}
                                </p>
                            </div>
                            <div className="desc-container">
                                <p className="description">
                                    {whySinghObjTwo.description}
                                </p>
                            </div>
                        </div>
                        <div className="whysingh-div3">
                            <div className="whysingh-img-container">
                                <img src={whySinghObjThree.img} alt={whySinghObjThree.alt} />
                            </div>
                            <div className="top-line-container">
                                <p className="top-line">
                                    {whySinghObjThree.topLine}
                                </p>
                            </div>
                            <div className="headline-container">
                                <p className="headline">
                                    {whySinghObjThree.headline}
                                </p>
                            </div>
                            <div className="desc-container">
                                <p className="description">
                                    {whySinghObjThree.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-row">
                        <div className="whysingh-div4">
                            <div className="whysingh-img-container">
                                <img src={whySinghObjFour.img} alt={whySinghObjFour.alt} />
                            </div>
                            <div className="top-line-container">
                                <p className="top-line">
                                    {whySinghObjFour.topLine}
                                </p>
                            </div>
                            <div className="headline-container">
                                <p className="headline">
                                    {whySinghObjFour.headline}
                                </p>
                            </div>
                            <div className="desc-container">
                                <p className="description">
                                    {whySinghObjFour.description}
                                </p>
                            </div>
                        </div>
                        <div className="whysingh-div5">
                            <div className="whysingh-img-container">
                                <img src={whySinghObjFive.img} alt={whySinghObjFive.alt} />
                            </div>
                            <div className="top-line-container">
                                <p className="top-line">
                                    {whySinghObjFive.topLine}
                                </p>
                            </div>
                            <div className="headline-container">
                                <p className="headline">
                                    {whySinghObjFive.headline}
                                </p>
                            </div>
                            <div className="desc-container">
                                <p className="description">
                                    {whySinghObjFive.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhySingh
