import React from 'react'

function Contact() {
    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="heading_container ">
                            <h2 className="">
                                تواصل معنا
                            </h2>
                        </div>
                        <form action="#">
                            <div>
                                <input type="text" placeholder="الاسم" />
                            </div>
                            <div>
                                <input type="email" placeholder=" بريد إلكتروني " />
                            </div>
                            <div>
                                <input type="text" placeholder=" رقم الهاتف " />
                            </div>
                            <div>
                                <input type="text" className="message-box" placeholder=" رسالة " />
                            </div>
                            <div className="btn-box">
                                <button>
                                    إرسال
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src="/1571625929.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact