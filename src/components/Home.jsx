import React, { useEffect, useState } from 'react'
import "./styles.css"

const Home = () => {
    const [color, setColor] = useState("teal")
    const [typeOfColor, setTypeOfColor] = useState("hex")

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    // random Hex Color
    const createRandomHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        let i;
        for (i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor)
    }
    // random Rgb Color
    const createRandomRgbColor = () => {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(() => {
        if (typeOfColor === "rgb") {
            createRandomRgbColor()
        }
        else {
            createRandomHexColor()
        }
    }, typeOfColor)

    const checkRandomColor = () => {
        if (typeOfColor === "hex") {
            return (createRandomHexColor)
        }
        else {
            return (createRandomRgbColor)
        }
    }

    const randomColorText = () => {
        if (typeOfColor === "hex") {
            return <h2>HEX COLOR</h2>
        }
        else {
            return <h2> RGB COLOR </h2>
        }
    }
    return (
        <div className='wrapper' style={{ backgroundColor: color, width: "100vw" }} >
            <div className="up">
                 <h2> Color Generator </h2>
            </div>
            <div className="down">
                <div className="box">
                    <div onClick={() => setTypeOfColor("hex")}>Create Hex Color</div>
                    <div onClick={() => setTypeOfColor("rgb")}>Create RGB Color</div>
                    <div onClick={checkRandomColor()}> Random Color </div>
                </div>

                <div className='color' style={{ display: "flex", color: "white", justifyContent: "center", alignItems: "center", fontSize: "30px", marginTop: "50px" }}>
                    <h1> {randomColorText()} </h1>
                    <h1>{color}</h1>
                </div>
            </div>
        </div>
    )

}
export default Home
