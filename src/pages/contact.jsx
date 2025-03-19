import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
						Entre em Contato: Formas de Falar Comigo
						</div>

						<div className="subtitle contact-subtitle">
							TObrigado pelo interesse em entrar em contato! Estou sempre aberto a feedbacks, perguntas e sugestões. Se quiser falar comigo diretamente, pode me enviar um e-mail em kaiqueoliveiracosta@gmail.com. Tento responder todas as mensagens dentro de 24 horas, mas pode levar um pouco mais em períodos mais movimentados. 
							&nbsp;{" "}
							Se preferir, podemos nos conectar pelo Linkedin Lá, compartilho atualizações e interajo com quem me acompanha, então fique à vontade para mandar uma mensagem.

Agradeço pelo interesse e espero falar com você em breve!{" "}
							<a
								href= "https://www.linkedin.com/in/kaique-oliveira-495b6b1a0/"
							>
								{INFO.socials.linkedin}
							</a>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
