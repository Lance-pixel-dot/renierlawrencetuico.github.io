import Card from "./Card";
import weatherApp from "./assets/weather-app-min.png";
import rockPaperScissor from "./assets/rock-paper-scissors-min.png";
import calculator from "./assets/calculator-min.png";
import ticTacToe from "./assets/tic-tac-toe-min.png";
import game from "./assets/game.png";
import unityThumbnail from "./assets/unity-thumbnail.png";

function ProjectsSection(){
    return(
        <>
           <section>
               <section className="w-11/12 place-self-center p-4 mb-3" id="projects">
                   <h2 className="font-semibold text-3xl mb-3" data-aos="fade-up">Projects</h2>
                   <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center">
                       <Card description="A simple web application that fetches real-time weather data from an external API, allowing users to check the current weather conditions for any city. Features include temperature and GIF weather that changes base on the weather." gitHub="https://github.com/Lance-pixel-dot/weather-app" link="https://lance-pixel-dot.github.io/weather-app/" title="Weather App" img={weatherApp} displayGithub={"inline-block"}></Card>

                       <Card description="An interactive browser game where users can play Rock-Paper-Scissors against the computer. Implements basic game logic, random computer choices, score tracking, and a clean, responsive UI." gitHub="https://github.com/Lance-pixel-dot/rock-paper-scissors" link="https://lance-pixel-dot.github.io/rock-paper-scissors/" title="Rock Paper Scissor" img={rockPaperScissor} displayGithub={"inline-block"}></Card>

                       <Card description="A classic two-player Tic Tac Toe game that can be played against another person. Includes win detection, draw scenarios, and a polished user interface." gitHub="https://github.com/Lance-pixel-dot/tic-tac-toe" link="https://lance-pixel-dot.github.io/tic-tac-toe/" title="Tic Tac Toe" img={ticTacToe} displayGithub={"inline-block"}></Card>

                       <Card description="A functional digital calculator built with JavaScript that supports basic arithmetic operations like addition, subtraction, multiplication, and division. Features a simple and intuitive user interface." gitHub="https://github.com/Lance-pixel-dot/calculator" link="https://lance-pixel-dot.github.io/calculator/" title="Calculator" img={calculator} displayGithub={"inline-block"}></Card>

                       <Card description="A Video Game that tells a story of a student who encountered a virus software that summons monsters in the real world" gitHub="" link="https://game-project-siena.netlify.app/" title="Turn-based RPG Game" img={game} displayGithub={"hidden"}></Card>

                       <Card description="A set of Mini projects that I created while learning the Unity game engine" link="https://play.unity.com/api/v1/games/game/1b8f010a-a9ab-4935-8162-e628dcce24dd/build/latest/frame" title="Unity Game Engine Mini projects" img={unityThumbnail} displayGithub={"hidden"}></Card>
                   </section>
               </section>
           </section>
        </>
    );
}

export default ProjectsSection