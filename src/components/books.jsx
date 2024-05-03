import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Books({ data, name }) {
    const [pdfUrl, setPdfUrl] = useState('');
    const [showIframe, setShowIframe] = useState(false);

    const handleReadMoreClick = (pdf) => {
        // setPdfUrl(pdf);
        // setShowIframe(true);

        // Scroll to the iframe
        const iframeSection = document.querySelector('.contact_section.iframe');
        if (iframeSection) {
            window.scrollTo({
                top: iframeSection.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <React.Fragment>
            <section className="blog_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>{name ? name : '  التصنيفات '}</h2>
                    </div>
                    <div className="row">
                        {data.map((Element, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="box">
                                    <div className="img-box">
                                        <img src={Element.url} alt="" />
                                        <h4 className="blog_date">
                                            <span>{Element.title}</span>
                                        </h4>
                                        <h4 className="blog_price">
                                            <span>{Element.pice} ريال</span>
                                        </h4> 
                                    </div>
                                    <div className="detail-box">
                                        <div className="div-btn">
                                            {Element.link ?
                                                <NavLink to={Element.link} href="technical-support.html" className="btn">
                                                    اقرأ المزيد
                                                </NavLink>
                                                :
                                                <button className="btn"
                                                    onClick={() => handleReadMoreClick(Element.pdf)} >
                                                    اقرأ المزيد
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <section className={`contact_section layout_padding iframe ${showIframe ? '' : 'd-none'}`}>
                <div className="container">
                    <iframe src={pdfUrl} style={{ width: '100%', height: '800px' }} />
                </div>
            </section> */}
        </React.Fragment>
    );
}

export default Books;
