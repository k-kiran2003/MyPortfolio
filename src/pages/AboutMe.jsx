

export default function About() {
    return (
        <main className="about-section">
            <div className="about-photos">
                <img src='/myImage.jpeg' alt="Kiran" className="img-fluid" />
            </div>

            <div className="about-me">
                <h1>Who am I?</h1>
                <p>
                    Hi, I'm <strong>Kiran</strong>, a final-year BCA student from Amritsar,
                    Punjab. I've successfully completed the MERN stack course from Apna College and received a certificate for the same.
                 I have a strong foundation in web development, including HTML, CSS, and JavaScript, and  Bootstrap for responsive design.
                                      I am passionate about coding and always eager to learn new technologies and frameworks.
                         I am a quick learner and adapt well to new challenges. I thrive in collaborative environments and enjoy working with teams to achieve common goals.
                    I am excited about the opportunity to work on innovative projects and contribute to the success of a dynamic organization.
                    I am actively seeking internship opportunities to gain practical experience and further develop my skills .
                     Currently, I'm learning Data Structures and Algorithms (DSA) with Java to strengthen my problem-solving skills. 
                    
                </p>

            

                <h2>Outside of work, you can find me</h2>
                <span> Dancing | Exercising | cooking</span>

                <p>
                    If you're interested in working together or have any opportunities
                    for internships, please{" "}
                    <a href="/contact">get in touch</a>! I'd love to connect and discuss
                    how I can contribute to your projects.
                </p>
            </div>
        </main>
    );
}
