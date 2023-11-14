import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PageHeader from '../../components/PageHeader';
import projectsData from '../../data';
import { hyphenateName } from '../../helpers'; 

import { ReactComponent as IconDBLogo } from '../../assets/images/IconDB/logo3.svg';
import { ReactComponent as DrinkableLogo } from '../../assets/images/DRINKABLE/logo.svg';


export default function Detail() {
    const projects = projectsData.map((project) => ({
        ...project,
        summaryLinkLabel: project.internalPage
            ? null
            : project.name + ' live demo.',
        siteURL: project.siteName ? 'https://' + project.siteName : '#',
        path: '/project/' + hyphenateName(project.name),
    }));
    return (
        <StyledProject
            id="work"
            title="">
            <PageHeader
                title="project"
                desc="팀 & 개인 프로젝트 리스트." />
            <WorkContainer>
                <ProjectList aria-label='Projects.'>
                    {projects.map((project, key) => (
                        <ProjectItem key={key}>
                            <ProjectLogoBox
                                aria-label={project.summaryLinkLabel || undefined}
                                target={!project.internalPage ? '_blank' : undefined}
                                rel={!project.internalPage ? 'noopener noreferrer' : undefined}
                                to={project.internalPage ? project.path : project.siteURL}
                            >
                                {project.name} project summary.
                            </ProjectLogoBox>

                            <ProjectLogoFigure>
                            </ProjectLogoFigure>

                            <ProjectInfoBox>
                                <ProjectInfoHeading>{project.name}</ProjectInfoHeading>
                                {project.siteName && project.siteURL && (
                                    <ProjectInfoLink
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={project.name + ' live demo.'}
                                        to={project.siteURL}
                                    >
                                        {project.siteName}
                                    </ProjectInfoLink>
                                )}
                            </ProjectInfoBox>
                        </ProjectItem>
                    ))}
                    <ProjectItem>
                        <ProjectLogoFigure>
                            <span><IconDBLogo /></span>
                        </ProjectLogoFigure>
                        <ProjectInfoBox>
                            <ProjectInfoHeading>ICONDB</ProjectInfoHeading>
                        </ProjectInfoBox>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectLogoFigure>
                            <span><DrinkableLogo /></span>
                        </ProjectLogoFigure>
                        <ProjectInfoBox>
                            <ProjectInfoHeading>DRINKABLE</ProjectInfoHeading>
                        </ProjectInfoBox>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectLogoFigure>
                            <span></span>
                        </ProjectLogoFigure>
                        <ProjectInfoBox>
                            <ProjectInfoHeading>Personal Website</ProjectInfoHeading>
                            <ProjectInfoLink to="https://pjh-portfolio.netlify.app/">Jihun's Portfolio</ProjectInfoLink>
                        </ProjectInfoBox>
                    </ProjectItem>
                </ProjectList>
            </WorkContainer>
        </StyledProject >
    );
}
const StyledProject = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 3.5rem;
    
    @media (min-width: 651px) {
        font-size: 18px;
    }
    
    @media (min-width: 1024px) {
        margin-top: calc(3.5rem * 1.2);
    }
`;

const WorkContainer = styled.section``;

const ProjectList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProjectItem = styled.li`
    position: relative;
    flex-grow: 0;
    flex-shrink: 1;
    margin-bottom: 1.2rem;
    border-radius: 0.2rem;
    box-shadow: 0 8px 6px -6px rgba(235, 234, 242, 0.5);
    background-color: #FFF;
    overflow: hidden;
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transition-property: transform, box-shadow;

    @media (max-width: 659px) {
        width: 100%;
    }

    @media (min-width: 660px) and (max-width: 939px) {
        flex-basis: calc((100% - 1em) / 2);
    }

    @media (min-width: 940px) {
        flex-basis: calc((100% - 2em) / 3); 
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: 15px 8px 6px -6px rgba(235, 234, 242, 0.58);
    }
`;

const ProjectLogoBox = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
    transition: none;
    background-color: transparent;
`;

const ProjectLogoFigure = styled.figure`
    margin: 0;
    height: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(245, 244, 252, 0.62);
    transition: filter 0.3s;
`;

const ProjectInfoBox = styled.div`
    padding: 2em;
`;

const ProjectInfoHeading = styled.h5`
    margin: 0;
`;

const ProjectInfoLink = styled(Link)`
    white-space: pre;
    color: #3c8fdd;
`;