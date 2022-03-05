import React, { Fragment, useState } from 'react'
import CreateImageModal from './imageModal'
import { useSearchParams } from 'react-router-dom';
import './index.css'

const TableContent = ({ data }) => {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const truncateStringbyWord = (str, n) => {
        let temp = str;
        if (temp.length > n) { 
          temp = temp.slice(0, n-1);
          if (temp.lastIndexOf(" ") !== -1){
            temp = temp.slice(0, temp.lastIndexOf(" "))
          }
        }
        return temp + " .... ";
    }

    const handleClickTag = (val) => {
        const keyword = val;
        setSearchParams({ keyword });
    }

    const handleImageClick = (img) => {
        setModal(true);
        setImage(img);
    }

    const tripItems = data.map((item, index) => {
        const tagsLength = item.tags.length;
        return (
            <div key={index} className="trip-container">
                <div className="trip-image-content">
                    <img className="trip-image-main" src={item.photos[0]} alt={item.eid} onClick={() => handleImageClick(item.photos[0])}/>
                </div>
                <div className="trip-content">
                    <div className="text-contents">
                        <h1 className="text-title">
                            <a className="text-title" href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                        </h1>
                        <p className="text-description">
                            {truncateStringbyWord(item.description, 200)}
                            <a className="text-seemore" href={item.url} target="_blank" rel="noopener noreferrer">
                                อ่านต่อ
                            </a>
                        </p>
                        <p className="text-tags">
                            หมวด - 
                            {item.tags.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        {parseInt(index) + 1 === tagsLength? <span> และ </span> : " "}
                                        <span className="text-tag" onClick={() => handleClickTag(item)}>{item}</span>
                                    </Fragment>
                                )
                                })
                            }
                        </p>
                    </div>
                    <div className="image-contents-wrapper">
                        {item.photos.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        {index === 0? null : <img className="image-content" src={item} alt={"รูปภาพ" + index} onClick={() => handleImageClick(item)}/>}
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="table-content">
            {tripItems}
            {modal? (
                <CreateImageModal
                img={image}
                close={()=>setModal(false)}
                />
            ) : null}
        </div>
    );
}

export default TableContent;