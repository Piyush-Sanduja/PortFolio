import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import logo from '../../assets/logo5.png'
import url from '../../assets/url3.jpg'
import Mail from '../../assets/mail_assist.jpg'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={logo}
          link="https://github.com/Piyush-Sanduja/LeetCode-Buddy"
          h3="LeetCodeBuddy"
          p="Coding Assistant"
        />
        <ProjectCard
          src={url}
          link="https://github.com/Piyush-Sanduja/URL-Shortner-main"
          h3="Shortify"
          p="A URL Shortener"
        />
        <ProjectCard
          src={Mail}
          link="https://github.com/Piyush-Sanduja/Email-assistant-main"
          h3="MailMate"
          p="An Email Asiistant"
        />
        
      </div>
    </section>
  );
}

export default Projects;
