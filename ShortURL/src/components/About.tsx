function About() {
    return (
        <div className="text-center w-1/2 mx-auto min-h-[600px]">
            <h1 className="titillium-web-semibold text-6xl mb-4">What is a URL Shortener?</h1>
            <p className="titillium-web-regular text-xl text-justify ">A URL Shortener is a tool that converts long web addresses into shorter and compact links.
                Instead of sharing a long and complex URL, you can generate through this tool a compact version that will redirect the user to it's
                original URL. This is very useful to simplify links to share through social media, workspace, chats or any other space.
                <br />
                This project was built using <span className="titillium-web-semibold"> AWS Lambda</span>, <span className="titillium-web-semibold"> API Gateway</span>, and
                <span className="titillium-web-semibold"> Amazon S3</span>. These services allow the backend to run without managing servers, expose endpoints securely, and
                store data efficiently making the system scalable and cost-effective.
            </p>
        </div>
    )
}

export default About;