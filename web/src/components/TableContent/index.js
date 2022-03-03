import React from 'react'
import './index.css'

const TableContent = ({ data }) => {

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

    const tripItems = data.map((item, index) => {
        return (
            <div key={index} className="TripContainer">
                <div className="TripImageContent">
                    <img className="TripImageMain" src={item.photos[0]} alt="รูปภาพ"/>
                </div>
                <div className="TripContent">
                    <div className="TextContents">
                        <h1 className="TextTitle">{item.title}</h1>
                        {item.description.length > 200? (
                            <p className="TextDescription">{truncateStringbyWord(item.description, 200)}<a href={item.url} target="_blank">อ่านต่อ</a></p>
                        ) :
                            <p className="TextDescription">{item.description}</p>
                        }
                        <p>หมวด: 
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