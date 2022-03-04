import React, { Fragment, useContext } from 'react'
import TripsContext from '../../context/ManageTrips/tripsContext'
import './index.css'

const TableContent = ({ data }) => {
    const tripsContext = useContext(TripsContext);
    const { getTrips } = tripsContext;

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
        document.getElementById("Searchbar").value = val;
        getTrips({ keyword: val});
    }

    const tripItems = data.map((item, index) => {
        const tagsLength = item.tags.length;
        return (
            <div key={index} className="TripContainer">
                <div className="TripImageContent">
                    <img className="TripImageMain" src={item.photos[0]} alt="รูปภาพ"/>
                </div>
                <div className="TripContent">
                    <div className="TextContents">
                        <h1 className="TextTitle">
                            <a className="TextTitle" href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                        </h1>
                        <p className="TextDescription">
                            {truncateStringbyWord(item.description, 200)}
                            <a className="TextSeeMore" href={item.url} target="_blank" rel="noopener noreferrer">
                                อ่านต่อ
                            </a>
                        </p>
                        <p className="TextTags">
                            หมวด - 
                            {item.tags.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        {parseInt(index) + 1 === tagsLength? <span> และ </span> : " "}
                                        <span className="TextTag" onClick={() => handleClickTag(item)}>{item}</span>
                                    </Fragment>
                                )
                                })
                            }
                        </p>
                    </div>
                    <div className="ImageContents">

                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="TableContent">
            {tripItems}
        </div>
    );
}

export default TableContent;