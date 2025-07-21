import { useState } from "react";

function Hero() {

    const [inputUrl, setInputUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const apiUrl = "https://bla5n0fp6e.execute-api.us-east-1.amazonaws.com/";

    const handleShortUrl = async () => {
        if (!inputUrl) return alert("Please enter a valid url!");
        try {
            const response = await fetch(`${apiUrl}/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: inputUrl,
                }),
            });

            const data = await response.json();
            console.log("API Response: " + data);
            if (!data.code) throw new Error("Invalid response");
            setShortUrl(`${apiUrl}${data.code}`);
        } catch (error) {
            console.error("Error shortening URL:", error);
            alert("Failed to shorten the URL.");
        }
    }

    const handleCopy = () => {
        if (!shortUrl) return;
        navigator.clipboard.writeText(shortUrl).then(() => alert("Short URL copied to clipboard!")).catch(() => alert("Failed to copy."));
    }

    return (
        <div className="flex w-full min-h-[800px] items-center justify-center flex-col">
            <h2 className="text-6xl font-semibold titillium-web-bold w-2/5 pb-5 px-5 text-center">Shorten your links quickly and securely!</h2>
            <p className="text-2xl titillium-web-regular">Paste a link below to receive a shortened link to share with your friends</p>
            <div className="flex pt-5 w-2/5 gap-2">
                <input type="text" placeholder="https://example.com" className="w-4/5 p-2 titillium-web-regular border" value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)} />
                <button className="cursor-pointer bg-blue-700 w-1/5 titillium-web-regular text-white" onClick={handleShortUrl}>Shorten URL</button>
            </div>
            {shortUrl && (
                <div className="flex flex-wrap gap-2 items-center justify-between mt-2">
                    <p className="p-2 titillium-web-regular">Your short generated link: </p>
                    <p className="text-emerald-600 p-2 titillium-web-regular underline">{shortUrl}</p>
                    <span className="material-symbols-outlined p-1 cursor-pointer" onClick={handleCopy}>
                        content_copy
                    </span>
                </div>
            )}
        </div>
    )
}

export default Hero;