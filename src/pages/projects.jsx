import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
						Projetos que desenvolvi para deixar minha marca no mundo
						</div>

						<div className="subtitle projects-subtitle">
						Ao longo dos anos, trabalhei em diversos projetos e tenho orgulho do progresso que conquistei. Desenvolvi sites para lanchonetes e dentistas, além de um app para academia, sempre focando em funcionalidade e experiência do usuário. Muitos desses projetos fazem parte do meu aprendizado e evolução como desenvolvedor.

Se tiver interesse em conhecer meu trabalho, fique à vontade para explorar os códigos e sugerir melhorias. Acredito que a colaboração é uma excelente forma de aprendizado e estou sempre aberto a novas ideias e feedbacks!
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
