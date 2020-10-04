import { useState, useEffect } from "react";

const UseHideOnScroll = () => {
    const [hidden, setHidden] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setHidden(currentScrollPos > prevScrollPos);
        setPrevScrollPos(currentScrollPos)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return hidden;
}

export default UseHideOnScroll
