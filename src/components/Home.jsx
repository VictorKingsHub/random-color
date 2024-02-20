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
    return (
        <div className='wrapper' style={{ backgroundColor: color, width: "100vw"}} >
            <div className="box">
                <div onClick={() => setTypeOfColor("hex")}>Create Hex Color</div>
                <div onClick={() => setTypeOfColor("rgb")}>Create RGB Color</div>
                <div onClick={typeOfColor === "hex" ? createRandomHexColor : createRandomRgbColor}> Random Color </div>
            </div>

            <div className='color' style={{ display: "flex", color: "white", justifyContent: "center", alignItems: "center", fontSize: "30px", marginTop: "50px" }}>
                <h1>{typeOfColor === "hex" ? "Hex Color: " : "RGB Color: "}</h1>
                <h1>{color}</h1>
            </div>

        </div>
    )

}
export default Home
