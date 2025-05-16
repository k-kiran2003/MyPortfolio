

export default function Resume() {
    return (
        <>
      

            <main style={{ backgroundColor: 'black', margin: '1rem' }}>
                <iframe
                    src="Resume.pdf"
                    width="100%"
                    height="600px"
                    title="Resume PDF"
                ></iframe>
            </main>

           
            <div className="resume m-4">
              
                <p>Click the link below to download my resume.</p>
                <a className="m-3" href="/Resume.pdf" download>
                    Download Resume
                </a>
            </div>
        </>
    );
}
