import React, { useState } from 'react';
import styles from './box.module.css'

const Box = () => {
    const [boxInfo, setBoxInfo] = useState({
        color: "",
        size: 0
    })

    const [boxList, setBoxList] = useState([])

    const changeHandler = (event) => {
        // console.log("Changing info at", event.target.name)
        setBoxInfo({
            ...boxInfo,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("Created new box: ", boxInfo)
        setBoxList([...boxList, boxInfo])
        setBoxInfo({
            color: "",
            size: 0
        })
    }
    return(
        <>
            <div className="card col-5 text-center">
                <div className="card-body text-center">
                    <form onSubmit={submitHandler}>
                        <h1 className="text-center"> Create A Box</h1>
                        <p>Color: </p><input className="form-control" type="text" name="color" onChange={ changeHandler } value={boxInfo.color}/>
                        <p>Height/Width: </p><input className="form-control" type="number" name="size" onChange={ changeHandler } value={boxInfo.size}></input>
                        <input className="btn btn-success mt-3" type="submit" value="Create Box"></input>
                    </form>
                </div>
            </div>
                <h1>All Boxes</h1>
                <div className={styles.boxStyle}>
                {
                    boxList.map((box, i) => {
                                return <div className={styles.boxStyle} key={i} style={{backgroundColor: box.color, height: box.size + "px", width: box.size + "px"}}>
                                            <h1>{box.color}</h1>
                                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Box;