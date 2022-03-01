import React from 'react'
import './index.css'

const Searchbar = () => {
    const getKeywordRequestAPI = async ({keyword}) => {
        console.log(keyword)

        await fetch('http://localhost:9000/trips')
        .then(response => response.json())
        .then(data => console.log(data));
        // try{
        //     await fetch(`http://localhost:9000/trips`)
        //         .then((res) => {
        //             res.json()
        //         }).then((result) => {
        //             JSON.stringify(result)
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })
        // } catch (err) {
        //     console.log(err)
        // }

        try{
            fetch(`http://localhost:9000/trips`, {
                method:'GET',
                headers:{"Content-Type":"application/json"}
            }).then((res) => res.json()).then((result) => {JSON.stringify(result)})
                // .then((res) => {
                //     res.json()
                // }).then((result) => {
                //     JSON.stringify(result)
                // })
                // .catch((err) => {
                //     console.log(err)
                // })
        } catch (err) {
            console.log(err)
        }
        // try{
        //     await fetch(`/trips`, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type':'application/json'
        //         },
        //     }).then(response => response.json())
        //     // .then((res) => res.json()).then((result) => {
        //     //     JSON.stringify(result)
        //     // })
        //     // .catch((err) => { console.log(err) })
        // } catch (err) {
        //     console.log(err)
        // }
        
        // // let response = await fetch(`/trips?eid=${keyword}`)
        // //     // .then((res) => {
        // //     //     console.log(res)
        // //     // })
        // //     // .then((res) => {
        // //     //     console.log('SUCCESS')
        // //     // })
        // //     // .then(data => console.log(data))
        // //     // .catch(error => console.log('ERROR'))   
        // // let responseJson = await response.json()
        // // // let fromServer = responseJson.myString
        // // // alert(fromServer)
    }

    function search(e) {
        if (e.key === 'Enter') {
            getKeywordRequestAPI({keyword: e.target.value});
        }
    }
    return (
      <input className="Searchbar" placeholder='ค้นหา' onKeyPress={search}>
      </input>
    );
  }
  
  export default Searchbar;