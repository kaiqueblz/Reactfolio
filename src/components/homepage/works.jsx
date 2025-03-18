import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./athos.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Sistema Athos</div>
							<div className="work-subtitle">
							Analista de Suporte Tecnico Junior(DBA)
							</div>
							<div className="work-duration">2024</div>
						</div>

						<div className="work">
							<img
								src="./ligamidia.png"
								alt="ligamidia"
								className="work-image"
							/>
							<div className="work-title">Ligamidia</div>
							<div className="work-subtitle">
								Analista de t.i
							</div>
							<div className="work-duration">2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
