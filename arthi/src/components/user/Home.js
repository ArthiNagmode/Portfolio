import React from "react";
import Header from "./Header";
import "../../mystyle/mystyle.css";
const Home =() =>
{

return(

<>
<Header/>
<div>
    <h1 className="Display-6 text-center ">
         Your in Home Page
    </h1>
</div>

<section class="intro">
        <h2>Welcome to My Portfolio</h2>
        <p>I am a recent graduate specializing in Computer Science Engineering. Below, you can explore my skills, projects, and get to know me better.</p>
         
    </section>

    

    <footer>
        <p>&copy; 2024  Arthi Nagmode. All rights reserved.</p>
    </footer>
</>

)


}
export default Home;