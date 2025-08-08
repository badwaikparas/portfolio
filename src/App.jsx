import Header from "./PageLayout/Header"
import Content from "./PageLayout/Content"

function App() {
    return (
        <div className="bg-black w-screen h-screen text-white flex flex-col justify-start items-center overflow-y-scroll" style={{ scrollbarWidth: 'none' }}>
            <Header />
            <Content />
        </div>
    )
}

export default App
