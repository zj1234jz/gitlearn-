import React from 'react'
import ThreeLayout from "./components/ThreeLayout"
export default function App() {
    return (
        <div>
            <ThreeLayout left={<div><h1>左边栏</h1></div>} right={<div><h1>右边栏</h1></div>}>
                <div>
                    <h1>主区域</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur .
                    </p>
                </div>
            </ThreeLayout>
        </div>
    )
}
