import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 50px 0;
  border-bottom: 1px solid #4b5563; /* 1px bottom border with gray color */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SectionTitle = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  border-bottom: 4px solid #ec4899; /* Set border color to pink-600 */
  color: #fff; /* Set text color to white */
`;

const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center; /* Center items horizontally */
`;

const SkillCategory = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;

const SkillCategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  background-opacity: 0.25;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-weight: 500;
`;

const SkillCategoryTitle = styled.h3`
  font-size: 1.5em;
  margin: 0;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: ${(props) => (props.isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const SkillItem = styled.li`
  font-size: 1.1em;
  margin-bottom: 10px;
  padding-left: 20px;
  color: white; /* Set text color to white */
`;

const Skills = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitleContainer>
          <SectionTitle>Skills</SectionTitle>
        </SectionTitleContainer>
        <br></br>
        <SkillsContent>
          {skillData.map((category, index) => (
            <SkillCategory key={index}>
              <SkillCategoryHeader onClick={() => toggleCategory(index)}>
                <SkillCategoryTitle>{category.title}</SkillCategoryTitle>
                {openCategory === index ? <FaChevronUp /> : <FaChevronDown />}
              </SkillCategoryHeader>
              <SkillList isOpen={openCategory === index}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsContent>
      </Container>
    </SkillsSection>
  );
};

const skillData = [
  {
    title: 'Programming',
    skills: [
      'Python (NumPy, Pandas, Scikit-learn, Seaborn, TensorFlow, Keras)',
      'PySpark',
      'R',
      'SQL',
      'HTML5'
    ]
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      'Tableau',
      'Power BI',
      'GitHub',
      'ServiceNow',
      'Netcool',
      'Snowflake',
      'Big Query',
      'Databricks',
      'MLflow',
      'DBT cloud',
      'Docker',
      'Excel'
    ]
  },
  {
    title: 'Database & Cloud',
    skills: ['MySQL', 'PostgreSQL', 'MS Access', 'MongoDB', 'Azure', 'AWS']
  },
  {
    title: 'Data Analytics',
    skills: [
      'Normalization',
      'T-tests',
      'Chi-Squared tests',
      'Bayes Factor',
      'Hypothesis testing',
      'Sampling',
      'VIF',
      'Linear Assumptions'
    ]
  },
  {
    title: 'ML / Deep Learning',
    skills: [
      'Naive Bayes',
      'Random Forests',
      'Time Series',
      'Regression',
      'Bagging and Boosting',
      'Cosine Similarity',
      'Decision Trees',
      'Neural Networks',
      'LSTM',
      'GRU'
    ]
  },
  {
    title: 'NLP / AI',
    skills: [
      'BERT',
      'LLM',
      'GPT 3.5',
      'GEN AI',
      'OpenAI',
      'Transformers',
      'NLTK',
      'Spacy',
      'Word2Vec'
    ]
  }
];

export default Skills;