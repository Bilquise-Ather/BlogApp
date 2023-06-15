import Navbar from '../components/Navbar'


export default function BaseLayout({ Children }) {

    return <>
        <Navbar />
        <Children />
    </>
}