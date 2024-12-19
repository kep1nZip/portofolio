import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// import components
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoGoLang } from "react-icons/bi";
import { BsInstagram, BsGit } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";


//import images
import ganyu from '../assets/images/ganyu.gif'
import moii from '../assets/images/moii.png'


// import css
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'HTML',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'JavaScript',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'C++',
		icon: <TbBrandCpp size="25px" color="white" />,
		cssName: "cpp"
	},
	{
		name: 'Golang',
		icon: <BiLogoGoLang size="25px" color="white" />,
		cssName: "golang"
	},
];

const projects = [
	{
		name: 'Simple Calculator',
		github: 'https://github.com/kep1nZip/Calculator',
		description: 'My first project ever! I made this project by using HTML, CSS, and JavaScript. Need 5 hours to made it, also glad that this project was helped by one of my friend. (If you ask who is the character at background, its Saiba Momoi from Blue Archive)',
		image: moii
	},
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_gjbmeus', 'template_qk6p0pa', form.current, 'HDMwz57k3xrihLg4J')
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

	return (
		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
				<img src={ganyu} alt="ganyu" style={{ width: '50px', height: '50px' }} />					
					<h5>Johanes Kevin Agustahadi</h5>
				</a>
				<ul>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Project</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			}
			{/* NavBar end */}

			{/* Home */}
			<div id='Home' className={style.home}>
				<div className={style["home-content"]}>
					<h1>HEY, I'M Johanes Kevin Agustahadi</h1>
					<p>A little boy who wants to try to become a Fullstack Developer.</p>
					
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/kep1nZip' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/johanes-kevin-agustahadi-0362a733a/' >
						<AiFillLinkedin size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:johaneskevina@gmail.com?subject=SendMail&body=Description" >
						<BiLogoGmail size="30px" color='black' />
					</a>
					<a className={style.instagram} target="_blank" href='https://www.instagram.com/kep1n.zip/' >
						<BsInstagram size="30px" color='black' />
					</a>
				</div>
			</div>
			{/* Home end */}

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>About Me</h2>
					<p>Hello! I'm Johanes Kevin Agustahadi but you can call me "Kepin", I'm a Newbie Fullstack Web Developer loves to try something new. Check out my Project section! My hobbies are design and gaming! Maybe we can play together~.</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							<h3>Get to know me!</h3>
							<p>
								After graduated from Yos Sudarso Karawang High School, I decided to learn programming and my first program language was <span>C++</span>. I also discovered programming-related at social media and finally I found my interest which were <span>Front-end, and Back-end</span>, because I like design and manage a lot of code! Sometimes I also like to share my code at GitHub, so that feel free to Connect or Follow me on my <a href="https://github.com/kep1nZip" target="_blank">Github</a> where I post something about Programming (for fun for sure). <br /> <br />
								At 2024, I decided to study at <span>Telkom University Bandung</span> with my major in <span>Informatics/Computer Science</span>. At this moment, I'm trying to study more about <span>Go language, and Phyton</span>. Also feel free to cantact me at gmail or instagram! Maybe we can talk about something computer, programming, design, automotive, or even gaming related hehe~ =w=
							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>My Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* About end */}

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projects</h2>
					<p>Here you can see my project, (at this moment, I create project for personal only). Feel free to use the code below, because I share it for fun.</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											
											<IconButton
												width="100px"
												height="50px"
												backgroundColor="black"
												color="white"
												link={project.github}
												icon={<AiFillGithub size="25px" color='white' />}
											>
												Github
											</IconButton>
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>
			{/* Project end */}

			{/* Contact */}
			<div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contact</h2>
					<p>Feel free to Contact me by submitting the form below and (maybe) i'll answer back soon~ =w=</p>
					<form
						ref={form} onSubmit={sendEmail}
						className={
							clsx(
								{ [style['inactive-form']]: loading }
							)}
					>
						<InputField
							width="700px"
							height="40px"
							name="name"
							placeholder="Enter your name pwease :3"
							label="Name"
							type="text"
						/>
						<InputField
							width="700px"
							height="40px"
							name="email"
							placeholder="Enter your Email pwease :3"
							label="Email"
							type="email"
						/>
						<TextAreaField
							width="700px"
							height="250px"
							name="message"
							placeholder="Ohhh~~~ w-what is this message? i-is it l-love message? hehehe~ =w="
							label="Message"
							type="text"
						/>
						<SubmitButton
							icon={<RiSendPlaneFill size="20px" color='white' />}
							width="200px"
							height="60px"
							color="white"
							backgroundColor="var(--primary-main)"
						>
							Submit
						</SubmitButton>
						{
							loading &&
							<div className={style.loader}>
								<Loader />
							</div>
						}
					</form>
				</div>
			</div>
			{/* Contact end */}

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Johanes Kevin Agustahadi</h3>
							<p>A little boy who wants to try to become a Fullstack Developer.</p>
						</div>
						<div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/kep1nZip' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/johanes-kevin-agustahadi-0362a733a/' >
									<AiFillLinkedin size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:johaneskevina@gmail.com?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
								<a className={style.instagram} target="_blank" href='https://www.instagram.com/kep1n.zip/' >
									<BsInstagram size="30px" color='white' />
								</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						Made with LOVEEEE~ \UwU/ by <span>Johanes Kevin Agustahadi</span>
					</div>
				</div>
			</div>
		</div>
		// Footer end
	);
}

export default App;