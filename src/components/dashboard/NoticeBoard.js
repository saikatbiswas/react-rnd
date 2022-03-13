import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const NoticeBoard = ({items})=>{

    

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderItem = ()=>(
        items.map(item=>(
            <div key={item.i_notice_board_id} className="slider-inner-box">
                <p><strong>{item.dt_date}</strong></p>
                <div dangerouslySetInnerHTML={{ __html: item.s_notice}}></div>
                {item.s_upload_file?
                    <div className="notice-link-container">
                        <Link className="notice-link" target="_blank" to={item.s_upload_file} download><FileDownloadIcon /></Link>    
                    </div>
                    :null
                }
            </div>
        ))
    );

    return(
        <div className="card-body-left-border ">
            <h2 className="notice-board-heading">Notice Board</h2>
        <Slider {...settings}>
            {sliderItem()}
        </Slider>

        </div>
    )
}

export default NoticeBoard;